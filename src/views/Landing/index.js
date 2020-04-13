import React, { Fragment, useContext } from 'react';
import ShopContext from 'context/shop-context';

// reactstrap components

// core components
import { Navbar, Footer } from 'components';
import { Header, HeroSection, ProductSection, FormSection } from './components';

const LandingPage = () => {
  const { cart } = useContext(ShopContext);

  const itemCounter = cart.reduce((count, curItem) => {
    return count + curItem.quantity;
  }, 0);

  return (
    <Fragment>
      <Navbar cartItemNumber={itemCounter} />
      <div className="main">
        <Header />
        <HeroSection />
        <ProductSection cartItemNumber={itemCounter} />
        <FormSection />
      </div>
      <Footer />
    </Fragment>
  );
};

export default LandingPage;
