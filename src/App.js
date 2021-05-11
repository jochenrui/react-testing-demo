import { Heading } from "./components/Heading";
import { IdentifierButtons } from "./components/IdentifierButtons";
import { useReducer } from "react";
import { Counter } from "./components/Counter";

import * as actions from "./actions/actionTypes";
import * as reducers from "./actions/reducers";

function App() {
  const [reducerState, dispatch] = useReducer(
    reducers.countReducer,
    reducers.initialState
  );

  const dispatchCountIncrement = () => {
    dispatch({ type: actions.COUNTER_INC });
  };

  const dispatchCountDecrement = () => {
    dispatch({ type: actions.COUNTER_DEC });
  };

  const dispatchCountAdd = (value) => {
    dispatch({
      type: actions.COUNTER_ADD,
      payload: {
        value: value,
      },
    });
  };

  const dispatchCountSubtract = (value) => {
    dispatch({
      type: actions.COUNTER_SUB,
      payload: {
        value: value,
      },
    });
  };

  return (
    <div>
      <Heading />
      <IdentifierButtons
        onClickIncrement={dispatchCountIncrement}
        onClickDecrement={dispatchCountDecrement}
        onClickAdd={dispatchCountAdd}
      />
      <Counter count={reducerState.count} />
    </div>
  );
}

export default App;
