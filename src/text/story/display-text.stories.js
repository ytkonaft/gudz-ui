import React from "react";
import DisplayText from "../display-text";
import { TEXT, HEADINGS } from "./constants";

const Template = (args) => <DisplayText {...args} />;

export default {
  title: "Gudz/Typography/DisplayText",
  component: DisplayText,
  argTypes: {
    as: {
      name: "as",
      control: { type: "select" },
      options: Object.values(HEADINGS.types),
      type: {
        name: "string",
      },
      table: {
        type: { summary: `${Object.values(HEADINGS.types).join("|")}` },
        defaultValue: {
          summary: HEADINGS.types.h1,
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
  children: "DisplayText",
  as: "h1",
  size: "medium",
  withSpace: false,
};
