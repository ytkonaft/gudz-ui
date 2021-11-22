import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './styles';
import { Label } from '../text';
import Icon from '../icon';

const Button = ({ children, size, glyph, ...props }) => (
	<StyledButton {...props} size={size}>
		{glyph && <Icon glyph={glyph} />}
		<Label as='span' size={size}>
			{children}
		</Label>
	</StyledButton>
);

Button.propTypes = {
	category: PropTypes.oneOf([
		'default',
		'primary',
		'secondary',
		'accent',
		'text',
	]),
	size: PropTypes.oneOf(['small', 'medium', ' large']),
	disabled: PropTypes.bool,
	fullWidth: PropTypes.bool,
	onClick: PropTypes.func,
	glyph: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
		PropTypes.element,
	]).isRequired,
};

Button.defaultProps = {
	glyph: null,
	category: 'default',
	size: 'medium',
	onClick: new Function(),
	fullWidth: false,
	disabled: false,
};

export default Button;
