import React, { Fragment, useContext } from "react";
import randomCode from "crypto-random-string";
import ShopContext from "context/shop-context";
import { useFormik } from "formik";
import * as Yup from "yup";

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
} from "reactstrap";

// core components
import { SimpleNavbar } from "components";

// formik schema
const CheckoutSchema = Yup.object().shape({
  address: Yup.string()
    .min(10, "Too Short!")
    .max(50, "Too Long!")
    .required("Requerido"),
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

  // wompi parameters
  const wompiData = {
    publicKey: "pub_test_Q5yDA9xoKdePzhSGeVe9HAez7HgGORGf",
    // publicKey: "pub_prod_EZzHWiChAZe3YIAZCJGAs1v84Sz62M9O",
    currency: "COP",
    value: totalAmount * 100,
    reference: randomCode({ length: 6 }),
    redirectUrl: "http://localhost:3000/checkout/status",
  };
  const { publicKey, currency, value, reference, redirectUrl } = wompiData;
  const newRedirectUrl = redirectUrl.replace(/:/g, "%3A").replace(/\//g, "%2F");
  const url = `https://checkout.wompi.co/p/?public-key=${publicKey}&currency=${currency}&amount-in-cents=${value}&reference=${reference}&redirect-url=${newRedirectUrl}`;

  // fromik config
  const { values, handleSubmit, handleChange, errors, touched } = useFormik({
    initialValues: {
      address: "",
    },
    validationSchema: CheckoutSchema,
    onSubmit: async ({ address }) => {
      const delivery = [];
      await cart.map((item) => {
        return delivery.push({
          id: item.id,
          quantity: item.quantity,
        });
      });
      const formData = { ref: reference, cart: delivery, address: address };
      // to firebase
      console.log("ADR", formData);
      window.open(url, "_blank");
    },
  });
  const { address } = values;

  return (
    <Fragment>
      <SimpleNavbar />
      <Container>
        {cart.length <= 0 ? (
          <p>No hay productos en el carrtio.</p>
        ) : (
          <Fragment>
            <Row className="mt-4">
              <Col md="9">
                {cart.map((cartItem) => (
                  <Row md="12" key={cartItem.id}>
                    <Col md="4">
                      <img
                        alt="..."
                        style={{ width: "170px" }}
                        src={cartItem.img}
                      />
                    </Col>
                    <Col md="3">{cartItem.title}</Col>
                    <Col md="2">${cartItem.price}</Col>
                    <Col md="2">
                      <div>
                        <button onClick={addProductToCart.bind(this, cartItem)}>
                          +
                        </button>{" "}
                        {cartItem.quantity}{" "}
                        <button
                          onClick={removeProductFromCart.bind(
                            this,
                            cartItem.id
                          )}
                        >
                          -
                        </button>
                      </div>
                    </Col>
                    <Col md="1">
                      <button
                        onClick={clearProductFromCart.bind(this, cartItem.id)}
                      >
                        X
                      </button>
                    </Col>
                  </Row>
                ))}
              </Col>
              <Col md="3">
                <Form onSubmit={handleSubmit}>
                  <label>Dirección</label>
                  <InputGroup>
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
                  <FormText className="text-danger">{errors.address}</FormText>
                  <h5 className="my-0">Total amount: {totalAmount}</h5>
                  <h5 className="my-0">Total qty: {totalQuantity}</h5>
                  <Button
                    color="primary"
                    type="submit"
                    disabled={cart.length === 0 ? true : false}
                  >
                    Pagar
                  </Button>
                </Form>
              </Col>
            </Row>
          </Fragment>
        )}
      </Container>
    </Fragment>
  );
};

export default Checkout;
