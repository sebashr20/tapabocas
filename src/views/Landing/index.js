import React, { Fragment } from 'react';
import { connect } from 'react-redux';
// reactstrap components

// core components
import { Navbar, Footer } from 'components';
import {
  Header,
  HeroSection,
  ProductSection,
  FormSection,
  VideoSection,
} from './components';

const LandingPage = (props) => {
  const { cartItemCount } = props;

  return (
    <Fragment>
      <Navbar cartItemNumber={cartItemCount} />
      <div className="main">
        <Header />
        <HeroSection />
        <ProductSection />
        <VideoSection />
        <FormSection />
      </div>
      <Footer />
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItemCount: state.cart.cart.reduce((count, curItem) => {
      return count + curItem.quantity;
    }, 0),
  };
};

export default connect(mapStateToProps, null)(LandingPage);
