import React, { Fragment, useEffect } from "react";

// reactstrap components

// core components
import dataPolicy from "./dataPolicy.md";
import { SimpleNavbar, Footer, MarkdownText } from "components";

const DataPolicy = () => {
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
      <MarkdownText title={"Política de Privacidad"} body={dataPolicy} />
      <div className="mt-4" />
      <Footer />
    </Fragment>
  );
};

export default DataPolicy;
