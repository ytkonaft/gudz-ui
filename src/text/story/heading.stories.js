import React from "react";
import Heading from "../heading";
import { HEADINGS } from "./constants";

const Template = (args) => <Heading {...args} />;

export default {
  title: "Gudz/Typography/Heading",
  component: Heading,
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
      options: Object.values(HEADINGS.sizes),
      type: {
        name: "string",
      },
      table: {
        type: { summary: `${Object.values(HEADINGS.sizes).join("|")}` },
        defaultValue: {
          summary: HEADINGS.sizes.large,
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
  children: "Heading",
  as: "h2",
  size: "medium",
  withSpace: false,
};
