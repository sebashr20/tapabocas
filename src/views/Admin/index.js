import React, { Fragment, useState, useEffect } from 'react';

// reactstrap components
import { Table } from 'reactstrap';

// actions
import { getOrders, updateOrder } from 'actions/orders';

const Admin = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const orders = await getOrders();
      await setOrders(orders);
    }
    fetchData();
  }, []);

  const confirmPayment = async (ref) => {
    await updateOrder(ref, {
      status: 'APPROVED',
      createdAt: new Date().toISOString(),
    });
    const orders = await getOrders();
    await setOrders(orders);
  };

  return (
    <Fragment>
      {orders.length === 0 ? (
        <p className="text-center">Loading...</p>
      ) : (
        <Table>
          <thead>
            <tr>
              <th>Ref</th>
              <th>Estado</th>
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
                <td>
                  {order.status}
                  {order.paymentMethod === 'BANCOLOMBIA_QR_CODE' &&
                  order.status === 'PENDING' ? (
                    <button onClick={() => confirmPayment(order.ref)}>
                      confirm
                    </button>
                  ) : null}
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
  );
};

export default Admin;
