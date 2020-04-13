import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

// reactstrap components
import { NavbarBrand, Navbar, Container, Col, Row } from 'reactstrap';

// core components
const logo =
  'https://res.cloudinary.com/sebashr20/image/upload/v1586397563/tapabocasya/logo.png';

const SimpleNavbar = () => {
  return (
    <Fragment>
      <Navbar expand="lg">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              data-placement="bottom"
              to="/"
              tag={Link}
              className="py-0"
            >
              <Row xs="2">
                <Col>
                  <img
                    alt="..."
                    style={{ width: '210px' }}
                    src={logo}
                    className="my-3"
                  />
                </Col>
              </Row>
            </NavbarBrand>
          </div>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default SimpleNavbar;
