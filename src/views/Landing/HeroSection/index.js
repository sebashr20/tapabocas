import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faUserMd,
  faPaperPlane,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

const HeroSection = () => {
  return (
    <Fragment>
      <div className="section text-center" id="garantia">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <h2 className="title">Nuestra Garantía</h2>
              <h5 className="description">
                Protégete con tapabocas de alta calidad.
              </h5>
              <br />
            </Col>
          </Row>
          <br />
          <br />
          <Row>
            <Col md="3" className="mb-5">
              <div className="info">
                <div className="icon icon-info">
                  <FontAwesomeIcon icon={faUserMd} className="mr-2" />{" "}
                </div>
                <div className="description">
                  <h4 className="info-title mt-1 mb-2">Seguridad</h4>
                  <p className="description">
                    Usamos únicamente insumos quirúrgicos de alta durabilidad,
                    no tejidos, anti-fluidos.
                  </p>
                </div>
              </div>
            </Col>
            <Col md="3" className="mb-5">
              <div className="info">
                <div className="icon icon-info">
                  <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
                </div>
                <div className="description">
                  <h4 className="info-title mt-1 mb-2">Calidad</h4>
                  <p>
                    Nuestros productos son lavables y no-tóxicos. Cumplimos con
                    todas las medidas higiénicas.
                  </p>
                </div>
              </div>
            </Col>
            <Col md="3" className="mb-5">
              <div className="info">
                <div className="icon icon-info">
                  <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                </div>
                <div className="description">
                  <h4 className="info-title mt-1 mb-2">Envío</h4>
                  <p>
                    Envíos a todo el país. Producto termosellado para conservar
                    su calidad en el transporte.
                  </p>
                </div>
              </div>
            </Col>
            <Col md="3" className="mb-5">
              <div className="info">
                <div className="icon icon-info">
                  <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />{" "}
                </div>
                <div className="description">
                  <h4 className="info-title mt-1 mb-2">Pagos</h4>
                  <p>
                    Pagos en línea de forma rápida y segura, respaldados por
                    Bancolombia.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default HeroSection;
