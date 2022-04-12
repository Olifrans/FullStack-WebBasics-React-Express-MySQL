import React, { Fragment } from "react";
import { Nav } from "react-bootstrap";
import { BrowserRouter, Route, Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import routes from "./conf/routes";




function App() {
  const [cookies, setCookie, removeCookie] = useCookies(["userId"]);

  //Redefinir a idade máxima do nosso useId
  if (cookies && cookies.userId) {
    setCookie("userId", cookies.userId, {
      path: "/",
      maxAge: process.env.REACT_APP_ENV_COOKIES_MAX_AGE,
    });
  }

  //Verifica se o usario estar logado
  function isLoggedIn() {
    return cookies.userId === "undefined" || !cookies.userId ? false : true;
  }

  return (
    <BrowserRouter className="App">
      <Nav defaultActiveKey="/">
        {isLoggedIn() ? (
          <Fragment>
            <Nav.Item as="li">
              <Nav.Link href="/post">Post</Nav.Link>
            </Nav.Item>

            <Nav.Item as="li">
              <Nav.Link
                onClick={() => {
                  removeCookie("userId");
                }}
              >
                Logout
              </Nav.Link>
            </Nav.Item>
          </Fragment>
        ) : (
          <Nav.Item as="li">
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav.Item>
        )}
      </Nav>

      <Fragment>
        {routes.map((path, component, name) => {
          return <Route path={path} key={name} component={component} />;
        })}
      </Fragment>
    </BrowserRouter>
  );
}

export default App;