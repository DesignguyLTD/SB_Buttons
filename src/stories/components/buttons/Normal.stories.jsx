import React from "react";
import Button from "./Button";

export default {
  title: "Button/Normal",
  component: Button,
  args: {
    children: "Button",
  },
};

const Template = (args) => <Button {...args} />;

export const Norm = Template.bind({});
Norm.args = {
  variant: "norm",
};

export const Hover = Template.bind({});
Hover.args = {
  variant: "hover",
};

export const Focus = Template.bind({});
Focus.args = {
  variant: "focus",
};

export const Clicked = Template.bind({});
Clicked.args = {
  variant: "clicked",
};

export const Loading = Template.bind({});
Loading.args = {
  variant: "loading",
};

export const Disable = Template.bind({});
Disable.args = {
  variant: "disable",
};
