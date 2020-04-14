import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

// context
import ShopContext from 'context/shop-context';

// reactstrap components
import { Row, Col, Button, ListGroup, ListGroupItem } from 'reactstrap';

const Cart = () => {
  const {
    cart,
    totalQuantity,
    addProductToCart,
    removeProductFromCart,
    clearProductFromCart,
  } = useContext(ShopContext);

  return (
    <Col xs="12" md="9" className="px-2 my-2">
      {cart.map((cartItem) => (
        <ListGroup flush key={cartItem.id}>
          <ListGroupItem className="px-0">
            <Row>
              <Col xs="3">
                <Row>
                  <Col>
                    <img
                      alt="..."
                      style={{ width: '100%' }}
                      src={cartItem.img}
                    />
                  </Col>
                </Row>
              </Col>
              <Col xs="9">
                <Row>
                  <Col xs="12" md="5">
                    <h5 className="my-0 mx-0">
                      <strong>{cartItem.title}</strong>
                    </h5>
                  </Col>
                  <Col xs="12" md="3">
                    <h5 className="my-0 mx-0">
                      ${Intl.NumberFormat().format(cartItem.price)}
                    </h5>
                  </Col>
                  <Col xs="12" md="4">
                    <Row>
                      <Col xs="3">
                        <Button
                          color="neutral"
                          className="px-0 py-0 mx-0 my-0"
                          onClick={addProductToCart.bind(this, cartItem)}
                          disabled={totalQuantity >= 10 ? true : false}
                        >
                          <FontAwesomeIcon
                            icon={faPlus}
                            style={{ color: '#51bcda', fontSize: '1.3em' }}
                          />
                        </Button>
                      </Col>
                      <Col xs="3">
                        <h5 className="my-0 mx-0">{cartItem.quantity}</h5>
                      </Col>
                      <Col xs="3">
                        <Button
                          color="neutral"
                          className="px-0 py-0 mx-0 my-0"
                          onClick={removeProductFromCart.bind(
                            this,
                            cartItem.id
                          )}
                        >
                          <FontAwesomeIcon
                            icon={faMinus}
                            style={{ color: '#51bcda', fontSize: '1.3em' }}
                          />
                        </Button>
                      </Col>
                      <Col xs="3">
                        <Button
                          color="neutral"
                          className="px-0 py-0 mx-0 my-0"
                          onClick={clearProductFromCart.bind(this, cartItem.id)}
                        >
                          <FontAwesomeIcon
                            icon={faTrashAlt}
                            style={{ color: '#51bcda', fontSize: '1.3em' }}
                          />
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </ListGroupItem>
        </ListGroup>
      ))}
    </Col>
  );
};

export default Cart;
