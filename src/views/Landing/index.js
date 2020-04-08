import React, { Fragment, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faUserMd,
  faPaperPlane,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

// reactstrap components
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";

// core components
import { Navbar, LandingPageHeader, Footer } from "components";
import FormSection from "./SendSection";

const LandingPage = () => {
  document.documentElement.classList.remove("nav-open");
  useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

  const [cart, setCart] = useContext(CartContext);
  const handleClick = (name, price) => {
    const item = { name, price };
    setCart((curr) => [...curr, item]);
  };

  return (
    <Fragment>
      <Navbar />
      <LandingPageHeader />
      <span id="garantia" />
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Nuestra Garantía</h2>
                <h5 className="description">
                  Protégete con tapabocas de alta calidad.
                </h5>
                <br />
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="3" className="mb-5">
                <div className="info">
                  <div className="icon icon-info">
                    <FontAwesomeIcon icon={faUserMd} className="mr-2" />{" "}
                  </div>
                  <div className="description">
                    <h4 className="info-title mt-1 mb-2">
                      Insumos Quirúrjicos
                    </h4>
                    <p className="description">
                      Usamos únicamente insumos quirúrgicos de alta durabilidad,
                      no tejidos, anti-fluidos.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="3" className="mb-5">
                <div className="info">
                  <div className="icon icon-info">
                    <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
                  </div>
                  <div className="description">
                    <h4 className="info-title mt-1 mb-2">Calidad</h4>
                    <p>
                      Nuestros productos son lavables y no-tóxicos. Cumplimos
                      con todas las medidas higiénicas.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="3" className="mb-5">
                <div className="info">
                  <div className="icon icon-info">
                    <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                  </div>
                  <div className="description">
                    <h4 className="info-title mt-1 mb-2">Envío</h4>
                    <p>
                      Envíos a todo el país. Producto termosellado para
                      conservar su calidad en el transporte.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="3" className="mb-5">
                <div className="info">
                  <div className="icon icon-info">
                    <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />{" "}
                  </div>
                  <div className="description">
                    <h4 className="info-title mt-1 mb-2">Pagos</h4>
                    <p>
                      Pagos en línea de forma rápida y segura, respaldados por
                      Bancolombia.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <span id="productos" />
        <div className="section section-dark text-center">
          <Container>
            <h2 className="title">Nuestros Productos</h2>
            <h5 className="description">Usar Workorona es muy simple.</h5>
            <br />
            <br />
            <Row>
              <Col md="4">
                <Card style={{ width: "20rem" }} className="my-auto mx-auto">
                  <CardImg
                    top
                    src={require("assets/img/qr-test.jpeg")}
                    alt="..."
                  />
                  <CardBody>
                    <CardTitle className="mb-1">
                      <h4 className="my-0 mb-1">Referencia 1</h4>
                    </CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <Button
                      color="primary"
                      onClick={() => handleClick("type1", 10000)}
                    >
                      Comprar
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card style={{ width: "20rem" }} className="my-auto mx-auto">
                  <CardImg
                    top
                    src={require("assets/img/qr-test.jpeg")}
                    alt="..."
                  />
                  <CardBody>
                    <CardTitle className="mb-1">
                      <h4 className="my-0 mb-1">Referencia 2</h4>
                    </CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <Button
                      color="primary"
                      onClick={() => handleClick("type2", 20000)}
                    >
                      Comprar
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card style={{ width: "20rem" }} className="my-auto mx-auto">
                  <CardImg
                    top
                    src={require("assets/img/qr-test.jpeg")}
                    alt="..."
                  />
                  <CardBody>
                    <CardTitle className="mb-1">
                      <h4 className="my-0 mb-1">Referencia 3</h4>
                    </CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <Button
                      color="primary"
                      onClick={() => handleClick("type3", 30000)}
                    >
                      Comprar
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
          {cart.length > 0 ? (
            <div className="mt-4">
              <Button color="danger" to="/checkout" tag={Link}>
                <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                Ir al carrito
              </Button>
            </div>
          ) : null}
        </div>
        <FormSection />
      </div>
      <Footer />
    </Fragment>
  );
};

export default LandingPage;
