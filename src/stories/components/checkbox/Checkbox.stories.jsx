import React from "react";
import Checkbox from "./Checkbox";

export default {
  title: "Button/Checkbox",
  component: Checkbox,
  args: {
    children: "Checkbox",
  },
};

const Template = (args) => <Checkbox {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  variant: "checkbox",
};
