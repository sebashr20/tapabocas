import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

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
} from "reactstrap";

// core components
const logo =
  "https://res.cloudinary.com/sebashr20/image/upload/v1584997849/seed/xtxux3aexfhvd8nophkm.png";

function MainNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");

  useEffect(() => {
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
              <Col className="px-0">
                <img
                  alt="..."
                  style={{ width: "230px" }}
                  src={logo}
                  className="pb-2"
                />
              </Col>
            </Row>
          </NavbarBrand>
          <NavLink
            to="/checkout"
            tag={Link}
            title="Cart"
            rel="noopener"
            style={{ color: "rgb(30, 25, 75)", fontSize: "20px" }}
            className="navbar-toggler my-0 mx-0 mt-1"
          >
            <FontAwesomeIcon icon={faShoppingBag} className="mr-2" />
          </NavLink>
        </div>
        <Collapse className="justify-content-end" navbar>
          <Nav navbar>
            <NavItem>
              <NavLink
                to="#garantia"
                tag={HashLink}
                smooth
                style={{ color: "rgb(30, 25, 75)" }}
              >
                Garantía
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="#productos"
                tag={HashLink}
                smooth
                style={{ color: "rgb(30, 25, 75)" }}
              >
                Productos
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="#institucionales"
                tag={HashLink}
                smooth
                style={{ color: "rgb(30, 25, 75)" }}
              >
                Ventas Institucionales
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/checkout"
                tag={Link}
                style={{ color: "rgb(30, 25, 75)", fontSize: "20px" }}
                className="my-0 mx-0 mt-2"
              >
                <FontAwesomeIcon icon={faShoppingBag} className="mr-2" />
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
