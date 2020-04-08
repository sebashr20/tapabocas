import React, { Fragment, useContext } from "react";
import { CartContext } from "../../CartContext";

// reactstrap components
import { Container, Button } from "reactstrap";

// core components
import { SimpleNavbar } from "components";

const Checkout = () => {
  const [cart, setCart] = useContext(CartContext);
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0) * 100;
  console.log("ITEMS", cart.length, "PRICE", totalPrice, "ELE", cart);

  const handleClick = () => {
    setCart([]);
  };

  const formData = {
    url: "https://checkout.wompi.co/p/",
    publicKey: "pub_test_Q5yDA9xoKdePzhSGeVe9HAez7HgGORGf",
    currency: "COP",
    value: totalPrice,
    reference: "0314d652-8f8d-48aa-81ba-434fae2998ed",
    redirectUrl: "http://localhost:3000/",
  };
  const { url, publicKey, currency, value, reference, redirectUrl } = formData;

  return (
    <Fragment>
      <SimpleNavbar />
      <div>
        <Container>
          <h1>Total items: {cart.length}</h1>
          <h1>Total price: {totalPrice / 100}</h1>
          <Button color="danger" onClick={handleClick}>
            Vaciar carrito
          </Button>
          <form method="GET" action={url}>
            <input type="hidden" name="public-key" value={publicKey} />
            <input type="hidden" name="currency" value={currency} />
            <input type="hidden" name="amount-in-cents" value={value} />
            <input type="hidden" name="reference" value={reference} />
            <input type="hidden" name="redirect-url" value={redirectUrl} />
            <button type="submit" disabled={cart.length === 0 ? true : false}>
              Pagar
            </button>
          </form>
        </Container>
      </div>
    </Fragment>
  );
};

export default Checkout;
