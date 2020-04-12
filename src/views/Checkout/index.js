import React, { Fragment, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import randomCode from 'crypto-random-string';
import ShopContext from 'context/shop-context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// actions
import { createOrder } from 'actions/orders';

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
  CardImg,
  Alert,
  FormGroup,
  Label,
} from 'reactstrap';

// core components
import { SimpleNavbar, Footer } from 'components';

// formik schema
const CheckoutSchema = Yup.object().shape({
  address: Yup.string()
    .min(10, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Requerido'),
  city: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Requerido'),
  phone: Yup.number().required('Required'),
});

// Unique ref code
const referenceCode = randomCode({ length: 6 });

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
    publicKey: process.env.REACT_APP_WOMPI_PUBLIC_KEY,
    currency: 'COP',
    value: totalCost * 100,
    reference: referenceCode,
    redirectUrl: process.env.REACT_APP_WOMPI_REDIRECT_URL,
  };
  const { publicKey, currency, value, reference, redirectUrl } = wompiData;
  const newRedirectUrl = redirectUrl.replace(/:/g, '%3A').replace(/\//g, '%2F');
  const url = `https://checkout.wompi.co/p/?public-key=${publicKey}&currency=${currency}&amount-in-cents=${value}&reference=${reference}&redirect-url=${newRedirectUrl}`;

  // show QR logic
  const [state, setState] = useState({
    payQR: false,
    showQR: false,
  });
  const { payQR, showQR } = state;

  const [create, setCreate] = useState(false);
  const [check, setCheck] = useState(false);

  const handleShowQR = (click) => {
    if (click === 'other') {
      setState({ ...state, payQR: false });
    } else {
      setState({ ...state, payQR: true });
    }
  };

  const handleCheck = () => {
    setCheck(!check);
  };

  const handleCreateOrderQR = async (ref) => {
    setCreate(true);
    await handleSubmit();
    window.open(`/checkout/status?qrRef=${ref}`, '_self');
  };

  // fromik config
  const { values, handleSubmit, handleChange, errors, touched } = useFormik({
    initialValues: {
      address: '',
      city: '',
      phone: '',
    },
    validationSchema: CheckoutSchema,
    onSubmit: async ({ address, city, phone }) => {
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
        city: city,
        phone: phone,
      };
      // to data base

      // QR or Wompi
      if (payQR) {
        if (create) {
          formData.paymentMethod = 'QR_CODE';
          await createOrder(formData);
          setCreate(false);
        }
        setState({ ...state, showQR: true });
      } else {
        formData.paymentMethod = 'WOMPI';
        await createOrder(formData);
        setState({ payQR: false, showQR: false });
        window.open(url, '_self');
      }
    },
  });
  const { address, city, phone } = values;

  return (
    <Fragment>
      <SimpleNavbar />
      {totalQuantity > 0 ? (
        <Alert color="danger" className="text-center">
          <p style={{ fontSize: '20px' }} className="my-0">
            Al terminar tu pago, recuerda darle click al botón{' '}
            <strong>REGRESAR AL COMERCIO</strong> para procesar tu orden.
          </p>
        </Alert>
      ) : null}
      {totalQuantity >= 10 ? (
        <Alert color="info" className="text-center">
          Solo puedes comprar máx. 10 items. Si requieres más,{' '}
          <Button
            to="/#institucionales"
            tag={HashLink}
            className="btn-link my-0 py-0 mx-0 px-0 btn-alert"
          >
            <strong>contáctanos.</strong>
          </Button>
        </Alert>
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
                                        disabled={
                                          totalQuantity >= 10 ? true : false
                                        }
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
                      <label className="my-0">Dirección</label>
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
                      <label className="my-0">Ciudad</label>
                      <InputGroup className="myb-2">
                        <Input
                          placeholder="Ciudad"
                          type="text"
                          id="city"
                          name="city"
                          onChange={handleChange}
                          value={city}
                          invalid={errors.city && touched.city ? true : false}
                        />
                      </InputGroup>
                      <FormText className="text-danger">{errors.city}</FormText>
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
                        onClick={() => handleShowQR('other')}
                      >
                        Otros medios de pago
                      </Button>
                      <Button
                        color="info"
                        type="submit"
                        style={{ width: '100%' }}
                        className={!showQR ? 'mb-4' : ''}
                        onClick={() => handleShowQR('qr')}
                      >
                        Pagar con QR Bancolombia
                      </Button>
                      {showQR ? (
                        <Fragment>
                          <CardImg
                            src="https://res.cloudinary.com/sebashr20/image/upload/q_auto:low/v1586541323/tapabocasya/qr.png"
                            alt="..."
                            style={{ maxWidth: '20rem' }}
                          />
                          <FormGroup check>
                            <Label check>
                              <Input
                                type="checkbox"
                                name="check"
                                value={check}
                                onChange={handleCheck}
                              />
                              Ya realicé el pago.
                              <span className="form-check-sign">
                                <span className="check"></span>
                              </span>
                            </Label>
                          </FormGroup>
                          <Button
                            color="info"
                            style={{ width: '100%' }}
                            className="mb-4"
                            onClick={() => handleCreateOrderQR(reference)}
                            disabled={!check}
                          >
                            Confirmar orden
                          </Button>
                        </Fragment>
                      ) : null}
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
