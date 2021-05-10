import React from "react";

/**
 * Enzyme imports
 */
import Enzyme, { shallow, render, mount } from "enzyme";
// toJson -> convert shallow renders into JSON for Snapshot Tests
import toJson from "enzyme-to-json";
/**
 * Adapter -> makes enzyme work with specific React version ->
 * takes care of changes in between React versions, so that Enzyme can stay unchanged
 */
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

/**
 * react-test-renderer
 */
import * as renderer from "react-test-renderer";

import App from "../App";

Enzyme.configure({ adapter: new Adapter() });

// snapshot test
describe("app renders correctly", () => {
  // shallow -> renders high level components, no children
  test("app shallow renders correctly", () => {
    const wrapper = shallow(<App />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  // mount -> renders full tree
  test("app mount renders correctly", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
