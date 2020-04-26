import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
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

// actions
import { sendEmail } from 'redux/actions/email';

// utils
import { providerSchema } from 'utils/formikSchema';
import { agents, sources } from 'utils/providerData';

const ProviderForm = ({ sendEmail }) => {
  // fromik config
  const {
    values,
    handleSubmit,
    handleChange,
    errors,
    touched,
    isSubmitting,
    isValid,
  } = useFormik({
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
      products: [],
      file: '',
    },
    validationSchema: providerSchema,
    onSubmit: (values) => {
      sendEmail(values, {
        toAdmin: 'provider',
        toCustomer: 'Formulario para ser distribuidor',
        msg:
          'Tu formulario ha sido enviado con éxito. En breve nos pondremos en contacto contigo.',
      });
    },
  });
  const { name, phone, email, city, capacity, price, plusInfo, file } = values;

  if (isSubmitting && isValid) {
    return <Redirect push to={'/'} />;
  }

  return (
    <Fragment>
      <SimpleNavbar />
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
                      id="products"
                      name="products"
                      onChange={handleChange}
                      value={'Tapabocas dos capas sin INVIMA'}
                    />{' '}
                    Tapabocas dos capas sin INVIMA
                    <br />
                    <Input
                      type="checkbox"
                      id="products"
                      name="products"
                      onChange={handleChange}
                      value={'Tapabocas tres capas sin INVIMA'}
                    />{' '}
                    Tapabocas tres capas sin INVIMA
                    <br />
                    <Input
                      type="checkbox"
                      id="products"
                      name="products"
                      onChange={handleChange}
                      value={'Tapabocas dos capas con INVIMA'}
                    />{' '}
                    Tapabocas dos capas con INVIMA
                    <br />
                    <Input
                      type="checkbox"
                      id="products"
                      name="products"
                      onChange={handleChange}
                      value={'Tapabocas tres capas con INVIMA'}
                    />{' '}
                    Tapabocas tres capas con INVIMA
                  </div>
                  {touched.products && (
                    <FormText className="text-danger my-0">
                      {errors.products}
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
                  <Label className="my-0">
                    Link con fotos, videos, documentos, etc.
                  </Label>
                  <InputGroup className="my-0">
                    <Input
                      placeholder="WeTransfer, Google Drive, Dropbox..."
                      type="text"
                      id="file"
                      name="file"
                      onChange={handleChange}
                      value={file}
                      invalid={errors.file && touched.file ? true : false}
                    />
                  </InputGroup>
                  {touched.file && (
                    <FormText className="text-danger my-0">
                      {errors.file}
                    </FormText>
                  )}
                </FormGroup>

                {/* <FormGroup>
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
                </FormGroup> */}

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

const mapDispatchToProps = (dispatch) => {
  return {
    sendEmail: (values, type) => dispatch(sendEmail(values, type)),
  };
};

export default connect(null, mapDispatchToProps)(withRouter(ProviderForm));
