import React from "react";
import Label from "../label";
import { TEXT } from "./constants";

const Template = (args) => <Label {...args} />;

export default {
  title: "Gudz/Typography/Label",
  component: Label,
  argTypes: {
    as: {
      name: "as",
      control: { type: "select" },
      options: Object.values(TEXT.types),
      type: {
        name: "string",
      },
      table: {
        type: { summary: `${Object.values(TEXT.types).join("|")}` },
        defaultValue: {
          summary: TEXT.types.p,
        },
      },
    },
    size: {
      name: "size",
      control: { type: "select" },
      options: Object.values(TEXT.sizes),
      type: {
        name: "string",
      },
      table: {
        type: { summary: `${Object.values(TEXT.sizes).join("|")}` },
        defaultValue: {
          summary: TEXT.sizes.large,
        },
      },
    },
    withSpace: {
      name: "withSpace",
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
  children: "Label",
  as: "p",
  size: "medium",
  withSpace: false,
};
