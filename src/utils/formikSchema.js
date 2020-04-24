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

export const providerSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Muy corto!')
    .max(50, 'Muy largo!')
    .required('Requerido'),
  phone: Yup.number().required('Requerido'),
  email: Yup.string().email().required('Requerido'),
  city: Yup.string()
    .min(2, 'Muy corto!')
    .max(50, 'Muy largo!')
    .required('Requerido'),
  capacity: Yup.string()
    .min(2, 'Muy corto!')
    .max(100, 'Muy largo!')
    .required('Requerido'),
  price: Yup.string()
    .min(2, 'Muy corto!')
    .max(100, 'Muy largo!')
    .required('Requerido'),
  plusInfo: Yup.string()
    .min(2, 'Muy corto!')
    .max(200, 'Muy largo!')
    .required('Requerido'),
  agent: Yup.string().required('Requerido'),
  source: Yup.string().required('Requerido'),
  products: Yup.string().required('Requerido'),
  file: Yup.string().url(),
});
