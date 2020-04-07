import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import classnames from "classnames";

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
  Col
} from "reactstrap";

// core components
const logo =
  "https://res.cloudinary.com/sebashr20/image/upload/v1584997849/seed/xtxux3aexfhvd8nophkm.png";

function MainNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 49 ||
        document.body.scrollTop > 49
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 50 ||
        document.body.scrollTop < 50
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar
      className={classnames("fixed-top", navbarColor)}
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
              <Col>
                <img
                  alt="..."
                  style={{ width: "230px" }}
                  src={logo}
                  className="pb-2"
                />
              </Col>
            </Row>
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className="navbar-toggler navbar-toggler"
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink
                to="#como-funciona"
                tag={HashLink}
                smooth
                style={{ color: "rgb(30, 25, 75)" }}
              >
                ¿Cómo funciona?
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="#servicios"
                tag={HashLink}
                smooth
                style={{ color: "rgb(30, 25, 75)" }}
              >
                Servicios
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="#contacto"
                tag={HashLink}
                smooth
                style={{ color: "rgb(30, 25, 75)" }}
              >
                Contáctanos
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.facebook.com/workorona"
                target="_blank"
                title="Follow us on Facebook"
                rel="noopener"
                style={{ color: "rgb(30, 25, 75)" }}
              >
                <i className="fa fa-facebook" />
                <p className="d-lg-none">Facebook</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.instagram.com/workorona"
                target="_blank"
                title="Follow us on Instagram"
                rel="noopener"
                style={{ color: "rgb(30, 25, 75)" }}
              >
                <i className="fa fa-instagram" />
                <p className="d-lg-none">Instagram</p>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
