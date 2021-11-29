import React from 'react';
import PropTypes from 'prop-types';
import { StyledLabel } from './styles';

const Label = ({ children, ...props }) => (
	<StyledLabel {...props}>{children}</StyledLabel>
);

Label.propTypes = {
	size: PropTypes.oneOf(['large', 'medium', 'small', 'xSmall']),
	as: PropTypes.string,
	children: PropTypes.node.isRequired,
};

Label.defaultProps = {
	size: 'medium',
	as: 'label',
};

export default Label;
