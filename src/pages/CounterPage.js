import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

const INCREMENT_COUNT = "increment-count";
const DECREMENT_COUNT = "decrement-count";
const CHANGE_INPUT_VALUE = "change-input-value";
const ADD_VALUE_TO_COUNT = "add-value-to-count";

function reducer(state, action) {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        valueToAdd: action.payload,
      };
    case ADD_VALUE_TO_COUNT:
      return {
        ...state,
        valueToAdd: "",
        count: state.count + Number(state.valueToAdd),
      };
    default:
      return state;
  }
}

function CounterPage({ initialValue }) {
  const [state, dispatch] = useReducer(reducer, {
    count: initialValue,
    valueToAdd: "",
  });

  const handleIncClick = () => {
    dispatch({
      type: INCREMENT_COUNT,
    });
  };

  const handleDecClick = () => {
    dispatch({
      type: DECREMENT_COUNT,
    });
  };

  const handleChange = (event) => {
    dispatch({
      type: CHANGE_INPUT_VALUE,
      payload: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: ADD_VALUE_TO_COUNT,
    });
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is: {state.count}</h1>
      <div className="flex flex-row">
        <Button secondary rounded onClick={handleIncClick}>
          Increment
        </Button>
        <Button secondary rounded onClick={handleDecClick}>
          Decrement
        </Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot</label>
        <input
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
          value={state.valueToAdd}
          onChange={handleChange}
        />
        <Button primary rounded>
          Add it!
        </Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
