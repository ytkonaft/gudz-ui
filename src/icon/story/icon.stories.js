import React from 'react';
import Icon from '../index';

const Template = (args) => <Icon {...args} />;

export default {
	title: 'Gudz/UI/Icon',
	component: Icon,
};

export const Default = Template.bind({});

Default.args = {
	glyph: 'bag',
};
