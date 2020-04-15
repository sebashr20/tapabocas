import React, { Fragment } from 'react';
import ReactPlayer from 'react-player';

// reactstrap components
import { Container, Row, Col } from 'reactstrap';

// core components
const videoUrl = 'https://youtu.be/H8qJHeXfWIA';

const VideoSection = () => {
  return (
    <Fragment>
      <div className="section text-center" id="garantia">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto">
              <h2 className="title">Pruebas de calidad</h2>
              <h5 className="description">
                Aseguramos los altos estándares de nuestros productos, para ello
                realizamos y ponemos a tu disposicion nuestras pruebas de
                calidad.
              </h5>
            </Col>
          </Row>
          <br />
          <br />
          <Row>
            <Col className="ml-auto mr-auto" md="7">
              <ReactPlayer
                url={videoUrl}
                volume={0.4}
                controls
                width="100%"
                height="25em"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default VideoSection;
