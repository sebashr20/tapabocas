import { CREATE_ORDER, GET_ORDERS, UPDATE_ORDER } from '../actions/types';

const initialState = {
  currentOrder: {},
  orders: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_ORDER:
      return { ...state, currentOrder: payload };

    case GET_ORDERS:
    case UPDATE_ORDER:
      return { ...state, orders: payload };

    default:
      return state;
  }
}
