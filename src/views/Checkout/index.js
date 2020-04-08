import React, { Fragment, useContext } from "react";
import ShopContext from "context/shop-context";

// reactstrap components
import {
  Container,
  // Row,
  // Col,
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
      <div>
        <Container>
          <main>
            {cart.length <= 0 && <p>No Item in the Cart!</p>}
            <ul>
              {cart.map((cartItem) => (
                <li key={cartItem.id}>
                  <div>
                    <strong>{cartItem.title}</strong> - ${cartItem.price} (
                    {cartItem.quantity}) = ${cartItem.price * cartItem.quantity}
                  </div>
                  <div>
                    <button onClick={addProductToCart.bind(this, cartItem)}>
                      +
                    </button>
                    <button
                      onClick={removeProductFromCart.bind(this, cartItem.id)}
                    >
                      -
                    </button>
                    <button
                      onClick={clearProductFromCart.bind(this, cartItem.id)}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <h5>Total amount: {totalAmount}</h5>
            <h5>Total qty: {totalQuantity}</h5>
          </main>
          <form method="GET" action={url} target="_blank">
            <input type="hidden" name="public-key" value={publicKey} />
            <input type="hidden" name="currency" value={currency} />
            <input type="hidden" name="amount-in-cents" value={value} />
            <input type="hidden" name="reference" value={reference} />
            <input type="hidden" name="redirect-url" value={redirectUrl} />
            <Button
              color="primary"
              type="submit"
              disabled={cart.length === 0 ? true : false}
            >
              Pagar
            </Button>
          </form>
        </Container>
      </div>
    </Fragment>
  );
};

export default Checkout;
