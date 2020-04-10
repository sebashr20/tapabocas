import server from 'utils/axios';

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
