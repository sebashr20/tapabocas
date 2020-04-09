import React, { Fragment, useContext } from "react";
import ShopContext from "context/shop-context";

// reactstrap components
import {
  Container,
  Row,
  Col,
  // Card,
  // CardBody,
  // CardImg,
  // CardTitle,
  // CardText,
  Button,
} from "reactstrap";

// core components
import { SimpleNavbar } from "components";

const Checkout = () => {
  const {
    cart,
    totalAmount,
    totalQuantity,
    addProductToCart,
    removeProductFromCart,
    clearProductFromCart,
  } = useContext(ShopContext);

  const formData = {
    url: "https://checkout.wompi.co/p/",
    publicKey: "pub_test_Q5yDA9xoKdePzhSGeVe9HAez7HgGORGf",
    currency: "COP",
    value: totalAmount * 100,
    reference: "0314d652-8f8d-48aa-81ba-434fae2998ed",
    redirectUrl: "http://localhost:3000/",
  };
  const { url, publicKey, currency, value, reference, redirectUrl } = formData;

  return (
    <Fragment>
      <SimpleNavbar />
      <Container>
        {cart.length <= 0 ? (
          <p>No Item in the Cart!</p>
        ) : (
          <Fragment>
            <Row md="12" className="mt-4">
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
                <form method="GET" action={url} target="_blank">
                  <input type="hidden" name="public-key" value={publicKey} />
                  <input type="hidden" name="currency" value={currency} />
                  <input type="hidden" name="amount-in-cents" value={value} />
                  <input type="hidden" name="reference" value={reference} />
                  <input
                    type="hidden"
                    name="redirect-url"
                    value={redirectUrl}
                  />
                  <h5 className="my-0">Total amount: {totalAmount}</h5>
                  <h5 className="my-0">Total qty: {totalQuantity}</h5>
                  <Button
                    color="primary"
                    type="submit"
                    disabled={cart.length === 0 ? true : false}
                  >
                    Pagar
                  </Button>
                </form>
              </Col>
            </Row>
          </Fragment>
        )}
      </Container>
    </Fragment>
  );
};

export default Checkout;
