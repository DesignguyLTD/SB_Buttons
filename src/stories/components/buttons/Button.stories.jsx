import React from "react";
import Button from "./Button";

export default {
  title: "Button/Primary",
  component: Button,
  args: {
    children: "Button",
  },
};

const Template = (args) => <Button {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  variant: "normal",
  disabled: false
};

export const Medium = Template.bind({});
Medium.args = {
  variant: "medium",
  disabled: false
};

export const Small = Template.bind({});
Small.args = {
  variant: "small",
  disabled: false
};


