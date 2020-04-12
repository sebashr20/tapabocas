import React, { Fragment, useState, useEffect } from 'react';

// reactstrap components
import { Table } from 'reactstrap';

// actions
import { getOrders, updateOrder } from 'actions/orders';

const Admin = () => {
  const [orders, setOrders] = useState([]);
  const [wompiId, setWompiId] = useState();
  const [data, setData] = useState({
    password: '',
    show: false,
  });
  const { password, show } = data;

  useEffect(() => {
    async function fetchData() {
      const orders = await getOrders();
      await setOrders(orders);
    }
    fetchData();
  }, []);

  const updatePayment = async (ref, newStatus, newWompiId) => {
    await updateOrder(ref, {
      status: newStatus,
      wompiId: newWompiId,
    });
    const orders = await getOrders();
    await setOrders(orders);
  };

  const handleChangeConfirmWompi = (e) => {
    e.preventDefault();
    setWompiId(e.target.value);
  };

  const handleConfirmWompi = () => {
    window.open(`/checkout/status?id=${wompiId}`, '_blank');
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
                {orders.map((order) => (
                  <tr key={order._id}>
                    <th scope="row">{order.ref}</th>
                    <td>{order.status}</td>
                    <td>
                      {order.paymentMethod === 'QR_CODE' &&
                      order.status === 'PENDING' ? (
                        <Fragment>
                          <button
                            onClick={() => updatePayment(order.ref, 'APPROVED')}
                          >
                            confirm
                          </button>
                          <button
                            onClick={() => updatePayment(order.ref, 'DECLINED')}
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
                ))}
              </tbody>
            </Table>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Admin;
