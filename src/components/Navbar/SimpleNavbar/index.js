import React, { Fragment } from "react";
import { Link } from "react-router-dom";

// reactstrap components
import {
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  Col,
  Row,
  Button,
  Collapse
} from "reactstrap";

// core components
const logo =
  "https://res.cloudinary.com/sebashr20/image/upload/v1584997849/seed/xtxux3aexfhvd8nophkm.png";

const SimpleNavbar = () => {
  const [bodyClick, setBodyClick] = React.useState(false);
  return (
    <Fragment>
      {bodyClick ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setBodyClick(false);
          }}
        />
      ) : null}
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
            <button className="navbar-toggler navbar-toggler">
              <Button
                size="sm"
                className="btn-round mr-2 px-3"
                color="info"
                to="/"
                tag={Link}
              >
                Atrás
              </Button>
            </button>
          </div>
          <Collapse className="justify-content-end" navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Button
                  size="sm"
                  className="btn-round mr-2 px-3"
                  color="info"
                  to="/"
                  tag={Link}
                >
                  Atrás
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default SimpleNavbar;
