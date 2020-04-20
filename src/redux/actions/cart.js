import { ADD_PRODUCT, REMOVE_PRODUCT, CLEAR_PRODUCT } from './types';

export const addProductToCart = (product) => {
  return (dispatch) => {
    dispatch({
      type: ADD_PRODUCT,
      payload: product,
    });
  };
};

export const removeProductFromCart = (productId) => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_PRODUCT,
      payload: productId,
    });
  };
};

export const clearProductFromCart = (productId) => {
  return (dispatch) => {
    dispatch({ type: CLEAR_PRODUCT, productId: productId });
  };
};
