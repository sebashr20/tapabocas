import React, { Fragment, useEffect, useState } from "react";
import ReactMarkdown from "markdown-to-jsx";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

const MarkdownText = ({ title, body }) => {
  document.documentElement.classList.remove("nav-open");
  useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

  const [post, setPost] = useState("");

  useEffect(() => {
    fetch(body)
      .then(res => res.text())
      .then(response => setPost(response))
      .catch(err => console.log(err));
  });

  return (
    <Fragment>
      <div className="main">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" xs="12">
              <h2 className="title">{title}</h2>
              <br />
            </Col>
          </Row>
          <Row>
            <Col className="ml-auto mr-auto" xs="12">
              <ReactMarkdown className="text-justify">{post}</ReactMarkdown>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default MarkdownText;
