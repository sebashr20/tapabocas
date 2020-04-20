import { CREATE_ORDER, GET_ORDERS, UPDATE_ORDER } from './types';
import { server, wompi } from 'utils/axios';

export const createOrder = (formData) => {
  return async (dispatch) => {
    try {
      const res = await server.post('/orders', formData);
      return dispatch({
        type: CREATE_ORDER,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getOrders = () => {
  return async (dispatch) => {
    try {
      const res = await server.get('/orders');
      return dispatch({
        type: GET_ORDERS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateOrder = (ref, formData) => {
  return async (dispatch) => {
    try {
      const res = await server.patch(`/orders/${ref}`, formData);
      return dispatch({
        type: UPDATE_ORDER,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getWompi = async (wompiId) => {
  try {
    const res = await wompi.get(`/${wompiId}`);
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};
