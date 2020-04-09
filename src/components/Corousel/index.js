import React from "react";

// reactstrap components
import { UncontrolledCarousel } from "reactstrap";

const img = require("assets/img/qr-test.jpeg");

const carouselItems = [
  {
    src: img,
    altText: "Slide 1",
    caption: "",
  },
  {
    src: img,
    altText: "Slide 2",
    caption: "",
  },
  {
    src: img,
    altText: "Slide 3",
    caption: "",
  },
];

function Carousel() {
  return <UncontrolledCarousel items={carouselItems} />;
}

export default Carousel;
