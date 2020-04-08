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
      description:
        "Some quick example text to build on the card title and makeup the bulk of the card's content.",
      button: "Comprar",
      img: require("assets/img/qr-test.jpeg"),
    },
    {
      id: "p2",
      title: "Tapabocas Tipo 2",
      price: 20000,
      description:
        "Some quick example text to build on the card title and makeup the bulk of the card's content.",
      button: "Comprar",
      img: require("assets/img/qr-test.jpeg"),
    },
    {
      id: "p3",
      title: "Tapabocas Tipo 3",
      price: 30000,
      description:
        "Some quick example text to build on the card title and makeup the bulk of the card's content.",
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
