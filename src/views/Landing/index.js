import React, { Fragment, useContext } from "react";
import ShopContext from "context/shop-context";

// reactstrap components

// core components
import { Navbar, LandingPageHeader, Footer } from "components";
import FormSection from "./FormSection";
import HeroSection from "./HeroSection";
import ProductSection from "./ProductSection";

const LandingPage = () => {
  const { cart } = useContext(ShopContext);

  const itemCounter = cart.reduce((count, curItem) => {
    return count + curItem.quantity;
  }, 0);

  return (
    <Fragment>
      <Navbar cartItemNumber={itemCounter} />
      <div className="main">
        <LandingPageHeader />
        <HeroSection />
        <ProductSection cartItemNumber={itemCounter} />
        <FormSection />
      </div>
      <Footer />
    </Fragment>
  );
};

export default LandingPage;
