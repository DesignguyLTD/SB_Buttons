import React from "react";
import Radio from "./Radio";

export default {
  title: "Button/Radio",
  component: Radio,
  args: {
    children: "Radio",
  },
};

const Template = (args) => <Radio {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  variant: "radio",
};




