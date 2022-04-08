import React, { Fragment, Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Helmet } from "react-helmet";

class Login extends Component {
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
              <Form>
                  
              </Form>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
