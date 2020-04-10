import React, { Fragment } from 'react';
import qs from 'query-string';

// reactstrap components
// import {
//   Container,
//   Row,
//   Col,
//   Button,
// } from "reactstrap";

// core components
import { SimpleNavbar } from 'components';

const PayStatus = (props) => {
  const { location } = props;
  const { id } = qs.parse(location.search, { ignoreQueryPrefix: true });

  return (
    <Fragment>
      <SimpleNavbar />
      <h3>Compra exitos{id}</h3>
      <h4>Ref: {id}</h4>
    </Fragment>
  );
};

export default PayStatus;
