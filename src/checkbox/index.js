import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';
import { CheckboxContainer, HiddenCheckbox, FakeCheckbox } from './styles';

const Checkbox = ({ checked, disabled, ...props }) => (
	<CheckboxContainer>
		<HiddenCheckbox checked={checked} disabled={disabled} {...props} />
		<FakeCheckbox checked={checked} disabled={disabled}>
			<Icon glyph='check' />
		</FakeCheckbox>
	</CheckboxContainer>
);

export default Checkbox;
