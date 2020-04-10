import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

// reactstrap components
import { Row, Container, Button } from 'reactstrap';

const url = `https://api.whatsapp.com/send?phone=${process.env.REACT_APP_WAPP_NUMBER}&text=Hola!%20Quisiera%20más%20información%20sobre%20los%20tapabocas.%20Gracias!`;

const MainFooter = () => {
  return (
    <Fragment>
      <footer className="footer footer-white section-dark">
        <Container>
          <Row>
            <nav className="footer-nav">
              <ul>
                <li className="mx-0 px-0 my-0 py-0">
                  <Button color="link" tag={Link} to="/terminos">
                    Términos
                  </Button>
                </li>
                <li className="mx-0 px-0 my-0 py-0">
                  <Button color="link" tag={Link} to="/privacidad">
                    Privacidad
                  </Button>
                </li>
                <li className="mx-0 px-0 my-0 py-0">
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
