import React from "react";
import Button from "./Button";

export default {
  title: "Button/Small",
  component: Button,
  args: {
    children: "Button",
  },
};

const Template = (args) => <Button {...args} />;

export const Norm = Template.bind({});
Norm.args = {
  variant: "norm_sm",
};

export const Hover = Template.bind({});
Hover.args = {
  variant: "hover_sm",
};

export const Focus = Template.bind({});
Focus.args = {
  variant: "focus_sm",
};

export const Clicked = Template.bind({});
Clicked.args = {
  variant: "clicked_sm",
};

export const Loading = Template.bind({});
Loading.args = {
  variant: "loading_sm",
};

export const Disable = Template.bind({});
Disable.args = {
  variant: "disable_sm",
};
