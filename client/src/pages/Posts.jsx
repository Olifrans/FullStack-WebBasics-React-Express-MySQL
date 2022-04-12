import React, { Fragment, useState, useEffect } from "react";
import { Button, Container, Row, Col, Form, Card } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";

const axios = require("axios");
const moment = require("moment");

export default function Posts() {
  const [cookies, setCookie, removeCookie] = useCookies(["userId"]);
  const [post, setPost] = useState("");
  const [postList, setPostList] = useState([{}]);

  const getList = () => {
    axios
      .get("http://localhost:3001/posts/user/" + cookies.userId)
      .then((res) => {
        if (res) {
          setPostList(res.data);
        }
      });
  };

  useEffect(() => {
    getList();
  }, []);

  if (!cookies.userId) {
    return <Navigate to="/login" />;
  }

  //Lida com a mudanças da caixa de entrada
  const handleChange = (event) => {
    setPost(event && event.target.value ? event.target.value : "");
  };

  //salvar post
  const save = async () => {
    if (post) {
      axios
        .post("http://localhost:3001/posts", {
          user_id: cookies.userId,
          content: post,
        })
        .then(async (res) => {
          await getList();
          setPost(null);
        });
    }
  };

  //Excluir post
  const remove = async (id) => {
    console.log(id);
    axios.delete("http://localhost:3001/posts/" + id).then(async (res) => {
      await getList();
    });
  };

  return (
    <Fragment>
      <Helmet>
        <title>Post</title>
      </Helmet>
      <Container>
        <Row>
          <Col>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Post</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                value={post || ""}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="button" onClick={save}>
              Posts mensagem
            </Button>
            <br />
            <br />
          </Col>
        </Row>

        <Row>
          <Col>
            <h2>Posts</h2>
            {postList.length &&
              postList.map((item, index) => {
                return (
                  <Card key={index} style={{ width: "18rem" }}>
                    <Card.Body>
                      <Card.Subtitle className="mb-2 text-muted">
                        {moment(item.date_time).format("LLL")}
                      </Card.Subtitle>
                      <Card.Text>{item.content}</Card.Text>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => remove(item.id)}
                      >
                        Deletar Post
                      </Button>
                    </Card.Body>
                  </Card>
                );
              })}
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
