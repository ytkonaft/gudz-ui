import React from 'react';
import PropTypes from 'prop-types';
import { StyledText } from './styles';

const Text = ({ children, ...props }) => (
	<StyledText {...props}>{children}</StyledText>
);

Text.propTypes = {
	size: PropTypes.oneOf(['large', 'medium', 'small', 'xSmall']),
	as: PropTypes.string,
	children: PropTypes.node.isRequired,
};

Text.defaultProps = {
	size: 'medium',
	as: 'p',
};

export default Text;
