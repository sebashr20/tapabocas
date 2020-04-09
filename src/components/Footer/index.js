import React, { Fragment } from "react";
import { Link } from "react-router-dom";

// reactstrap components
import { Row, Container, Button } from "reactstrap";

const url =
  "https://api.whatsapp.com/send?phone=573103769786&text=Hola%20Workorona!";

const MainFooter = () => {
  return (
    <Fragment>
      <footer className="footer footer-white section-dark">
        <Container>
          <Row>
            <nav className="footer-nav">
              <ul>
                <li>
                  <Button color="link" tag={Link} to="/terminos">
                    Términos
                  </Button>
                </li>
                <li>
                  <Button color="link" tag={Link} to="/privacidad">
                    Privacidad
                  </Button>
                </li>
                <li>
                  <Button
                    color="link"
                    href={url}
                    target="_blank"
                    rel="noopener"
                  >
                    Contáctanos
                  </Button>
                </li>
              </ul>
            </nav>
            <div className="credits ml-auto">
              <span className="copyright">
                © {new Date().getFullYear()}, TapabocasYa
              </span>
            </div>
          </Row>
        </Container>
      </footer>
    </Fragment>
  );
};

export default MainFooter;
