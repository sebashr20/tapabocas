import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import randomCode from 'crypto-random-string';
import ShopContext from 'context/shop-context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// reactstrap components
import {
  Container,
  Row,
  Col,
  Button,
  InputGroup,
  Input,
  Form,
  FormText,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';

// core components
import { SimpleNavbar, Footer } from 'components';

// formik schema
const CheckoutSchema = Yup.object().shape({
  address: Yup.string()
    .min(10, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Requerido'),
  phone: Yup.number().required('Required'),
});

const Checkout = () => {
  // global contex
  const {
    cart,
    totalAmount,
    totalQuantity,
    addProductToCart,
    removeProductFromCart,
    clearProductFromCart,
  } = useContext(ShopContext);

  // costs
  const deliveryCost = 10000;
  const totalCost = totalAmount + deliveryCost;

  // wompi parameters
  const wompiData = {
    // publicKey: "pub_test_Q5yDA9xoKdePzhSGeVe9HAez7HgGORGf",
    publicKey: 'pub_prod_EZzHWiChAZe3YIAZCJGAs1v84Sz62M9O',
    currency: 'COP',
    value: totalCost * 100,
    reference: randomCode({ length: 6 }),
    // redirectUrl: "http://localhost:3000/checkout/status",
    redirectUrl: 'https://tapabocasya.com/checkout/status',
  };
  const { publicKey, currency, value, reference, redirectUrl } = wompiData;
  const newRedirectUrl = redirectUrl.replace(/:/g, '%3A').replace(/\//g, '%2F');
  const url = `https://checkout.wompi.co/p/?public-key=${publicKey}&currency=${currency}&amount-in-cents=${value}&reference=${reference}&redirect-url=${newRedirectUrl}`;

  // fromik config
  const { values, handleSubmit, handleChange, errors, touched } = useFormik({
    initialValues: {
      address: '',
      phone: '',
    },
    validationSchema: CheckoutSchema,
    onSubmit: async ({ address, phone }) => {
      const delivery = [];
      await cart.map((item) => {
        return delivery.push({
          id: item.id,
          quantity: item.quantity,
        });
      });
      const formData = {
        ref: reference,
        cart: delivery,
        address: address,
        phone: phone,
      };
      // to firebase
      console.log('ADR', formData);
      window.open(url, '_blank');
    },
  });
  const { address, phone } = values;

  return (
    <Fragment>
      <SimpleNavbar />
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
                <Row className="">
                  <Col xs="12" md="9" className="px-2 my-2">
                    {cart.map((cartItem) => (
                      <ListGroup flush key={cartItem.id}>
                        <ListGroupItem className="px-0">
                          <Row>
                            <Col xs="3">
                              <Row>
                                <Col>
                                  <img
                                    alt="..."
                                    style={{ width: '100%' }}
                                    src={cartItem.img}
                                  />
                                </Col>
                              </Row>
                            </Col>
                            <Col xs="9">
                              <Row>
                                <Col xs="12" md="5">
                                  <h5 className="my-0 mx-0">
                                    <strong>{cartItem.title}</strong>
                                  </h5>
                                </Col>
                                <Col xs="12" md="3">
                                  <h5 className="my-0 mx-0">
                                    $
                                    {Intl.NumberFormat().format(cartItem.price)}
                                  </h5>
                                </Col>
                                <Col xs="12" md="4">
                                  <Row>
                                    <Col xs="3">
                                      <Button
                                        color="neutral"
                                        className="px-0 py-0 mx-0 my-0"
                                        onClick={addProductToCart.bind(
                                          this,
                                          cartItem
                                        )}
                                      >
                                        <FontAwesomeIcon
                                          icon={faPlus}
                                          style={{ color: '#51bcda' }}
                                        />
                                      </Button>
                                    </Col>
                                    <Col xs="3">
                                      <h5 className="my-0 mx-0">
                                        {cartItem.quantity}
                                      </h5>
                                    </Col>
                                    <Col xs="3">
                                      <Button
                                        color="neutral"
                                        className="px-0 py-0 mx-0 my-0"
                                        onClick={removeProductFromCart.bind(
                                          this,
                                          cartItem.id
                                        )}
                                      >
                                        <FontAwesomeIcon
                                          icon={faMinus}
                                          style={{ color: '#51bcda' }}
                                        />
                                      </Button>
                                    </Col>
                                    <Col xs="3">
                                      <Button
                                        color="neutral"
                                        className="px-0 py-0 mx-0 my-0"
                                        onClick={clearProductFromCart.bind(
                                          this,
                                          cartItem.id
                                        )}
                                      >
                                        <FontAwesomeIcon
                                          icon={faTimes}
                                          style={{ color: '#51bcda' }}
                                        />
                                      </Button>
                                    </Col>
                                  </Row>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </ListGroupItem>
                      </ListGroup>
                    ))}
                  </Col>
                  <Col xs="12" md="3" className="px-0">
                    <Form onSubmit={handleSubmit} className="px-4 py-1 shadow">
                      <h3 className="mb-4">
                        <strong>Resumen</strong>
                      </h3>
                      <div className="mb-4">
                        <Row>
                          <Col xs="6">
                            <p className="my-0">{totalQuantity} items</p>
                          </Col>
                          <Col xs="6">
                            <p className="my-0 text-right">
                              ${Intl.NumberFormat().format(totalAmount)}
                            </p>
                          </Col>
                        </Row>
                        <Row>
                          <Col xs="6">
                            <p className="my-0">Envío*</p>
                          </Col>
                          <Col xs="6">
                            <p className="my-0 text-right">
                              ${Intl.NumberFormat().format(deliveryCost)}
                            </p>
                          </Col>
                        </Row>
                        <Row>
                          <Col xs="6">
                            <p className="my-0">Costo total</p>
                          </Col>
                          <Col xs="6">
                            <p className="my-0 text-right">
                              ${Intl.NumberFormat().format(totalCost)}
                            </p>
                          </Col>
                        </Row>
                      </div>
                      <label className="my-0">Teléfono de contacto</label>
                      <InputGroup className="mb-2">
                        <Input
                          placeholder="Teléfono"
                          type="number"
                          id="phone"
                          name="phone"
                          onChange={handleChange}
                          value={phone}
                          invalid={errors.phone && touched.phone ? true : false}
                        />
                      </InputGroup>
                      <FormText className="text-danger">
                        {errors.phone}
                      </FormText>
                      <label className="my-0">Dirección de envío</label>
                      <InputGroup className="myb-2">
                        <Input
                          placeholder="Dirección"
                          type="text"
                          id="address"
                          name="address"
                          onChange={handleChange}
                          value={address}
                          invalid={
                            errors.address && touched.address ? true : false
                          }
                        />
                      </InputGroup>
                      <FormText className="text-danger">
                        {errors.address}
                      </FormText>
                      <h6 className="my-0 mb-4">
                        *A todo el país (aplican restricciones).
                      </h6>
                      <h6 className="my-0 mb-4">
                        Al enviarnos tu solicitud estás aceptando nuestros{' '}
                        <Link to="/terminos">términos y condiciones</Link> y{' '}
                        <Link to="/privacidad">políticas de privacidad.</Link>
                      </h6>
                      <Button
                        color="info"
                        type="submit"
                        style={{ width: '100%' }}
                        className="mb-4"
                        disabled={cart.length === 0 ? true : false}
                      >
                        Pagar
                      </Button>
                    </Form>
                  </Col>
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
