import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import ShopContext from "context/shop-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

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

const ProductSection = () => {
  const { cart, products, addProductToCart } = useContext(ShopContext);
  return (
    <Fragment>
      <div className="section section-dark text-center" id="productos">
        <Container>
          <h2 className="title">Nuestros Productos</h2>
          <h5 className="description">Usar Workorona es muy simple.</h5>
          <br />
          <br />
          <Row>
            {products.map((product) => (
              <Col md="4" key={product.id}>
                <Card style={{ width: "20rem" }} className="my-auto mx-auto">
                  <CardImg top src={product.img} alt="..." />
                  <CardBody>
                    <CardTitle className="mb-1">
                      <h4 className="my-0 mb-1">{product.title}</h4>
                    </CardTitle>
                    <CardText>{product.description}</CardText>
                    <CardText>{product.price}</CardText>
                    <Button
                      color="primary"
                      onClick={addProductToCart.bind(this, product)}
                    >
                      Añadir al carrito
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            ))}
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
    </Fragment>
  );
};

export default ProductSection;
