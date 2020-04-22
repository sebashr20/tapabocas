import React from 'react';

export const skus = [
  {
    id: 't2_20',
    type: 't2',
    title: 'Tapabocas Tipo 2 x20',
    size: 'x20',
    price: 33000,
    img:
      'https://res.cloudinary.com/sebashr20/image/upload/q_auto:low/v1586560084/tapabocasya/products/002/epvh4qwapq9ddpelty96.jpg',
  },
  {
    id: 't2_50',
    type: 't2',
    title: 'Tapabocas Tipo 2 x50',
    size: 'x50',
    price: 80000,
    img:
      'https://res.cloudinary.com/sebashr20/image/upload/q_auto:low/v1586560084/tapabocasya/products/002/epvh4qwapq9ddpelty96.jpg',
  },
  {
    id: 't3_20,',
    type: 't3',
    title: 'Tapabocas Tipo 3 x20',
    size: 'x20',
    price: 43000,
    img:
      'https://res.cloudinary.com/sebashr20/image/upload/q_auto:low/v1586560433/tapabocasya/products/003/bda76ta1osbtfyfyx4wq.jpg',
  },
  {
    id: 't3_50,',
    type: 't3',
    title: 'Tapabocas Tipo 3 x50',
    size: 'x50',
    price: 104000,
    img:
      'https://res.cloudinary.com/sebashr20/image/upload/q_auto:low/v1586560433/tapabocasya/products/003/bda76ta1osbtfyfyx4wq.jpg',
  },
  {
    id: 't4_20',
    type: 't4',
    title: 'Tapabocas Tipo 4 x20',
    size: 'x20',
    price: 53000,
    img:
      'https://res.cloudinary.com/sebashr20/image/upload/q_auto:low/v1586559691/tapabocasya/products/004/eqyhmud63ledu328czwr.jpg',
  },
  {
    id: 't4_50',
    type: 't4',
    title: 'Tapabocas Tipo 4 x50',
    size: 'x50',
    price: 129000,
    img:
      'https://res.cloudinary.com/sebashr20/image/upload/q_auto:low/v1586559691/tapabocasya/products/004/eqyhmud63ledu328czwr.jpg',
  },
];

export const products = [
  {
    type: 't2',
    title: 'Tapabocas Tipo 2',
    description: (
      <div className="text-left">
        <p className="my-0 mb-2">
          ✓ Dos capas de tela no tejida antifluida, de 60 gr c/u, ecológica,
          antialérgica, impermeable, antiestática, no-tóxica
        </p>
        <p className="my-0 mb-2">
          ✓ Tipo de agarre: elástico plano para ajustar en la oreja.
        </p>
        <p className="my-0 mb-2">✓ Sin adaptador nasal.</p>
        <p className="my-0 mb-2">
          ✓ Las medidas del producto terminado son 15,5 cm x 7,5 cm, tres
          pliegues, terminación de doblés y fileteado
        </p>
        <p className="my-0 mb-2">✓ Lavable (hasta 3 veces).</p>
        <p className="my-0 mb-2">✓ Registro INVIMA en proceso.</p>
        <p className="my-0 mb-2">
          <a
            href="https://res.cloudinary.com/sebashr20/image/upload/v1586666936/tapabocasya/product-data-sheet/pds_2.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#51bcda' }}
          >
            Descargar ficha técnica.
          </a>
        </p>
      </div>
    ),
    button: 'Comprar',
    carousel: [
      {
        src:
          'https://res.cloudinary.com/sebashr20/image/upload/q_auto:low/v1586560084/tapabocasya/products/002/epvh4qwapq9ddpelty96.jpg',
        altText: '',
        caption: '',
        key: 't2_i1',
      },
      {
        src:
          'https://res.cloudinary.com/sebashr20/image/upload/q_auto:low/v1586560084/tapabocasya/products/002/jab9zfhwnhpgtocofpiz.jpg',
        altText: '',
        caption: '',
        key: 't2_i2',
      },
    ],
  },
  {
    type: 't3',
    title: 'Tapabocas Tipo 3',
    description: (
      <div className="text-left">
        <p className="my-0 mb-2">
          ✓ Tres capas de tela no tejida antifluida, de 40 gr c/u, ecológica,
          antialérgica, impermeable, antiestática, no-tóxica y una capa
          intermedia de filtro en Meltblown (repelente de olores).
        </p>
        <p className="my-0 mb-2">
          ✓ Tipo de agarre: elástico plano para ajustar en la oreja.
        </p>
        <p className="my-0 mb-2">✓ Sin adaptador nasal.</p>
        <p className="my-0 mb-2">
          ✓ Las medidas del producto terminado son 17,5 cm x 10,5 cm, tres
          pliegues, terminación de doblés y fileteado.
        </p>
        <p className="my-0 mb-2">✓ Un solo uso (aprox. 8 horas).</p>
        <p className="my-0 mb-2">✓ Registro INVIMA en proceso.</p>
        <p className="my-0 mb-2">
          <a
            href="https://res.cloudinary.com/sebashr20/image/upload/v1586667006/tapabocasya/product-data-sheet/pds_3.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#51bcda' }}
          >
            Descargar ficha técnica.
          </a>
        </p>
      </div>
    ),
    button: 'Comprar',
    carousel: [
      {
        src:
          'https://res.cloudinary.com/sebashr20/image/upload/q_auto:low/v1586560433/tapabocasya/products/003/bda76ta1osbtfyfyx4wq.jpg',
        altText: '',
        caption: '',
        key: 't3_i1',
      },
      {
        src:
          'https://res.cloudinary.com/sebashr20/image/upload/q_auto:low/v1586560433/tapabocasya/products/003/s4yxm2ttd1huiy7jumob.jpg',
        altText: '',
        caption: '',
        key: 't3_i2',
      },
    ],
  },
  {
    type: 't4',
    title: 'Tapabocas Tipo 4',
    description: (
      <div className="text-left">
        <p className="my-0 mb-2">
          ✓ Tres capas: una capa interna y una externa de tela no tejida de
          politex antialérgica, antiestática, no-tóxica y una capa intermedia de
          filtro sin fibra de vidrio.
        </p>
        <p className="my-0 mb-2">
          ✓ Tipo de agarre: elástico redondo para ajustar en la oreja.
        </p>
        <p className="my-0 mb-2">✓ Adaptador nasal plástico</p>
        <p className="my-0 mb-2">
          ✓ Las medidas del producto terminado son 18 cm x 9,5 cm,{' '}
          <strong>TERMOSELLADO.</strong>
        </p>
        <p className="my-0 mb-2">✓ Un solo uso (aprox. 8 horas).</p>
        <p className="my-0 mb-2">
          <strong>✓ REGISTRO INVIMA VIGENTE</strong>
        </p>
        <p className="my-0 mb-2">
          <a
            href="https://res.cloudinary.com/sebashr20/image/upload/v1586667039/tapabocasya/product-data-sheet/pds_4.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#51bcda' }}
          >
            Descargar ficha técnica.
          </a>
        </p>
      </div>
    ),
    button: 'Comprar',
    carousel: [
      {
        src:
          'https://res.cloudinary.com/sebashr20/image/upload/q_auto:low/v1586559691/tapabocasya/products/004/eqyhmud63ledu328czwr.jpg',
        altText: '',
        caption: '',
        key: 't4_i1',
      },
      {
        src:
          'https://res.cloudinary.com/sebashr20/image/upload/q_auto:low/v1586559691/tapabocasya/products/004/fdb4rzqbooa2rc21couj.jpg',
        altText: '',
        caption: '',
        key: 't4_i2',
      },
      {
        src:
          'https://res.cloudinary.com/sebashr20/image/upload/q_auto:low/v1586559691/tapabocasya/products/004/gfzbhgedl994q6qkrn01.jpg',
        altText: '',
        caption: '',
        key: 't4_i3',
      },
    ],
  },
];
