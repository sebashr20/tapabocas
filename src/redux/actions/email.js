import { server } from 'utils/axios';

export const sendEmail = (values, type) => {
  return async (dispatch) => {
    try {
      if (type.toAdmin === 'order') {
        const res = await server.get(`/orders/${values.ref}`);
        values.email = res.data.email;
      }
      const formData = {
        to: 'info@tapabocasya.com',
        from: values.email,
        subject: type.toAdmin,
        body: values,
        type: type.toAdmin,
      };
      const msgToCustomer = {
        to: values.email,
        from: 'info@tapabocasya.com',
        subject: type.toCustomer,
        body: type.msg,
        type: 'contact',
      };
      if (type.toAdmin !== 'order') {
        server.post('/users/email', formData);
      }
      server.post('/users/email', msgToCustomer);
      return null;
    } catch (error) {
      console.log(error);
    }
  };
};
