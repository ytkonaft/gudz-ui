import React from 'react';
import PropTypes from 'prop-types';
import { StyledHeading } from './styles';

const Heading = ({ children, ...props }) => (
	<StyledHeading {...props}>{children}</StyledHeading>
);

Heading.propTypes = {
	size: PropTypes.oneOf(['large', 'medium', 'small', 'xSmall']),
	as: PropTypes.string,
	children: PropTypes.node.isRequired,
};

Heading.defaultProps = {
	size: 'medium',
	as: 'h2',
};

export default Heading;
