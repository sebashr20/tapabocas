import React from "react";

export const skus = [
  {
    id: "t1_20,",
    type: "t1",
    title: "Tapabocas Tipo 1 x20",
    size: "x20",
    price: 10000,
  },
  {
    id: "t1_50,",
    type: "t1",
    title: "Tapabocas Tipo 1 x50",
    size: "x50",
    price: 20000,
  },
  {
    id: "t2_20,",
    type: "t2",
    title: "Tapabocas Tipo 2 x20",
    size: "x20",
    price: 30000,
  },
  {
    id: "t2_50,",
    type: "t2",
    title: "Tapabocas Tipo 2 x50",
    size: "x50",
    price: 40000,
  },
  {
    id: "t3_20,",
    type: "t3",
    title: "Tapabocas Tipo 3 x20",
    size: "x20",
    price: 50000,
  },
  {
    id: "t3_50,",
    type: "t3",
    title: "Tapabocas Tipo 3 x50",
    size: "x50",
    price: 60000,
  },
];

export const products = [
  {
    type: "t1",
    title: "Tapabocas Tipo 1",
    price: 10000,
    description: (
      <ul className="text-left pl-4">
        <li>Cintas elásticas: elastómero color blanco.</li>
        <li>
          Tela interna: 100% filamento de poliéster, con secado rápido y
          absorción.
        </li>
        <li>Tela externa: tela no tejida 100% poliéster.</li>
        <li>Color: blanco.</li>
        <li>Tamaño: 20x9cm.</li>
        <li>Lavable (hasta 3 veces).</li>
      </ul>
    ),
    button: "Comprar",
    img: require("assets/img/qr-test.jpeg"),
  },
  {
    type: "t2",
    title: "Tapabocas Tipo 2",
    price: 20000,
    description: (
      <ul className="text-left pl-4">
        <li>
          Dos capas de tela quirúrgica antifluida de 60gr c/u, ecológica,
          antialérgica, impermeable, antiestática, no-tóxica.
        </li>
        <li>Tipo de agarre: elástico plano para ajustar en la oreja.</li>
        <li>
          Las medidas de corte: 18x16cm. Medidas del producto terminado:
          15,5x7,5cm.
        </li>
        <li>Con tres pliegues y terminación de dobles y fileteado.</li>
        <li>Lavable (hasta 3 veces).</li>
      </ul>
    ),
    button: "Comprar",
    img: require("assets/img/qr-test.jpeg"),
  },
  {
    type: "t3",
    title: "Tapabocas Tipo 3",
    price: 30000,
    description: (
      <ul className="text-left pl-4">
        <li>
          Tela no tejida producida con fibras continuas de 100% polipropileno
          por proceso spundond, generando multifilamentos.
        </li>
        <li>Tipo de agarre: elástico para ajustar en la oreja.</li>
        <li>Tipo copa, terminación con filete.</li>
        <li>Un solo uso</li>
      </ul>
    ),
    button: "Comprar",
    img: require("assets/img/qr-test.jpeg"),
  },
];
