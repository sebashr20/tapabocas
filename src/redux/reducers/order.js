import { CREATE_ORDER } from '../actions/types';

const initialState = {};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_ORDER:
      return payload;
    default:
      return state;
  }
}
