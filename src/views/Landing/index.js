import React, { Fragment, useEffect } from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";

// core components
import { Navbar, LandingPageHeader, Footer } from "components";
import FormSection from "./SendSection";

const LandingPage = () => {
  document.documentElement.classList.remove("nav-open");
  useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

  return (
    <Fragment>
      <Navbar />
      <LandingPageHeader />
      <span id="garantia" />
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Nuestra Garantía</h2>
                <h5 className="description">Usar Workorona es muy simple.</h5>
                <br />
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="3" className="mb-5">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-send" />
                  </div>
                  <div className="description">
                    <h4 className="info-title mt-1 mb-2">Envío</h4>
                    <p className="description">
                      Nos envías un archivo o una fotografía de los ejercicios
                      que te interesa resolver y una explicación de lo que
                      quieres.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="3" className="mb-5">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-money-coins" />
                  </div>
                  <div className="description">
                    <h4 className="info-title mt-1 mb-2">Cotización</h4>
                    <p>
                      En menos de una hora te decimos el costo del trabajo y su
                      explicación de acuerdo a su longitud y dificultad.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="3" className="mb-5">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-delivery-fast" />
                  </div>
                  <div className="description">
                    <h4 className="info-title mt-1 mb-2">Entrega</h4>
                    <p>
                      En 48 horas o menos te enviamos a tu correo el trabajo
                      resuelto y un video explicándote la solución (opcional).
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="3" className="mb-5">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-ruler-pencil" />
                  </div>
                  <div className="description">
                    <h4 className="info-title mt-1 mb-2">Asesoría</h4>
                    <p>
                      También ofrecemos asesorías personalizadas o grupales en
                      múltiples áreas del conocimiento.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <span id="productos" />
        <div className="section section-dark text-center">
          <Container>
            <h2 className="title">Nuestros Productos</h2>
            <h5 className="description">Usar Workorona es muy simple.</h5>
            <br />
            <br />
            <Row>
              <Col md="4">
                <Card style={{ width: "20rem" }}>
                  <CardImg
                    top
                    src={require("assets/img/qr-test.jpeg")}
                    alt="..."
                  />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <Button color="primary">Go somewhere</Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card style={{ width: "20rem" }}>
                  <CardImg
                    top
                    src={require("assets/img/qr-test.jpeg")}
                    alt="..."
                  />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <Button color="primary">Go somewhere</Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card style={{ width: "20rem" }}>
                  <CardImg
                    top
                    src={require("assets/img/qr-test.jpeg")}
                    alt="..."
                  />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <Button color="primary">Go somewhere</Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <FormSection />
      </div>
      <Footer />
    </Fragment>
  );
};

export default LandingPage;
