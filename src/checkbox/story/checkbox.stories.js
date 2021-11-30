import React from 'react';
import Checkbox from '../index';

const Template = (args) => <Checkbox {...args} />;

export default {
	title: 'Gudz/UI/Checkbox',
	component: Checkbox,
};

export const Default = Template.bind({});

Default.args = {
	checked: false,
	disabled: false,
};
