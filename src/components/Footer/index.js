import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

// reactstrap components
import { Row, Container, Button } from 'reactstrap';

const urlContact = `https://api.whatsapp.com/send?phone=${process.env.REACT_APP_WAPP_NUMBER}&text=Hola!%20Acabo%20de%20leer%20la%20información%20de%20la%20página%20web%20y%20necesito%20información%20adicional.%20Mi%20nombre%20es:%20`;

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
                    href={urlContact}
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
              {' | '}
              <span className="copyright">info@tapabocasya.com</span>
            </div>
          </Row>
        </Container>
      </footer>
    </Fragment>
  );
};

export default MainFooter;
