import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// reactstrap components
import { Table } from 'reactstrap';

// actions
import { getOrders, updateOrder, getWompi } from 'redux/actions/order';
import { sendEmail } from 'redux/actions/email';

const Admin = (props) => {
  const { orders, getOrders, updateOrder, getWompi, sendEmail } = props;

  const [wompiId, setWompiId] = useState();
  const [data, setData] = useState({
    password: '',
    show: false,
  });
  const { password, show } = data;

  useEffect(() => {
    getOrders();
  }, [getOrders]);

  const updatePayment = (ref, newStatus, newWompiId) => {
    updateOrder(ref, {
      status: newStatus,
      wompiId: newWompiId,
    });
    sendEmail(
      { ref },
      {
        toAdmin: 'order',
        toCustomer: 'Compobante de compra',
        msg: `Hola! Tu compra ha sido exitosa. Gracias por cuidarte y confiar en nosotros. 
        Procederemos a envíar tu pedido y nos comunicaremos contigo vía WhatsApp para darte el número de guía de la transportadora. 
        El número de tu orden es ${ref}. Si tienes alguna pregunta no dudes en contactarnos! Sé sano y sé próspera persona.`,
      }
    );
  };

  const handleChangeConfirmWompi = (e) => {
    e.preventDefault();
    setWompiId(e.target.value);
  };

  const handleConfirmWompi = async (e) => {
    e.preventDefault();
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
    sendEmail(
      { ref },
      {
        toAdmin: 'order',
        toCustomer: 'Compobante de compra',
        msg: `Hola! Gracias por confiar en nosotros. El número de tu orden es: ${ref}. Recuerda que el envío toma un (1) día hábil. Si tienes alguna pregunta no dudes en
            contactarnos.`,
      }
    );
  };

  const handleChange = (e) => {
    e.preventDefault();
    setData({ ...data, password: e.target.value });
  };

  const handleSubmit = () => {
    if (password === process.env.REACT_APP_ADMIN_PASSWORD) {
      setData({ ...data, show: true });
    }
  };

  return (
    <Fragment>
      {!show ? (
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="password"
            id="password"
            name="password"
            onChange={handleChange}
            value={password}
          />
          <button type="submit">send</button>
        </form>
      ) : (
        <Fragment>
          {orders.length === 0 ? (
            <p className="text-center">Loading...</p>
          ) : (
            <Table>
              <thead>
                <tr>
                  <th>Ref</th>
                  <th>Estado</th>
                  <th>Acción</th>
                  <th>Método pago</th>
                  <th>Wompi ID</th>
                  <th>Pedido</th>
                  <th>Dirección</th>
                  <th>Ciudad</th>
                  <th>Teléfono</th>
                  <th>Fecha</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) =>
                  order.status === 'DECLINED' ? null : (
                    <tr key={order._id}>
                      <th scope="row">{order.ref}</th>
                      <td>{order.status}</td>
                      <td>
                        {order.paymentMethod === 'QR_CODE' &&
                        order.status === 'PENDING' ? (
                          <Fragment>
                            <button
                              onClick={() =>
                                updatePayment(order.ref, 'APPROVED')
                              }
                            >
                              confirm
                            </button>
                            <button
                              onClick={() =>
                                updatePayment(order.ref, 'DECLINED')
                              }
                            >
                              declined
                            </button>
                          </Fragment>
                        ) : null}
                        {order.paymentMethod === 'WOMPI' &&
                        order.status === 'PENDING' ? (
                          <Fragment>
                            <form onSubmit={handleConfirmWompi}>
                              <input
                                type="text"
                                placeholder="wompi id"
                                id="wompiId"
                                name="wompiId"
                                onChange={handleChangeConfirmWompi}
                                value={wompiId}
                                required
                              />
                              <button type="submit">confirm</button>
                            </form>
                            <button
                              onClick={() =>
                                updatePayment(order.ref, 'DECLINED', 'NA')
                              }
                            >
                              declined
                            </button>
                          </Fragment>
                        ) : null}
                        {order.status !== 'PENDING' ? 'NA' : null}
                      </td>
                      <td>{order.paymentMethod}</td>
                      <td>{order.wompiId}</td>
                      <td>
                        {order.cart.map((item) => (
                          <p key={item._id} className="my-0">
                            {item.id} => {item.quantity}
                          </p>
                        ))}
                      </td>
                      <td>{order.address}</td>
                      <td>{order.city}</td>
                      <td>{order.phone}</td>
                      <td>{order.createdAt}</td>
                    </tr>
                  )
                )}
              </tbody>
            </Table>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    orders: state.order.orders,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getOrders: () => dispatch(getOrders()),
    updateOrder: (ref, formData) => dispatch(updateOrder(ref, formData)),
    sendEmail: (values, type) => dispatch(sendEmail(values, type)),
    getWompi: (wompiId) => getWompi(wompiId),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Admin));
