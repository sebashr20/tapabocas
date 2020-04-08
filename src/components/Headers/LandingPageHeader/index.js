import React, { Fragment, createRef, useEffect } from "react";
import { HashLink } from "react-router-hash-link";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components
const backgroundImage =
  "https://res.cloudinary.com/sebashr20/image/upload/v1586315564/v64l83ia2uqap5cwhkxg.jpg";

const LandingPageHeader = () => {
  let pageHeader = createRef();

  useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <Fragment>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
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
              to="#como-funciona"
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
