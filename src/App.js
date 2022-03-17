import "./styles.css";
import { useSelector, useDispatch } from "react-redux";

export default function App(props) {
  let counter = useSelector((state) => state.counter);
  let showCounter = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();
  const handleDecrement = () => {
    dispatch({ type: "DECREMENT", payload: 2 });
  };

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT", payload: 5 });
  };

  const handleToggle = () => {
    dispatch({ type: "TOGGLE" });
  };

  return (
    <div className="App">
      {showCounter && (
        <>
          <h1>Counter</h1>
          <h2>{counter}</h2>
          <button onClick={handleIncrement}>Increment by 5</button>
          <button onClick={handleDecrement}>Decrement by 2</button>
        </>
      )}

      <button onClick={handleToggle}>Toggle</button>
    </div>
  );
}
