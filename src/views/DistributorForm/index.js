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
  Label,
  FormGroup,
  Row,
  Col,
} from 'reactstrap';

// core components
import { SimpleNavbar, Footer } from 'components';

// utils
import { distributorSchema } from 'utils/formikSchema';
const agents = [
  'Próspero Alberto Hernández',
  'Andrea Rubio',
  'Carlos Alberto Úsuga',
  'Guillermo Gómez',
  'Juan Camilo Jaramillo',
  'Julio César Molina',
  'Lorena Vargas',
  'Remberto Luis Rhenals',
  'Samir Rave',
  'Sebastián Hernández',
  'Página beb',
];
const sources = [
  'Contacto personal',
  'Facebook',
  'Instagram',
  'Página web',
  'Referidos',
  'Whatsapp',
];

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
      agent: '',
      source: '',
      type: [],
      file: undefined,
    },
    validationSchema: distributorSchema,
    onSubmit: ({
      name,
      phone,
      email,
      city,
      capacity,
      price,
      plusInfo,
      agent,
      source,
      type,
      file,
    }) => {
      const formData = {
        name,
        phone,
        email,
        city,
        capacity,
        price,
        plusInfo,
        agent,
        source,
        type,
        file,
      };
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
          <Row>
            <Col md="8" className="mx-auto">
              <Form onSubmit={handleSubmit} className="">
                <FormGroup>
                  <Label className="my-0">Gestor inicial</Label>
                  <Input
                    id="agent"
                    type="select"
                    name="agent"
                    onChange={handleChange}
                  >
                    <option>Elije</option>
                    {agents.map((oneAgent) => (
                      <option key={oneAgent} value={oneAgent}>
                        {oneAgent}
                      </option>
                    ))}
                  </Input>
                  {touched.agent && (
                    <FormText className="text-danger my-0">
                      {errors.agent}
                    </FormText>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label className="my-0">Fuente</Label>
                  <Input
                    id="source"
                    type="select"
                    name="source"
                    onChange={handleChange}
                  >
                    <option>Elije</option>
                    {sources.map((oneSource) => (
                      <option key={oneSource} value={oneSource}>
                        {oneSource}
                      </option>
                    ))}
                  </Input>
                  {touched.source && (
                    <FormText className="text-danger my-0">
                      {errors.source}
                    </FormText>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label className="my-0">Nombre</Label>
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
                  {touched.name && (
                    <FormText className="text-danger my-0">
                      {errors.name}
                    </FormText>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label className="my-0">Teléfono de contacto</Label>
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
                  {touched.phone && (
                    <FormText className="text-danger my-0">
                      {errors.phone}
                    </FormText>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label className="my-0">Email</Label>
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
                  {touched.email && (
                    <FormText className="text-danger my-0">
                      {errors.email}
                    </FormText>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label className="my-0">Ciudad</Label>
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
                  {touched.city && (
                    <FormText className="text-danger my-0">
                      {errors.city}
                    </FormText>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label check className="my-0">
                    Productos que ofrece
                  </Label>
                  <div className="ml-4">
                    <Input
                      type="checkbox"
                      id="type"
                      name="type"
                      onChange={handleChange}
                      value={'type1'}
                    />{' '}
                    Tipo 1
                    <br />
                    <Input
                      type="checkbox"
                      id="type"
                      name="type"
                      onChange={handleChange}
                      value={'type2'}
                    />{' '}
                    Tipo 2
                    <br />
                    <Input
                      type="checkbox"
                      id="type"
                      name="type"
                      onChange={handleChange}
                      value={'type3'}
                    />{' '}
                    Tipo 3
                  </div>
                  {touched.type && (
                    <FormText className="text-danger my-0">
                      {errors.type}
                    </FormText>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label className="my-0">Capacidad promedio ofrecida</Label>
                  <InputGroup className="my-0">
                    <Input
                      placeholder="Capacidad promedio ofrecida"
                      type="text"
                      id="capacity"
                      name="capacity"
                      onChange={handleChange}
                      value={capacity}
                      invalid={
                        errors.capacity && touched.capacity ? true : false
                      }
                    />
                  </InputGroup>
                  {touched.capacity && (
                    <FormText className="text-danger my-0">
                      {errors.capacity}
                    </FormText>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label className="my-0">Precios ofrecidos</Label>
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
                  {touched.price && (
                    <FormText className="text-danger my-0">
                      {errors.price}
                    </FormText>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label className="my-0">Observaciones generales</Label>
                  <InputGroup className="my-0">
                    <Input
                      placeholder="Observaciones generales"
                      type="text"
                      id="plusInfo"
                      name="plusInfo"
                      onChange={handleChange}
                      value={plusInfo}
                      invalid={
                        errors.plusInfo && touched.plusInfo ? true : false
                      }
                    />
                  </InputGroup>
                  {touched.plusInfo && (
                    <FormText className="text-danger my-0">
                      {errors.plusInfo}
                    </FormText>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label className="my-0">File</Label>
                  <Input
                    type="file"
                    id="file"
                    name="file"
                    onChange={handleChange}
                  />
                  <FormText color="muted">
                    This is some placeholder block-level help text for the above
                    input. It's a bit lighter and easily wraps to a new line.
                  </FormText>
                  {touched.file && (
                    <FormText className="text-danger my-0">
                      {errors.file}
                    </FormText>
                  )}
                </FormGroup>

                <Button
                  color="info"
                  type="submit"
                  style={{ width: '100%' }}
                  className=""
                >
                  Enviar
                </Button>
              </Form>
            </Col>
          </Row>
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
