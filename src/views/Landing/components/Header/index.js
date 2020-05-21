import React, { Fragment } from 'react';
import { HashLink } from 'react-router-hash-link';

// reactstrap components
import { Button, Container, Row, Col } from 'reactstrap';

// core components
const backgroundImage =
  'https://res.cloudinary.com/sebashr20/image/upload/q_auto:low/v1586632962/tapabocasya/background.jpg';

const header = () => {
  return (
    <Fragment>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
        alt="Foto de Médico creado por freepik - www.freepik.es"
        className="page-header"
      >
        <div className="filter" />
        <Container>
          <div className="motto text-left">
            <span style={{ color: 'rgb(30, 25, 75)' }}>
              <Row>
                <Col xs="12" md="7">
                  <h1 style={{ marginTop: '1.8em' }}>
                    Protege tu vida y la de tu familia en todo momento.
                  </h1>
                  <h3>
                    Usa sólo tapabocas de alta calidad y que te brinden una
                    protección <strong>real.</strong>
                  </h3>
                </Col>
              </Row>
            </span>
            <Button
              className="my-4"
              color="info"
              tag={HashLink}
              smooth
              to="#productos"
              size="lg"
            >
              Conoce nuestros productos
            </Button>
          </div>
        </Container>
      </div>
    </Fragment>
  );
};

export default header;
