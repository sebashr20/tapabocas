import React, { Fragment, useState, useEffect } from 'react';

// reactstrap components
import { Table } from 'reactstrap';

// actions
import { getOrders } from 'actions/orders';

const Admin = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const orders = await getOrders();
      await setOrders(orders);
    }
    fetchData();
  }, []);

  return (
    <Fragment>
      <Table>
        <thead>
          <tr>
            <th>Ref</th>
            <th>Pedido</th>
            <th>Dirección</th>
            <th>Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <th scope="row">{order.ref}</th>
              <td>
                {order.cart.map((item) => (
                  <p key={item._id} className="my-0">
                    {item.id} => {item.quantity}
                  </p>
                ))}
              </td>
              <td>{order.address}</td>
              <td>{order.phone}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Fragment>
  );
};

export default Admin;
