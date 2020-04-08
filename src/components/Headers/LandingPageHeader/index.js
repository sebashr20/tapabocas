import React, { Fragment } from "react";
import { HashLink } from "react-router-hash-link";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components
const backgroundImage =
  "https://res.cloudinary.com/sebashr20/image/upload/q_auto:low/v1586315564/v64l83ia2uqap5cwhkxg.jpg";

const LandingPageHeader = () => {
  return (
    <Fragment>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
        className="page-header"
      >
        <div className="filter" />
        <Container>
          <div className="motto text-left">
            <span className="text-shadow">
              <Row>
                <Col xs="12" md="7">
                  <h1>Proteje tu vida y la de tu familia en todo momento</h1>
                  <h3>Usa solo tapabocas de alta calidad</h3>
                </Col>
              </Row>
            </span>
            <Button
              className="btn-round mt-4"
              color="info"
              type="button"
              tag={HashLink}
              smooth
              to="#garantia"
            >
              Conoce nuestros productos
            </Button>
          </div>
        </Container>
      </div>
    </Fragment>
  );
};

export default LandingPageHeader;
