import {
  INCREMENT,
  DECREMENT,
  INCREMENT_IF_EVEN,
  INCREMENT_IF_ODD
} from "./actionTypes";

export const incrementCount = () => {
  return { type: INCREMENT };
};

export const decrementCount = () => {
  return { type: DECREMENT };
};

export const incrementCountEven = () => {
  return { type: INCREMENT_IF_EVEN };
};

export const incrementCountOdd = () => {
  return { type: INCREMENT_IF_ODD };
};
