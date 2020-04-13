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
  const { id, env, qr_ref, wompi_ref } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const wompiId = id;

  const [state, setState] = useState({
    status: '',
    ref: '',
  });
  const { status, ref } = state;

  useEffect(() => {
    if (wompi_ref) {
      return setState({ status: 'PENDING', ref: wompi_ref });
    }
    if (!env) {
      async function fetchData() {
        if (qr_ref) {
          updateOrder(qr_ref, {
            wompiId: 'NA',
          });
          return setState({ status: 'PENDING', ref: qr_ref });
        }
        const {
          reference: ref,
          status,
          payment_method: { type: paymentMethod },
        } = await getWompi(wompiId);
        updateOrder(ref, {
          status: status,
          paymentMethod: paymentMethod,
          wompiId: wompiId,
        });
        return setState({ status: status, ref: ref });
      }
      fetchData();
    }
  }, [wompiId, env, qr_ref, wompi_ref]);

  const approved = () => {
    return (
      <Fragment>
        <h2 className="title">¡Gracias por tu compra!</h2>
        <h5 className="description">
          Tu transación ha sido aprobada. Creamos tu orden y te mandaremos un
          mensaje con los detalles del envío. El número de tu orden es:{' '}
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

  const qrPending = () => {
    return (
      <Fragment>
        <h2 className="title">Tu transación está siendo validada</h2>
        <h5 className="description">
          Estamos confirmado la recepción del pago vía QR Bancolombia. Una vez
          validado, crearemos tu orden y te mandaremos un mensaje con los
          detalles del envío. El número de tu orden es: <strong>{ref}.</strong>{' '}
          Si tienes alguna pregunta no dudes en contactarnos.
        </h5>
      </Fragment>
    );
  };

  const wompiPending = () => {
    return (
      <Fragment>
        <h2 className="title">Tu transación en Wompi está en proceso</h2>
        <h5 className="description">
          Al terminar tu pago, recuerda darle click al botón{' '}
          <strong>REGRESAR AL COMERCIO</strong> para contnuar. Una vez validado
          el pago, crearemos tu orden y te mandaremos un mensaje con los
          detalles del envío. El número de tu orden es: <strong>{ref}.</strong>{' '}
          Si tienes alguna pregunta no dudes en contactarnos.
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
            {status === 'APPROVED' ? approved() : null}
            {status === 'DECLINED' ? declined() : null}
            {qr_ref ? qrPending() : null}
            {wompi_ref ? wompiPending() : null}
          </Container>
        )}
      </div>
      <Footer />
    </Fragment>
  );
};

export default PayStatus;
