const initialState = { counter: 0, showCounter: true };
const counterReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: prevState.counter + action.payload,
        showCounter: prevState.showCounter
      };
    case "DECREMENT":
      return {
        counter: prevState.counter - action.payload,
        showCounter: prevState.showCounter
      };
    case "TOGGLE":
      return {
        counter: prevState.counter,
        showCounter: !prevState.showCounter
      };
    default:
      return initialState;
  }
};
export default counterReducer;
