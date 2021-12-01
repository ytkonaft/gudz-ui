import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';
import { Label } from '../text';
import {
	CheckboxContainer,
	HiddenCheckbox,
	FakeCheckbox,
	CheckboxLabel,
} from './styles';

const Checkbox = ({
	checked,
	disabled,
	onChange,
	labelText,
	labelComponent: LabelComponent,
	...props
}) => {
	return (
		<CheckboxContainer>
			<HiddenCheckbox
				checked={checked}
				disabled={disabled}
				onChange={onChange}
				{...props}
			/>
			<FakeCheckbox checked={checked} disabled={disabled}>
				<Icon glyph='check' />
			</FakeCheckbox>

			{labelText && (
				<CheckboxLabel size='small' as='span'>
					{labelText}
				</CheckboxLabel>
			)}

			{LabelComponent && <LabelComponent />}
		</CheckboxContainer>
	);
};

Checkbox.propTypes = {
	checked: PropTypes.bool,
	disabled: PropTypes.bool,
	onChange: PropTypes.func,
	labelText: PropTypes.string,
	LabelComponent: PropTypes.element,
};

Checkbox.defaultProps = {
	checked: false,
	disabled: false,
	onClick: new Function(),
	lable: null,
	LabelComponent: null,
};

export default Checkbox;
