import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShieldAlt,
  faIndustry,
  faPaperPlane,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';

// reactstrap components
import { Container, Row, Col } from 'reactstrap';

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
                  <FontAwesomeIcon icon={faShieldAlt} className="mr-2" />{' '}
                </div>
                <div className="description">
                  <h4 className="info-title mt-1 mb-2">Seguridad</h4>
                  <p className="description">
                    Nuestros insumos cumplen las especificaciones delimitadas
                    por el Ministerio de Salud, INVIMA e ICONTEC para la
                    fabricación e importación.
                  </p>
                </div>
              </div>
            </Col>
            <Col md="3" className="mb-5">
              <div className="info">
                <div className="icon icon-info">
                  <FontAwesomeIcon icon={faIndustry} className="mr-2" />
                </div>
                <div className="description">
                  <h4 className="info-title mt-1 mb-2">Producción</h4>
                  <p>
                    Todo nuestro proceso productivo y de almacenamiento cuenta
                    con todas condiciones de sanidad, higiene, protección y
                    desinfección.
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
                    Utilizamos insumos antialérgicos, antiestáticos, no-tóxicos.
                    Nuestros productos cumplen con pruebas de calidad,
                    resistencia, eficiencia y durabilidad.
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
                    Despachamos a gran parte del territorio Nacional Colombiano,
                    empacamos adecuadamente para conservar la calidad e
                    integridad durante el transporte.
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
