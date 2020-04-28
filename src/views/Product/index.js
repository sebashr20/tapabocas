import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { skus, products } from 'utils/productList';

// reactstrap components
import { Container, Row, Button, Col, UncontrolledCarousel } from 'reactstrap';

// core components
import { SimpleNavbar, Footer } from 'components';
import { VideoSection } from '../Landing/components';

const Product = () => {
  const handleClick = async () => {
    window.open('https://checkout.wompi.co/l/IM4Upb', '_self');
  };

  return (
    <Fragment>
      <SimpleNavbar />
      <Container>
        <div className="section mt-1 pb-0">
          <Row className="mb-4">
            <Col xs="12" md="6">
              <h2 className="title mb-2">Tapabocas Tipo 4</h2>
              <UncontrolledCarousel items={products[2].carousel} />
            </Col>
            <Col xs="12" md="6">
              <h3 className="mt-4 pt-2 mb-1">Características</h3>
              {products[2].description}

              <h3 className="mt-4 mb-1">Precio</h3>
              <p className="my-0">
                <strong>$ {Intl.NumberFormat().format(skus[5].price)} </strong>+
                $13,000 (envío nacional)
              </p>

              <Button
                color="info"
                style={{ width: '100%' }}
                className="mt-4"
                size="lg"
                onClick={handleClick}
              >
                Comprar
              </Button>
            </Col>
          </Row>
        </div>
        <VideoSection />
      </Container>
      <Footer />
    </Fragment>
  );
};

export default connect(null, null)(withRouter(Product));
