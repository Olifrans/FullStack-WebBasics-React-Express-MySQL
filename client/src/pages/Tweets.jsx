import React, { Fragment, useState, useEffect } from "react";
import { Button, Container, Row, Col, Form, Card } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";



class Tweets extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Tweet</title>
        </Helmet>
        <Container>
          <Row>
            <Col>
              <h2>Tweets</h2>
              <Form>
                  
              </Form>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
