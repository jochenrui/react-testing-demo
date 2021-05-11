import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent, cleanup } from "@testing-library/react";
import * as reducers from "../actions/reducers";
import * as actions from "../actions/actionTypes";

describe("count reducers function correctly", () => {
  afterEach(cleanup);
  test("state is initialized correctly", () => {
    expect(reducers.initialState).toEqual({ count: 0 });
  });

  test("count is incremented correctly", () => {
    console.log();
    expect(
      reducers.countReducer(reducers.initialState, {
        type: actions.COUNTER_INC,
      })
    ).toEqual({ count: 1 });
  });

  test("count is decremented correctly", () => {
    console.log();
    expect(
      reducers.countReducer(reducers.initialState, {
        type: actions.COUNTER_DEC,
      })
    ).toEqual({ count: -1 });
  });

  test("count is added correctly", () => {
    console.log();
    expect(
      reducers.countReducer(reducers.initialState, {
        type: actions.COUNTER_ADD,
        payload: {
          value: 5,
        },
      })
    ).toEqual({ count: 5 });
  });

  test("count is subtracted correctly", () => {
    console.log();
    expect(
      reducers.countReducer(reducers.initialState, {
        type: actions.COUNTER_SUB,
        payload: {
          value: 5,
        },
      })
    ).toEqual({ count: -5 });
  });
});
