import { server, wompi } from 'utils/axios';

export const getOrders = async () => {
  try {
    const res = await server.get('/orders');
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const createOrder = async (formData) => {
  try {
    const res = await server.post('/orders', formData);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const updateOrder = async (ref, formData) => {
  try {
    const res = await server.patch(`/orders/${ref}`, formData);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getWompi = async (wompiId) => {
  try {
    const res = await wompi.get(`/${wompiId}`);
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};
