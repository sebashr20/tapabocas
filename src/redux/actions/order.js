import { CREATE_ORDER } from './types';
import { server } from 'utils/axios';

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
