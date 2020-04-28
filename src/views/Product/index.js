import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { skus, products } from 'utils/productList';

// reactstrap components
import { Container, Row, Button, Col, UncontrolledCarousel } from 'reactstrap';

// core components
import { SimpleNavbar, Footer } from 'components';

const Product = () => {
  const handleClick = async () => {
    window.open('https://checkout.wompi.co/l/IM4Upb', '_self');
  };

  return (
    <Fragment>
      <SimpleNavbar />
      <Container>
        <div className="section mt-1 pt-2">
          <Row className="mb-4">
            <Col xs="12" md="6">
              <h2 className="title mb-0">Tapabocas Tipo 4</h2>
              <UncontrolledCarousel items={products[2].carousel} />
            </Col>
            <Col xs="12" md="6">
              <h3 className="mt-4">Características</h3>
              <p className="mt-3">{products[2].description}</p>

              <h3 className="mt-4">Precio</h3>
              <p className="mt-2">
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
      </Container>
      <Footer />
    </Fragment>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     cart: state.cart.cart,
//   };
// };

export default connect(null, null)(withRouter(Product));
