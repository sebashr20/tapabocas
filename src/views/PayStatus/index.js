import React, { Fragment } from 'react';
import qs from 'query-string';

// reactstrap components
import { Container } from 'reactstrap';

// core components
import { SimpleNavbar } from 'components';

const PayStatus = (props) => {
  const { location } = props;
  const { id } = qs.parse(location.search, { ignoreQueryPrefix: true });

  return (
    <Fragment>
      <SimpleNavbar />
      <Container>
        <h3>Compra exitosa. Ref: {id}</h3>
      </Container>
    </Fragment>
  );
};

export default PayStatus;
