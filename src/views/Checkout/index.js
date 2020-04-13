import React, { Fragment, useContext } from 'react';
import { HashLink } from 'react-router-hash-link';
import ShopContext from 'context/shop-context';

// actions

// reactstrap components
import { Container, Row, Button } from 'reactstrap';

// core components
import { SimpleNavbar, Footer, MainAlert } from 'components';
import { Cart, Summary } from './components';

const Checkout = () => {
  const { cart, totalQuantity } = useContext(ShopContext);
  return (
    <Fragment>
      <SimpleNavbar />
      {totalQuantity > 0 ? (
        <MainAlert
          text={
            <span>
              Al terminar tu pago, recuerda darle click al botón{' '}
              <strong>REGRESAR AL COMERCIO</strong> para procesar tu orden.
            </span>
          }
          color={'danger'}
        />
      ) : null}
      {totalQuantity >= 10 ? (
        <MainAlert
          text={
            <span>
              Solo puedes comprar máx. 10 items. Si requieres más,{' '}
              <Button
                to="/#institucionales"
                tag={HashLink}
                className="btn-link my-0 py-0 mx-0 px-0 btn-alert"
                style={{ fontSize: '20px' }}
              >
                <strong>contáctanos.</strong>
              </Button>
            </span>
          }
          color={'info'}
        />
      ) : null}
      <Container>
        <div className="section mt-1 pt-2">
          {cart.length <= 0 ? (
            <Fragment>
              <div className="text-center">
                <p>No hay productos en el carrtio.</p>
                <Button color="info" size="lg" to="/#productos" tag={HashLink}>
                  Ver productos
                </Button>
              </div>
            </Fragment>
          ) : (
            <Fragment>
              <Container>
                <Row>
                  <Cart />
                  <Summary />
                </Row>
              </Container>
            </Fragment>
          )}
        </div>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default Checkout;
