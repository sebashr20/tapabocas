import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  Badge,
} from 'reactstrap';

// core components
const logo =
  'https://res.cloudinary.com/sebashr20/image/upload/v1586397563/tapabocasya/logo.png';

const urlContact = `https://api.whatsapp.com/send?phone=${process.env.REACT_APP_WAPP_NUMBER}&text=Hola!%20Acabo%20de%20leer%20la%20información%20de%20la%20página%20web%20y%20necesito%20información%20adicional.%20Mi%20nombre%20es:%20`;
const urlSupplier = 'https://bit.ly/Distribuidor_TapabocasYa';

function MainNavbar({ cartItemNumber }) {
  const [navbarColor, setNavbarColor] = useState('navbar-transparent');

  useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 49 ||
        document.body.scrollTop > 49
      ) {
        setNavbarColor('');
      } else if (
        document.documentElement.scrollTop < 50 ||
        document.body.scrollTop < 50
      ) {
        setNavbarColor('navbar-transparent');
      }
    };

    window.addEventListener('scroll', updateNavbarColor);

    return function cleanup() {
      window.removeEventListener('scroll', updateNavbarColor);
    };
  });
  return (
    <Navbar
      className={classnames('fixed-top', navbarColor)}
      color-on-scroll="300"
      expand="lg"
    >
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            to="/"
            tag={Link}
            className="py-0"
          >
            <Row xs="2">
              <Col className="px-0">
                <img alt="..." style={{ width: '210px' }} src={logo} />
              </Col>
            </Row>
          </NavbarBrand>
          <NavLink
            to="/checkout"
            tag={Link}
            style={{ color: 'rgb(30, 25, 75)', fontSize: '20px' }}
            className="navbar-toggler my-0 mx-0 mt-1"
          >
            <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
            {cartItemNumber > 0 ? (
              <Badge color="danger" className="px-2">
                <strong>{cartItemNumber}</strong>
              </Badge>
            ) : null}
          </NavLink>
        </div>
        <Collapse className="justify-content-end" navbar>
          <Nav navbar>
            <NavItem>
              <NavLink
                href={urlSupplier}
                target="_blank"
                rel="noopener"
                style={{ color: 'rgb(30, 25, 75)' }}
              >
                Conviértete en proveedor
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="#institucionales"
                tag={HashLink}
                smooth
                style={{ color: 'rgb(30, 25, 75)' }}
              >
                Ventas Institucionales
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href={urlContact}
                target="_blank"
                rel="noopener"
                style={{ color: 'rgb(30, 25, 75)' }}
              >
                Contáctanos
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/checkout"
                tag={Link}
                style={{
                  color: 'rgb(30, 25, 75)',
                  fontSize: '20px',
                }}
                className="mt-2"
              >
                <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                {cartItemNumber > 0 ? (
                  <Badge color="danger" className="px-2">
                    <strong>{cartItemNumber}</strong>
                  </Badge>
                ) : null}
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
