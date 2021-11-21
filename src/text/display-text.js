import React from "react";
import PropTypes from 'prop-types';
import { StyledDisplayText } from "./styles";

const DisplayText = ({ children, ...props }) => (
  <StyledDisplayText {...props}>{children}</StyledDisplayText>
);

export default DisplayText;
