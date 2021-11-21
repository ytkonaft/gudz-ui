import React from "react";
import PropTypes from 'prop-types';
import icons from "./icons";

const Icon = ({ glyph }) => {
  const Glyph = icons[glyph];
  return <Glyph />;
};

Icon.propTypes = {
  glyph: PropTypes.string.isRequired
}

export default Icon;
