import React, { Fragment, Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Helmet } from "react-helmet";

// Need to set these for the cookies
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";

class Login extends Component {
  //Adicionar o manipulador de cookies aos adereços de classe
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired,
  };

  constructor(props) {
    super(props);

    //Use axios
    this.axios = require("axios");

    //Component state
    this.state = {
      email: null,
      password: null,
      isAuthenticating: false,
      errorMessage: null,
    };
  }

  isNotEmptyFields = () => {
    return this.state.email && this.state.password ? true : false;
  };

  login = () => {
    if (!this.isNotEmptyFields()) return;

    this.setState(
      (prevState) => {
        return Object.assign({}, prevState, {
          isAuthenticating: true,
        });
      },
      () => {
        this.loginProcess();
      }
    );
  };

  loginProcess = () => {
    if (this.state.isAuthenticating) {
      //Atribui credencial de autenticação básica
      const username = this.state.email;
      const password = this.state.password;

      // Convert base64
      const token = Buffer.from(`${username}:${password}`, "utf8").toString(
        "base64"
      );
      const url = "http://localhost:3001/authenticate";

      this.axios
        .post(
          url,
          {},
          {
            headers: {
              Authorization: `Basic ${token}`,
            },
          }
        )

        .then((response) => {
          //Define o cookie do usuário
          this.setState(
            (prevState) => {
              return Object.assign({}, prevState, {
                isAuthenticating: false,
              });
            },
            () => {
              if (response.data.id) {
                this.setUserCookie(response.data.id);
                window.location.href = "/post";
              } else {
                this.setState((prevState) => {
                  return Object.assign({}, prevState, {
                    errorMessage: response.data.message,
                  });
                });
              }
            }
          );
        })

        .catch(() => {
          this.setState((prevState) => {
            return Object.assign({}, prevState, {
              isAuthenticating: false,
            });
          });
        });
    }
  };

  setUserCookie = (id) => {
    this.props.cookies.set("userId", id, {
      path: "/",
      maxAge: process.env.REACT_APP_ENV_COOKIES_MAX_AGE,
    });
  };

  //Lida com a mudanças da caixa de entrada
  handleChange = (event) => {
    let { name, value } = event.target;

    this.setState((prevState) => {
      return Object.assign({}, prevState, {
        [name]: value,
      });
    });
  };

  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Login</title>
        </Helmet>
        <Container>
          <Row>
            <Col>
              <h2>Login</h2>
              {this.state.errorMessage ? (
                <p style={{ color: "red" }}>{this.state.errorMessage}</p>
              ) : (
                ""
              )}

              <Form>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Digite seu email..."
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Senha</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Digite a senha..."
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Button
                  disabled={this.state.isAuthenticating ? true : false}
                  variant="primary"
                  type="button"
                  onClick={this.login}
                >
                  Fazer Login
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default withCookies(Login);
