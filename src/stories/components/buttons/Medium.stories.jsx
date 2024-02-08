import React from "react";
import Button from "./Button";

export default {
  title: "Button/Medium",
  component: Button,
  args: {
    children: "Button",
  },
};

const Template = (args) => <Button {...args} />;

export const Norm = Template.bind({});
Norm.args = {
  variant: "norm_md",
};

export const Hover = Template.bind({});
Hover.args = {
  variant: "hover_md",
};

export const Focus = Template.bind({});
Focus.args = {
  variant: "focus_md",
};

export const Clicked = Template.bind({});
Clicked.args = {
  variant: "clicked_md",
};

export const Loading = Template.bind({});
Loading.args = {
  variant: "loading_md",
};

export const Disable = Template.bind({});
Disable.args = {
  variant: "disable_md",
};
