import React from 'react';

export const skus = [
  {
    id: 't1_20,',
    type: 't1',
    title: 'Tapabocas Tipo 1 x20',
    size: 'x20',
    price: 80000,
    img: require('assets/img/t1_i1.jpeg'),
  },
  {
    id: 't1_50,',
    type: 't1',
    title: 'Tapabocas Tipo 1 x50',
    size: 'x50',
    price: 197000,
    img: require('assets/img/t1_i1.jpeg'),
  },
  {
    id: 't2_20,',
    type: 't2',
    title: 'Tapabocas Tipo 2 x20',
    size: 'x20',
    price: 39000,
    img: require('assets/img/t2_i1.jpeg'),
  },
  {
    id: 't2_50,',
    type: 't2',
    title: 'Tapabocas Tipo 2 x50',
    size: 'x50',
    price: 95000,
    img: require('assets/img/t2_i1.jpeg'),
  },
  // {
  //   id: 't3_20,',
  //   type: 't4',
  //   title: 'Tapabocas Tipo 3 x20',
  //   size: 'x20',
  //   price: 63000,
  //   img: require('assets/img/t3_i1.jpeg'),
  // },
  // {
  //   id: 't3_50,',
  //   type: 't3',
  //   title: 'Tapabocas Tipo 3 x50',
  //   size: 'x50',
  //   price: 154000,
  //   img: require('assets/img/t3_i1.jpeg'),
  // },
  {
    id: 't4_20,',
    type: 't4',
    title: 'Tapabocas Tipo 4 x20',
    size: 'x20',
    price: 63000,
    img: require('assets/img/t4_i1.jpeg'),
  },
  {
    id: 't4_50,',
    type: 't4',
    title: 'Tapabocas Tipo 4 x50',
    size: 'x50',
    price: 154000,
    img: require('assets/img/t4_i1.jpeg'),
  },
];

export const products = [
  {
    type: 't1',
    title: 'Tapabocas Tipo 1',
    description: (
      <div className="text-left">
        <p className="my-0 mb-2">Cintas elásticas: elastómero color blanco.</p>
        <p className="my-0 mb-2">
          Tela interna: 100% filamento de poliéster, con secado rápido y
          absorción.
        </p>
        <p className="my-0 mb-2">
          Tela externa: tela no tejida 100% poliéster.
        </p>
        <p className="my-0 mb-2">Color: blanco.</p>
        <p className="my-0 mb-2">Tamaño: 20x9cm.</p>
        <p className="my-0 mb-2">Lavable (hasta 3 veces).</p>
      </div>
    ),
    button: 'Comprar',
    carousel: [
      {
        src: require('assets/img/t1_i1.jpeg'),
        altText: '',
        caption: '',
        key: 't1_i1',
      },
      {
        src: require('assets/img/t1_i2.jpeg'),
        altText: '',
        caption: '',
        key: 't1_i2',
      },
      // {
      //   src: require("assets/img/qr-test.jpeg"),
      //   altText: "",
      //   caption: "",
      //   key: "t1_i3",
      // },
    ],
  },
  {
    type: 't2',
    title: 'Tapabocas Tipo 2',
    description: (
      <div className="text-left">
        <p className="my-0 mb-2">
          Dos capas de tela quirúrgica antifluida de 60gr c/u, ecológica,
          antialérgica, impermeable, antiestática, no-tóxica.
        </p>
        <p className="my-0 mb-2">
          Tipo de agarre: elástico plano para ajustar en la oreja.
        </p>
        <p className="my-0 mb-2">
          Las medidas de corte: 18x16cm. Medidas del producto terminado:
          15,5x7,5cm.
        </p>
        <p className="my-0 mb-2">
          Con tres pliegues y terminación de dobles y fileteado.
        </p>

        <p className="my-0 mb-2">Lavable (hasta 3 veces).</p>
      </div>
    ),
    button: 'Comprar',
    carousel: [
      {
        src: require('assets/img/t2_i1.jpeg'),
        altText: '',
        caption: '',
        key: 't2_i1',
      },
      {
        src: require('assets/img/t2_i2.jpeg'),
        altText: '',
        caption: '',
        key: 't2_i2',
      },
      // {
      //   src: require("assets/img/qr-test.jpeg"),
      //   altText: "",
      //   caption: "",
      //   key: "t2_i3",
      // },
    ],
  },
  // {
  //   type: 't3',
  //   title: 'Tapabocas Tipo 3',
  //   description: (
  //     <div className="text-left">
  //       <p className="my-0 mb-2">
  //         Tela no tejida producida con fibras continuas de 100% polipropileno
  //         por proceso spundond, generando multifilamentos.
  //       </p>
  //       <p className="my-0 mb-2">
  //         Tipo de agarre: elástico para ajustar en la oreja.
  //       </p>
  //       <p className="my-0 mb-2">Tipo copa, terminación con filete.</p>
  //       <p className="my-0 mb-2">Un solo uso.</p>
  //     </div>
  //   ),
  //   button: 'Comprar',
  //   carousel: [
  //     {
  //       src: require('assets/img/t3_i1.jpeg'),
  //       altText: '',
  //       caption: '',
  //       key: 't3_i1',
  //     },
  //     {
  //       src: require('assets/img/t3_i2.jpeg'),
  //       altText: '',
  //       caption: '',
  //       key: 't3_i2',
  //     },
  //     // {
  //     //   src: require("assets/img/qr-test.jpeg"),
  //     //   altText: "",
  //     //   caption: "",
  //     //   key: "t3_i3",
  //     // },
  //   ],
  // },
  {
    type: 't4',
    title: 'Tapabocas Tipo 4',
    description: (
      <div className="text-left">
        <p className="my-0 mb-2">
          Tela no tejida producida con fibras continuas de 100% polipropileno
          por proceso spundond, generando multifilamentos.
        </p>
        <p className="my-0 mb-2">
          Tipo de agarre: elástico para ajustar en la oreja.
        </p>
        <p className="my-0 mb-2">Tipo copa, terminación con filete.</p>
        <p className="my-0 mb-2">Un solo uso.</p>
      </div>
    ),
    button: 'Comprar',
    carousel: [
      {
        src: require('assets/img/t4_i1.jpeg'),
        altText: '',
        caption: '',
        key: 't4_i1',
      },
      {
        src: require('assets/img/t4_i2.jpeg'),
        altText: '',
        caption: '',
        key: 't4_i2',
      },
      // {
      //   src: require("assets/img/qr-test.jpeg"),
      //   altText: "",
      //   caption: "",
      //   key: "t3_i3",
      // },
    ],
  },
];
