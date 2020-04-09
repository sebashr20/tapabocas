import React, { useReducer } from "react";

import ShopContext from "./shop-context";
import {
  shopReducer,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  CLEAR_PRODUCT,
} from "./reducers";

const GlobalState = (props) => {
  const products = [
    {
      id: "p1",
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
      id: "p2",
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
      id: "p3",
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

  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });

  const addProductToCart = (product) => {
    setTimeout(() => {
      dispatch({ type: ADD_PRODUCT, product: product });
    }, 700);
  };

  const removeProductFromCart = (productId) => {
    setTimeout(() => {
      dispatch({ type: REMOVE_PRODUCT, productId: productId });
    }, 700);
  };

  const clearProductFromCart = (productId) => {
    setTimeout(() => {
      dispatch({ type: CLEAR_PRODUCT, productId: productId });
    }, 700);
  };

  const totals = (cart) => {
    const totalAmount = cart
      .map((cart) => {
        return cart.price * cart.quantity;
      })
      .reduce((a, b) => {
        return a + b;
      }, 0);

    const totalQuantity = cart
      .map((qty) => {
        return qty.quantity;
      })
      .reduce((a, b) => {
        return a + b;
      }, 0);

    return { amount: totalAmount, qty: totalQuantity };
  };

  return (
    <ShopContext.Provider
      value={{
        products: products,
        cart: cartState.cart,
        totalAmount: totals(cartState.cart).amount,
        totalQuantity: totals(cartState.cart).qty,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
        clearProductFromCart: clearProductFromCart,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default GlobalState;
