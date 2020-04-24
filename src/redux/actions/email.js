import { server } from 'utils/axios';

export const sendEmail = (values) => {
  return async (dispatch) => {
    try {
      const formData = {
        to: 'info@tapabocasya.com',
        from: values.email,
        subject: 'Provider',
        body: values,
        type: 'provider',
      };
      const msgToCustomer = {
        to: values.email,
        from: 'info@tapabocasya.com',
        subject: 'Formulario para ser distribuidor',
        body:
          'Tu formulario ha sido enviado con éxito. En breve nos pondremos en contacto contigo.',
        type: 'contact',
      };
      server.post('/users/email', formData);
      server.post('/users/email', msgToCustomer);
      return null;
    } catch (error) {
      console.log(error);
    }
  };
};
