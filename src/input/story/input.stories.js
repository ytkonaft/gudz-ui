import React from "react";
import Input from "../index";
import { SIZES } from "./constants";

const Template = (args) => <Input {...args} />;

export default {
  title: "Gudz/UI/Input",
  component: Input,
  argTypes: {
    size: {
      name: "size",
      control: { type: "select" },
      options: Object.values(SIZES),
      type: {
        name: "string",
      },
      table: {
        type: { summary: `${Object.values(SIZES).join("|")}` },
        defaultValue: {
          summary: SIZES.medium,
        },
      },
    },
    disabled: {
      name: "disabled",
      type: {
        name: "boolean",
      },
      table: {
        type: { summary: "boolean" },
        defaultValue: {
          summary: "false",
        },
      },
    },
    invalid: {
      name: "invalid",
      type: {
        name: "boolean",
      },
      table: {
        type: { summary: "boolean" },
        defaultValue: {
          summary: "false",
        },
      },
    },
    success: {
      name: "success",
      type: {
        name: "boolean",
      },
      table: {
        type: { summary: "boolean" },
        defaultValue: {
          summary: "false",
        },
      },
    },
    clearable: {
      name: "clearable",
      type: {
        name: "boolean",
      },
      table: {
        type: { summary: "boolean" },
        defaultValue: {
          summary: "false",
        },
      },
    },
  },
};

export const Default = Template.bind({});

Default.args = {
  size: "medium",
  label: "Input",
  placeholder: "Placeholder",
  description: "Description",
  value: "",
  onChange: () => {},
};


export const WithoutDescription = Template.bind({});

WithoutDescription.args = {
  size: "medium",
  label: "Input",
  placeholder: "Placeholder",
  value: "",
  onChange: () => {},
};


export const WithoutLabel = Template.bind({});

WithoutLabel.args = {
  size: "medium",
  placeholder: "Placeholder",
  value: "",
  onChange: () => {},
};
