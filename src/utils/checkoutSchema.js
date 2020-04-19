import * as Yup from 'yup';

export const checkoutSchema = Yup.object().shape({
  address: Yup.string()
    .min(10, 'Muy corto!')
    .max(50, 'Muy largo!')
    .required('Requerido'),
  city: Yup.string()
    .min(2, 'Muy corto!')
    .max(50, 'Muy largo!')
    .required('Requerido'),
  phone: Yup.number().required('Requerido'),
  cupon: Yup.string().max(11, 'Cupón incorrecto'),
});
