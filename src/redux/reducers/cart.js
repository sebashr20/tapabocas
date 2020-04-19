import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  CLEAR_PRODUCT,
  CREATE_ORDER,
} from '../actions/types';

const initialState = {
  cart: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  let updatedCart;
  let updatedItemIndex;
  switch (type) {
    case ADD_PRODUCT:
      updatedCart = [...state.cart];
      updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === payload.id
      );

      if (updatedItemIndex < 0) {
        updatedCart.push({ ...payload, quantity: 1 });
      } else {
        const updatedItem = {
          ...updatedCart[updatedItemIndex],
        };
        updatedItem.quantity++;
        updatedCart[updatedItemIndex] = updatedItem;
      }
      return { ...state, cart: updatedCart };

    case REMOVE_PRODUCT:
      updatedCart = [...state.cart];
      updatedItemIndex = updatedCart.findIndex((item) => item.id === payload);

      const updatedItem = {
        ...updatedCart[updatedItemIndex],
      };
      updatedItem.quantity--;
      if (updatedItem.quantity <= 0) {
        updatedCart.splice(updatedItemIndex, 1);
      } else {
        updatedCart[updatedItemIndex] = updatedItem;
      }
      return { ...state, cart: updatedCart };

    case CLEAR_PRODUCT:
      updatedCart = [...state.cart];
      updatedItemIndex = updatedCart.findIndex((item) => item.id === payload);
      updatedCart.splice(updatedItemIndex, 1);
      return { ...state, cart: updatedCart };

    case CREATE_ORDER:
      return { cart: [] };
    default:
      return state;
  }
}
