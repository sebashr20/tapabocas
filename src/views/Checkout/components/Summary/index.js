import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, Redirect } from 'react-router-dom';
import randomCode from 'crypto-random-string';
import BarLoader from 'react-spinners/BarLoader';
import { css } from '@emotion/core';
import { useFormik } from 'formik';

// actions
import { createOrder } from 'redux/actions/order';
import { totals } from 'utils/totals';

// reactstrap components
import {
  Row,
  Col,
  Button,
  InputGroup,
  Input,
  Form,
  FormText,
  CardImg,
  FormGroup,
  Label,
} from 'reactstrap';

// core components
import { checkoutSchema } from 'utils/checkoutSchema';
// import { ModalBeforPay } from '../../components';

// constants
const discountCupon05 = process.env.REACT_APP_DISCOUNT_CUPON_05;
const discountCupon10 = process.env.REACT_APP_DISCOUNT_CUPON_10;
const discountCupon15 = process.env.REACT_APP_DISCOUNT_CUPON_15;
const referenceCode = randomCode({ length: 6 });

const Summary = (props) => {
  // global contex
  const { cart, createOrder } = props;

  const totalAmount = totals(cart).amount;
  const totalQuantity = totals(cart).qty;

  // show and pay qr logic
  const [state, setState] = useState({
    payQR: false,
    showQR: false,
    create: false,
    check: false,
    redirectRef: '',
    redirectWompi: false,
  });
  const { payQR, showQR, create, check, redirectRef, redirectWompi } = state;

  // handle show qr, check payment, create order
  const handleShowQR = (click) => {
    if (click === 'other') {
      setState({ ...state, payQR: false });
    } else {
      setState({ ...state, payQR: true });
    }
  };

  const handleCheck = () => {
    setState({ ...state, check: !check });
  };

  const handleCreateOrderQR = async (ref) => {
    setState({ ...state, create: true });
    await handleSubmit();
  };

  // fromik config
  const { values, handleSubmit, handleChange, errors, touched } = useFormik({
    initialValues: {
      address: '',
      city: '',
      phone: '',
      cupon: '',
    },
    validationSchema: checkoutSchema,
    onSubmit: async ({ address, city, phone }) => {
      const delivery = [];

      cart.map((item) => {
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

      if (payQR) {
        if (create) {
          formData.paymentMethod = 'QR_CODE';
          await createOrder(formData);
          await setState({ ...state, create: false, redirectRef: reference });
        }
        setState({ ...state, showQR: true });
      } else {
        formData.paymentMethod = 'WOMPI';
        await createOrder(formData);
        await setState({ payQR: false, showQR: false, redirectWompi: true });
        window.open(url, '_self');
      }
    },
  });
  const { address, city, phone, cupon } = values;

  console.log('REF', redirectRef);

  if (redirectRef) {
    return <Redirect push to={`/checkout/status?qr_ref=${redirectRef}`} />;
  }
  if (redirectWompi) {
    return <Redirect push to={`/checkout/status?wompi_ref=${redirectWompi}`} />;
  }

  // costs and discounts
  let discount;
  if (cupon === discountCupon05) {
    discount = 0.05;
  } else if (cupon === discountCupon10) {
    discount = 0.1;
  } else if (cupon === discountCupon15) {
    discount = 0.15;
  } else {
    discount = 0;
  }

  let deliveryCost;
  if (totalQuantity >= 5 && totalQuantity < 7) {
    deliveryCost = 16500;
  } else if (totalQuantity >= 7) {
    deliveryCost = 24000;
  } else {
    deliveryCost = 13000;
  }

  // costs
  const totalCostWithoutTax = totalAmount;
  const totalDiscount = Math.round(totalCostWithoutTax * discount);
  // const tax = Math.round((totalCostWithoutTax - totalDiscount) * 0.19);
  const tax = 0;
  const totalCostWithDiscount =
    totalCostWithoutTax + tax + deliveryCost - totalDiscount;

  // wompi parameters
  const wompiData = {
    publicKey: process.env.REACT_APP_WOMPI_PUBLIC_KEY,
    currency: 'COP',
    value: totalCostWithDiscount * 100,
    reference: referenceCode,
    redirectUrl: process.env.REACT_APP_WOMPI_REDIRECT_URL,
  };
  const { publicKey, currency, value, reference, redirectUrl } = wompiData;
  const newRedirectUrl = redirectUrl.replace(/:/g, '%3A').replace(/\//g, '%2F');
  const url = `https://checkout.wompi.co/p/?public-key=${publicKey}&currency=${currency}&amount-in-cents=${value}&reference=${reference}&redirect-url=${newRedirectUrl}`;

  return (
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
                ${Intl.NumberFormat().format(totalCostWithoutTax)}
              </p>
            </Col>
          </Row>
          {cupon === discountCupon05 ||
          cupon === discountCupon10 ||
          cupon === discountCupon15 ? (
            <Row>
              <Col xs="6">
                <p className="my-0">Dcto {discount * 100}%</p>
              </Col>
              <Col xs="6">
                <p className="my-0 text-right">
                  {Intl.NumberFormat().format(totalDiscount)}
                </p>
              </Col>
            </Row>
          ) : null}
          <Row>
            <Col xs="6">
              <p className="my-0">IVA 0%</p>
            </Col>
            <Col xs="6">
              <p className="my-0 text-right">
                ${Intl.NumberFormat().format(tax)}
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
              <p className="my-0">
                <strong>Costo total</strong>
              </p>
            </Col>
            <Col xs="6">
              <p className="my-0 text-right">
                <strong>
                  ${Intl.NumberFormat().format(totalCostWithDiscount)}
                </strong>
              </p>
            </Col>
          </Row>
        </div>
        <label className="my-0">Cupón de descuento</label>
        <InputGroup className="my-0">
          <Input
            placeholder="Cupón"
            type="text"
            id="cupon"
            name="cupon"
            onChange={handleChange}
            value={cupon}
            invalid={errors.cupon && touched.cupon ? true : false}
          />
        </InputGroup>
        {/* <h6 className="my-0">*Aplica sobre el total antes de IVA.</h6> */}
        <FormText className="text-danger my-0 ">{errors.cupon}</FormText>
        <label className="my-0 mt-2">Teléfono de contacto</label>
        <InputGroup className="my-0">
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
        <FormText className="text-danger my-0 ">{errors.phone}</FormText>
        <label className="my-0 mt-2">Dirección</label>
        <InputGroup className="my-0">
          <Input
            placeholder="Dirección"
            type="text"
            id="address"
            name="address"
            onChange={handleChange}
            value={address}
            invalid={errors.address && touched.address ? true : false}
          />
        </InputGroup>
        <FormText className="text-danger my-0 ">{errors.address}</FormText>
        <label className="my-0 mt-2">Ciudad</label>
        <InputGroup className="my-0">
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
        <FormText className="text-danger my-0 ">{errors.city}</FormText>
        <h6 className="my-0 mb-3">*A todo el país (aplican restricciones).</h6>
        <h6 className="my-0 mb-3">
          Al enviarnos tu solicitud estás aceptando nuestros{' '}
          <Link to="/terminos">términos y condiciones</Link> y{' '}
          <Link to="/privacidad">políticas de privacidad.</Link>
        </h6>
        <Button
          color="info"
          type="submit"
          style={{ width: '100%' }}
          className=""
          onClick={() => handleShowQR('other')}
        >
          Otros medios de pago
        </Button>
        <BarLoader
          loading={redirectWompi}
          size={15}
          css={css`
            width: 100%;
          `}
        />
        <Button
          color="info"
          type="submit"
          style={{ width: '100%' }}
          className={!showQR ? 'my-4' : 'mt-4'}
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
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createOrder: (newOrder) => dispatch(createOrder(newOrder)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Summary));
