import React from 'react';
import PropTypes from 'prop-types';
import { StyledDisplayText } from './styles';

const DisplayText = ({ children, ...props }) => (
	<StyledDisplayText {...props}>{children}</StyledDisplayText>
);

DisplayText.propTypes = {
	size: PropTypes.oneOf(['large', 'medium', 'small', 'xSmall']),
	as: PropTypes.string,
  children: PropTypes.node.isRequired,
};

DisplayText.defaultProps = {
	size: 'medium',
  as: 'h2'
};

export default DisplayText;
