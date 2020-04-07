import React, { Fragment, createRef, useEffect } from "react";
import { HashLink } from "react-router-hash-link";

// reactstrap components
import { Button, Container } from "reactstrap";

// core components
const backgroundImage =
  "https://res.cloudinary.com/sebashr20/image/upload/q_auto/v1585011811/seed/ymrhkcpfdsqih25jkohn.jpg";

const LandingPageHeader = () => {
  let pageHeader = createRef();

  useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <Fragment>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <span className="text-shadow">
              <h1>¡Entrega tus trabajos a tiempo!</h1>
              <h3>
                En Workorona somos expertos en darte la asesoría que necesitas
                para resolver tus tareas de colegio o talleres de universidad y
                en la solución de ejercicios para preparar tus exámenes.
              </h3>
            </span>
            <Button
              className="btn-round mt-4"
              color="info"
              type="button"
              tag={HashLink}
              smooth
              to="#como-funciona"
            >
              Comenzar
            </Button>
          </div>
        </Container>
      </div>
    </Fragment>
  );
};

export default LandingPageHeader;
