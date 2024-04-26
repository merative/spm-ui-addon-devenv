import React from "react";
import Example from "../../../examples/images/sample-logo.jpg";
import Logo from "./Logo";

export default {
  title: "Logo",
  component: Logo,
};

const Template = (args) => (
  <div className="spm-custom-component">
    {" "}
    <Logo {...args}>
      <img src={Example} alt="logo" />
    </Logo>
  </div>
);

export const Small = Template.bind({});

Small.args = {
  size: "small",
};

export const Medium = Template.bind({});

Medium.args = {
  size: "medium",
};

export const Large = Template.bind({});

Large.args = {
  size: "large",
};

export const All = () => {
  return (
    <div className="spm-custom-component">
      <div className="bx--grid">
        <div className="bx--row">
          <div className="bx--col">
            <h2>small</h2>
            <Logo size="small">
              <img src={Example} alt="small logo" />
            </Logo>
          </div>
        </div>
        <div className="bx--row">
          <div className="bx--col">
            <h2>medium</h2>
            <Logo size="medium">
              <img src={Example} alt="medium logo" />
            </Logo>
          </div>
        </div>
        <div className="bx--row">
          <div className="bx--col">
            <h2>large</h2>
            <Logo size="large">
              <img src={Example} alt="large logo" />
            </Logo>
          </div>
        </div>
      </div>
    </div>
  );
};
