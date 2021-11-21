import React from "react";
import { StyledHeading } from "./styles";

const Heading = ({ children, ...props }) => (
  <StyledHeading {...props}>{children}</StyledHeading>
);

export default Heading;
