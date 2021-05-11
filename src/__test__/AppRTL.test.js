import React from "react";

import {
  render,
  fireEvent,
  cleanup,
  getByTestId,
} from "@testing-library/react";
import App from "../App";

describe("buttons function correctly", () => {
  afterEach(cleanup);

  test("role button functions correctly", () => {
    const { getByText, getByTestId, getByRole } = render(<App />);

    expect(getByText(/Counter/i).textContent).toBe("Counter: 0");

    fireEvent.click(getByText("Role"));

    expect(getByText(/Counter/i).textContent).toBe("Counter: 1");

    fireEvent.click(getByTestId("button-testid"));

    expect(getByText(/Counter/i).textContent).toBe("Counter: 0");

    fireEvent.click(getByText("Class"));

    expect(getByText(/Counter/i).textContent).toBe("Counter: 5");
  });
});
