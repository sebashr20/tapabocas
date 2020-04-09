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
  ListGroup,
  ListGroupItem,
} from "reactstrap";

// core components

const ProductSection = () => {
  const { cart, products, addProductToCart } = useContext(ShopContext);
  return (
    <Fragment>
      <div className="section section-dark text-center" id="productos">
        <Container>
          <h2 className="title">Nuestros Productos</h2>
          <h5 className="description">
            Contamos con 3 referencias de tapabocas, en presentaciones de caja
            x20 y x50 unidades.
          </h5>
          <br />
          <br />
          <Row>
            {products.map((product) => (
              <Col md="4" key={product.id} className="mb-3">
                <Card style={{ width: "100%" }} className="my-auto mx-auto">
                  <CardImg top src={product.img} alt="..." />
                  <CardBody className="pt-0">
                    <CardTitle className="my-0 mb-2">
                      <h4 className="my-0">{product.title}</h4>
                    </CardTitle>
                    <CardText
                      className="py-0 my-0 mb-2"
                      style={{ height: "300px" }}
                    >
                      {product.description}
                    </CardText>
                    <ListGroup flush>
                      <ListGroupItem>
                        <CardText className="py-0 my-0">
                          Caja x20 und: $
                          <strong>
                            {Intl.NumberFormat().format(product.price)}
                          </strong>
                        </CardText>
                        <Button
                          color="info"
                          size="lg"
                          onClick={addProductToCart.bind(this, product)}
                          className="mb-2"
                        >
                          Añadir al carrito
                        </Button>
                      </ListGroupItem>
                      <ListGroupItem>
                        <CardText className="py-0 my-0">
                          Caja x50 und: $
                          <strong>
                            {Intl.NumberFormat().format(product.price)}
                          </strong>
                        </CardText>
                        <Button
                          color="info"
                          size="lg"
                          onClick={addProductToCart.bind(this, product)}
                        >
                          Añadir al carrito
                        </Button>
                      </ListGroupItem>
                    </ListGroup>
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
