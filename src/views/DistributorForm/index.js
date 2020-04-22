import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { useFormik } from 'formik';

// reactstrap components
import {
  Container,
  InputGroup,
  Input,
  Form,
  FormText,
  Button,
} from 'reactstrap';

// core components
import { SimpleNavbar, Footer } from 'components';

// utils
import { distributorSchema } from 'utils/formikSchema';

const DistributorForm = () => {
  // fromik config
  const { values, handleSubmit, handleChange, errors, touched } = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      city: '',
      capacity: '',
      price: '',
      plusInfo: '',
    },
    validationSchema: distributorSchema,
    onSubmit: ({ name, phone, email, city, capacity, price, plusInfo }) => {
      const formData = { name, phone, email, city, capacity, price, plusInfo };
      console.log('FORM', formData);
    },
  });
  const { name, phone, email, city, capacity, price, plusInfo } = values;

  return (
    <Fragment>
      <SimpleNavbar />
      {/* <MainAlert
          text={
            <span>
              Tus datos han sido enviados con éxito.
            </span>
          }
          color={'danger'}
        /> */}
      <Container>
        <div className="section mt-1 pt-2">
          <Form onSubmit={handleSubmit} className="">
            <p>Dropdown</p>

            <p>Dropdown</p>

            <label className="my-0">Nombre</label>
            <InputGroup className="my-0">
              <Input
                placeholder="Nombre"
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                value={name}
                invalid={errors.name && touched.name ? true : false}
              />
            </InputGroup>
            <FormText className="text-danger my-0">{errors.name}</FormText>

            <label className="my-0">Teléfono de contacto</label>
            <InputGroup className="my-0">
              <Input
                placeholder="Teléfono"
                type="number"
                id="phone"
                name="phone"
                onChange={handleChange}
                value={phone}
                invalid={errors.phone && touched.phone ? true : false}
              />
            </InputGroup>
            <FormText className="text-danger my-0">{errors.phone}</FormText>

            <label className="my-0">Email</label>
            <InputGroup className="my-0">
              <Input
                placeholder="Email"
                type="text"
                id="email"
                name="email"
                onChange={handleChange}
                value={email}
                invalid={errors.email && touched.email ? true : false}
              />
            </InputGroup>
            <FormText className="text-danger my-0">{errors.email}</FormText>

            <label className="my-0">Ciudad</label>
            <InputGroup className="my-0">
              <Input
                placeholder="Ciudad"
                type="text"
                id="city"
                name="city"
                onChange={handleChange}
                value={city}
                invalid={errors.city && touched.city ? true : false}
              />
            </InputGroup>
            <FormText className="text-danger my-0">{errors.city}</FormText>

            <p>Checkbox</p>

            <label className="my-0">Capacidad promedio ofrecida</label>
            <InputGroup className="my-0">
              <Input
                placeholder="Capacidad promedio ofrecida"
                type="text"
                id="capacity"
                name="capacity"
                onChange={handleChange}
                value={capacity}
                invalid={errors.capacity && touched.capacity ? true : false}
              />
            </InputGroup>
            <FormText className="text-danger my-0">{errors.capacity}</FormText>

            <label className="my-0">Precios ofrecidos</label>
            <InputGroup className="my-0">
              <Input
                placeholder="Precios ofrecidos"
                type="text"
                id="price"
                name="price"
                onChange={handleChange}
                value={price}
                invalid={errors.price && touched.price ? true : false}
              />
            </InputGroup>
            <FormText className="text-danger my-0">{errors.price}</FormText>

            <label className="my-0">Observaciones generales</label>
            <InputGroup className="my-0">
              <Input
                placeholder="Observaciones generales"
                type="text"
                id="plusInfo"
                name="plusInfo"
                onChange={handleChange}
                value={plusInfo}
                invalid={errors.plusInfo && touched.plusInfo ? true : false}
              />
            </InputGroup>
            <FormText className="text-danger my-0">{errors.plusInfo}</FormText>

            <p>Upload</p>

            <Button
              color="info"
              type="submit"
              style={{ width: '100%' }}
              className=""
            >
              Enviar
            </Button>
          </Form>
        </div>
      </Container>
      <Footer />
    </Fragment>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     cart: state.cart.cart,
//   };
// };

export default connect(null, null)(withRouter(DistributorForm));
