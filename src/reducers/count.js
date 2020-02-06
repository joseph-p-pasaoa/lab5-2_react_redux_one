import {
  INCREMENT,
  DECREMENT,
  INCREMENT_IF_EVEN,
  INCREMENT_IF_ODD,
  INCREMENT_ASYNC
} from "../actions/actionTypes";

export default (state = 0, action) => {
  let newState = state;
  switch (action.type) {
    case INCREMENT:
      newState += 1;
      break;
    case DECREMENT:
      newState -= 1;
      break;
    case INCREMENT_IF_EVEN:
      if (newState % 2 === 0) {
        newState += 1;
      }
      break;
    case INCREMENT_IF_ODD:
      if (newState % 2 === 1) {
        newState += 1;
      }
      break;
    case INCREMENT_ASYNC:
      console.log("IAsync")
      setTimeout(newState += 1, 1000);
      break;
    default:
      return newState;
  }
  return newState;
};
