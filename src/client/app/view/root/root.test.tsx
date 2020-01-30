/* eslint-disable no-undef */
import React from "react";
import { shallow } from "../../../../enzyme";

import Root from "./Root";

describe("Root tests", () => {
  it("renders", () => {
    const wrapper = shallow(<Root />);
    expect(wrapper).toBeDefined();
  });
});
