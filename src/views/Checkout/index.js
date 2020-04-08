import React, { Fragment, useState } from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components
import { SimpleNavbar } from "components";

const Checkout = () => {
  const [formData, setFormData] = useState({
    url: "https://checkout.wompi.co/p/",
    publicKey: "pub_test_Q5yDA9xoKdePzhSGeVe9HAez7HgGORGf",
    currency: "COP",
    value: "1000000",
    reference: "tapabocas003",
    redirectUrl: "http://localhost:3000/",
  });

  const { url, publicKey, currency, value, reference, redirectUrl } = formData;

  return (
    <Fragment>
      <SimpleNavbar />
      <div>
        <Container>
          <form method="GET" action={url}>
            <input type="hidden" name="public-key" value={publicKey} />
            <input type="hidden" name="currency" value={currency} />
            <input type="hidden" name="amount-in-cents" value={value} />
            <input type="hidden" name="reference" value={reference} />
            <input type="hidden" name="redirect-url" value={redirectUrl} />
            <button type="submit">Pagar</button>
          </form>
        </Container>
      </div>
    </Fragment>
  );
};

export default Checkout;
