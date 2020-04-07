import React, { Fragment, useEffect } from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

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
      <span id="como-funciona" />
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">¿Cómo funciona?</h2>
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
        <div
          className="section section-dark section-nucleo-icons"
          id="servicios"
        >
          <Container className="mt-5 mb-5">
            <Row>
              <Col lg="6" md="12">
                <h2 className="title">Servicios</h2>
                <p className="description">
                  El equipo de Workorona es experto en resolver talleres y
                  trabajos, y en dar asesorías personalizadas y grupales para
                  estudiantes de primaria, secundaria y universidad, en
                  múltiples áreas del conocimiento:
                </p>
                <br />
                <Row className="description">
                  <Col>
                    <p>·Matemáticas</p>
                    <p>·Geometría</p>
                    <p>·Química</p>
                    <p>·Física</p>
                    <p>·Cálculo</p>
                    <p>·Biología</p>
                  </Col>
                  <Col>
                    <p>·Historia</p>
                    <p>·Geografía</p>
                    <p>·Filosofía</p>
                    <p>·Política</p>
                    <p>·Español</p>
                    <p>·Inglés</p>
                  </Col>
                  <Col>
                    <p>·Alemán</p>
                    <p>·Redacción</p>
                    <p>·Ortografía</p>
                    <p>·Diseño</p>
                    <p>·Adobe</p>
                    <p>·Javascript</p>
                  </Col>
                </Row>
              </Col>
              <Col lg="6" md="12">
                <div className="icons-container mt-4 mb-4">
                  <i className="nc-icon nc-chat-33" />
                  <i className="nc-icon nc-chart-bar-32" />
                  <i className="nc-icon nc-book-bookmark" />
                  <i className="nc-icon nc-sound-wave" />
                  <i className="nc-icon nc-chart-pie-36" />
                  <i className="nc-icon nc-hat-3" />
                  <i className="nc-icon nc-zoom-split" />
                  <i className="nc-icon nc-layout-11" />
                  <i className="nc-icon nc-atom" />
                  <i className="nc-icon nc-single-copy-04" />
                  <i className="nc-icon nc-glasses-2" />
                  <i className="nc-icon nc-planet" />
                  <i className="nc-icon nc-globe-2" />
                  <i className="nc-icon nc-caps-small" />
                  <i className="nc-icon nc-bulb-63" />
                </div>
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
