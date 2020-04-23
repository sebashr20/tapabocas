// import { EMAIL_SENT } from './types';
import { server } from 'utils/axios';

export const sendEmail = (values) => {
  return async (dispatch) => {
    try {
      const formData = {
        to: 'sebhernandezram@gmail.com',
        from: values.email,
        subject: 'Distributor',
        body: values,
        type: 'distributor',
      };
      const { data } = await server.post('/users/email', formData);
      return data;
      //   return dispatch({
      //     type: EMAIL_SENT,
      //     payload: res.data,
      //   });
    } catch (error) {
      console.log(error);
    }
  };
};
