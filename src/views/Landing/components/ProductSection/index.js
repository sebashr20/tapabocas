import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addProductToCart } from 'redux/actions/cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { skus, products } from 'utils/productList';

// reactstrap components
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
  ListGroup,
  ListGroupItem,
  UncontrolledCarousel,
} from 'reactstrap';

// core components

const ProductSection = (props) => {
  const { cart, addProductToCart, cartItemCount } = props;

  return (
    <Fragment>
      <div className="section section-dark text-center" id="productos">
        <Container>
          <h2 className="title">Nuestros Productos</h2>
          <h5 className="description">
            Nuestros tapabocas vienen en presentaciones de caja x20 y x50
            unidades. Pagos 100% en línea de forma rápida y segura, 24/7 con
            tarjetas de crédito, tarjetas débito (vía PSE) y QR Bancolombia.
            Usamos pasarelas de pago con certificación PCI-DSS para garantizar
            seguridad y validez de su compra.
          </h5>
          <br />
          <br />
          <Row>
            {products.map((product) => (
              <Col md="4" key={product.type} className="mb-3">
                <Card style={{ width: '100%' }} className="my-auto mx-auto">
                  <UncontrolledCarousel items={product.carousel} />
                  <CardBody className="pt-0">
                    <CardTitle className="my-0 mb-3 mt-4">
                      <h4 className="my-0">
                        <strong>{product.title}</strong>
                      </h4>
                    </CardTitle>
                    <CardBody
                      className="py-0 my-0 mb-2"
                      style={{ height: '510px' }}
                    >
                      {product.description}
                    </CardBody>
                    <ListGroup flush>
                      {skus.map((sku) =>
                        product.type === sku.type ? (
                          <ListGroupItem key={sku.id}>
                            <CardText className="py-0 my-0">
                              Caja {sku.size} und:
                            </CardText>
                            <CardText className="py-0 my-0 mb-1">
                              <strong>
                                $ {Intl.NumberFormat().format(sku.price)}{' '}
                              </strong>
                              + Envío
                            </CardText>
                            <Button
                              color={sku.id === 't4_20' ? 'default' : 'info'}
                              size="lg"
                              onClick={addProductToCart.bind(this, sku)}
                              className="mb-2"
                              disabled={sku.id === 't4_20' ? true : false}
                            >
                              {sku.id === 't4_20'
                                ? 'Agotado'
                                : 'Agregar al carrito'}
                            </Button>
                          </ListGroupItem>
                        ) : null
                      )}
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
              Ir al carrito <strong>{`[ ${cartItemCount} ]`}</strong>
            </Button>
          </div>
        ) : null}
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
    cartItemCount: state.cart.cart.reduce((count, curItem) => {
      return count + curItem.quantity;
    }, 0),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProductToCart: (product) => dispatch(addProductToCart(product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductSection);
