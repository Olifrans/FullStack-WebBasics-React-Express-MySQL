import React, { Fragment } from "react";
import { Nav } from "react-bootstrap";
import { BrowserRouter, Route, Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import "bootstrap/dist/css/bootstrap.min.css";

//import "bootstrap/dist/css/bootstrap.css";
//import "bootstrap/dist/css/bootstrap-theme.css";

import "./css/App.css";

function App() {
  return (
    <BrowserRouter className="App">
      <Nav defaultActiveKey="/">
        <Nav.Item as="li">
          <Nav.Link href="/">Tweet</Nav.Link>
        </Nav.Item>

        <Nav.Item as="li">
          <Nav.Link href="/">Logout</Nav.Link>
        </Nav.Item>

        <Nav.Item as="li">
          <Nav.Link href="/">Login</Nav.Link>
        </Nav.Item>
      </Nav>
    </BrowserRouter>
  );
}

export default App;
