import React, { Fragment } from "react";
import { Link } from "react-router-dom";

// reactstrap components
import { NavbarBrand, Navbar, Container, Col, Row } from "reactstrap";

// core components
const logo =
  "https://res.cloudinary.com/sebashr20/image/upload/v1584997849/seed/xtxux3aexfhvd8nophkm.png";

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
                  <img alt="..." style={{ width: "200px" }} src={logo} />
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
