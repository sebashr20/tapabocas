import React, { Fragment, useEffect, useState } from 'react';
import qs from 'query-string';

// reactstrap components
import { Container } from 'reactstrap';

// core components
import { SimpleNavbar, Footer } from 'components';

// actions
import { getWompi, updateOrder } from 'actions/orders';

const PayStatus = (props) => {
  const { location } = props;
  const { id, env } = qs.parse(location.search, { ignoreQueryPrefix: true });
  const wompiId = id;

  const [state, setState] = useState({
    status: '',
    ref: '',
  });
  const { status, ref } = state;

  useEffect(() => {
    if (!env) {
      async function fetchData() {
        const {
          reference: ref,
          status,
          created_at,
          payment_method: { type: paymentMethod },
        } = await getWompi(wompiId);

        await updateOrder(ref, {
          status: status,
          paymentMethod: paymentMethod,
          wompiId: wompiId,
          createdAt: created_at,
        });
        await setState({ status: status, ref: ref });
      }
      fetchData();
    }
  }, [wompiId, env]);

  const approved = () => {
    return (
      <Fragment>
        <h2 className="title">¡Gracias por tu compra!</h2>
        <h5 className="description">
          Tu transación ha sido aprobada. Creamos tu orden y te mandaremos un
          correo con los detalles del envío. El número de tu orden es:{' '}
          <strong>{ref}.</strong> Si tienes alguna pregunta no dudes en
          contactarnos.
        </h5>
      </Fragment>
    );
  };

  const declined = () => {
    return (
      <Fragment>
        <h2 className="title">Tu transación ha sido rechazada</h2>
        <h5 className="description">
          Algo salió mal durante el pago. Comunícate con tu banco o inténtalo de
          nuevo usando otro medio de pago. Si tienes alguna pregunta no dudes en
          contactarnos.
        </h5>
      </Fragment>
    );
  };

  return (
    <Fragment>
      <SimpleNavbar />
      <div className="section text-center mt-1 pt-2">
        {!status ? (
          <p className="text-center">Loading...</p>
        ) : (
          <Container>
            {status === 'APPROVED' ? approved() : declined()}
          </Container>
        )}
      </div>
      <Footer />
    </Fragment>
  );
};

export default PayStatus;
