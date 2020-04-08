import React, { Fragment, useEffect } from "react";

// reactstrap components

// core components
import { Navbar, LandingPageHeader, Footer } from "components";
import FormSection from "./FormSection";
import HeroSection from "./HeroSection";
import ProductSection from "./ProductSection";

const LandingPage = () => {
  document.documentElement.classList.remove("nav-open");
  useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

  return (
    <Fragment>
      <Navbar />
      <div className="main">
        <LandingPageHeader />
        <HeroSection />
        <ProductSection />
        <FormSection />
      </div>
      <Footer />
    </Fragment>
  );
};

export default LandingPage;
