import React, { Fragment, useEffect } from "react";

// reactstrap components

// core components
import terms from "./terms.md";
import { SimpleNavbar, Footer, MarkdownText } from "components";

const Terms = () => {
  document.documentElement.classList.remove("nav-open");
  useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

  return (
    <Fragment>
      <SimpleNavbar />
      <MarkdownText title={"Términos y Condiciones"} body={terms} />
      <div className="mt-4" />
      <Footer />
    </Fragment>
  );
};

export default Terms;
