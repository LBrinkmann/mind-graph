import { combineReducers } from "redux";
import { createReducer } from "redux-starter-kit";

const foo = createReducer(
  { bar: {} },
  {
    FOO_BAR: (state, action) => ({
      bar: action.foo
    })
  }
);

const reducers = combineReducers({
  foo
});

export default reducers;
