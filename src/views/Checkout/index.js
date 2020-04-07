import React, { Fragment, useEffect, useState } from "react";
import qs from "query-string";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

// reactstrap components
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import { SimpleNavbar } from "components";
import { type } from "helpers";

const Terms = props => {
  document.documentElement.classList.remove("nav-open");
  useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

  const { location } = props;
  const { code } = qs.parse(location.search, { ignoreQueryPrefix: true });
  const pay = type(code);

  const [state, setState] = useState({
    app: false,
    others: false
  });
  const { app, others } = state;

  const hanldeClickApp = () => {
    setState({ app: true, others: false });
  };
  const hanldeClickOthers = () => {
    setState({ app: false, others: true });
  };

  return (
    <Fragment>
      <SimpleNavbar />
      <div>
        <Container>
          <div>
            <Row className="text-center">
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Métodos de pago</h2>
                <h5 className="description">
                  Puedes realizar tu pago a través de una transferencia desde la
                  App de Bancolombia usando un código QR o seleccionar la opción
                  de pagar con otros métodos.
                </h5>
              </Col>
            </Row>
          </div>
          <Card style={{ maxWidth: "50rem" }} className="mx-auto">
            <CardBody>
              <CardTitle>
                <h4 className="title my-0">Con la App de Bancolombia</h4>
              </CardTitle>
              <CardText>
                Esta opción es fácil y rápida: solo entra a la App, selecciona
                "Leer QR" y escanéa el código y listo!
              </CardText>
              {app ? (
                <CardText className="text-center">
                  <CardImg
                    src={pay.qr}
                    alt="..."
                    style={{ maxWidth: "20rem" }}
                  />
                </CardText>
              ) : null}
              <Button
                color={app ? "danger" : "primary"}
                onClick={hanldeClickApp}
                className="btn-round btn-icon text-center"
              >
                <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                Seleccionar
              </Button>
            </CardBody>
          </Card>
          <Card style={{ maxWidth: "50rem" }} className="mx-auto">
            <CardBody>
              <h4 className="title my-0">Con otros medios de pago</h4>
              <CardText>
                Seleccionando esta opción puedes pagar con tu tarjeta de crédito
                Visa, American Express, MasterCard, Diners Club o Codensa y
                también a través de PSE o Efecty.
              </CardText>
              <Button
                onClick={hanldeClickOthers}
                color={others ? "danger" : "primary"}
                className="btn-round btn-icon text-center"
                mp-mode="dftl"
                name="MP-payButton"
                href={pay.link}
              >
                <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                Seleccionar
              </Button>
            </CardBody>
          </Card>
        </Container>
      </div>
    </Fragment>
  );
};

export default Terms;
