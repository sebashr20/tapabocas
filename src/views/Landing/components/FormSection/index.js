import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// actions
import { sendEmail } from 'redux/actions/email';

import {
  Button,
  Form,
  Input,
  InputGroup,
  Container,
  Row,
  Col,
  FormText,
} from 'reactstrap';

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.number().required('Required'),
  text: Yup.string()
    .min(2, 'Too Short!')
    .max(500, 'Too Long!')
    .required('Required'),
});

const FormSection = ({ sendEmail }) => {
  const { values, handleSubmit, handleChange, errors, touched } = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      text: '',
    },
    validationSchema: FormSchema,
    onSubmit: (values, { resetForm }) => {
      sendEmail(values, {
        toAdmin: 'institutional',
        toCustomer: 'Formulario para ventas institucionales',
      });
      resetForm();
      // const { name, email, text } = values;
      // const newName = replaceSpace(name);
      // const newText = replaceSpace(text);
      // sendMsg(newName, email, newText);
    },
  });

  const { name, email, phone, text } = values;

  // const replaceSpace = (text) => {
  //   return text.replace(/ /g, '%20');
  // };

  // const sendMsg = (name, email, text) => {
  //   const url = `https://api.whatsapp.com/send?phone=${process.env.REACT_APP_WAPP_NUMBER_INST}&text=Hola!%20Quisiera%20más%20información%20sobre%20las%20ventas%20institucionales.%20Nombre:%20${name},%20Correo:%20${email},%20Mensaje:%20${text}`;
  //   window.open(url, '_blank');
  // };

  return (
    <Fragment>
      <div className="section section-dark" id="institucionales">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="9">
              <h2 className="title text-center">Ventas Institucionales</h2>
              <Form className="contact-form" onSubmit={handleSubmit}>
                <Row>
                  <Col md="4">
                    <label style={{ color: 'white' }}>Nombre</label>
                    <InputGroup>
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
                    <FormText className="text-danger">{errors.name}</FormText>
                  </Col>
                  <Col md="4">
                    <label style={{ color: 'white' }}>Email</label>
                    <InputGroup>
                      <Input
                        placeholder="Email"
                        id="email"
                        name="email"
                        type="email"
                        onChange={handleChange}
                        value={email}
                        invalid={errors.email && touched.email ? true : false}
                      />
                    </InputGroup>
                    <FormText className="text-danger">{errors.email}</FormText>
                  </Col>
                  <Col md="4">
                    <label style={{ color: 'white' }}>Celular</label>
                    <InputGroup>
                      <Input
                        placeholder="Celular"
                        id="phone"
                        name="phone"
                        type="number"
                        onChange={handleChange}
                        value={phone}
                        invalid={errors.phone && touched.phone ? true : false}
                      />
                    </InputGroup>
                    <FormText className="text-danger">{errors.phone}</FormText>
                  </Col>
                </Row>
                <label style={{ color: 'white' }}>Mensaje</label>
                <Input
                  placeholder="Cuéntanos el requerimiento que tienes..."
                  type="textarea"
                  rows="4"
                  id="text"
                  name="text"
                  onChange={handleChange}
                  value={text}
                  invalid={errors.text && touched.text ? true : false}
                />
                <FormText className="text-danger">{errors.text}</FormText>
                <p className="mt-3" style={{ color: 'white' }}>
                  Al enviarnos tu solicitud estás aceptando nuestros{' '}
                  <Link to="/terminos">términos y condiciones</Link> y{' '}
                  <Link to="/privacidad">políticas de privacidad.</Link>
                </p>
                <Row>
                  <Col className="ml-auto mr-auto text-center">
                    <Button
                      type="submit"
                      className="btn-fill"
                      color="info"
                      size="lg"
                    >
                      Enviar
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendEmail: (values, type) => dispatch(sendEmail(values, type)),
  };
};

export default connect(null, mapDispatchToProps)(withRouter(FormSection));
