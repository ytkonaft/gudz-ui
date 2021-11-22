import React from 'react';
import { SIZES, CATEGORY } from './constants';
import Button from '../index';

const Template = (args) => <Button {...args} />;

export default {
	title: 'Gudz/UI/Button',
	component: Button,
	argTypes: {
		category: {
			name: 'category',
			control: { type: 'select' },
			options: Object.values(CATEGORY),
			type: {
				name: 'string',
			},
			table: {
				type: { summary: `${Object.values(CATEGORY).join('|')}` },
				defaultValue: {
					summary: CATEGORY.default,
				},
			},
		},
		size: {
			name: 'size',
			options: Object.values(SIZES),
			control: { type: 'radio' },
			table: {
				type: { summary: `${Object.values(SIZES).join('|')}` },
				defaultValue: {
					summary: SIZES.medium,
				},
			},
		},
		disabled: {
			name: 'disabled',
			type: {
				name: 'boolean',
			},
			table: {
				type: { summary: 'boolean' },
				defaultValue: {
					summary: 'false',
				},
			},
		},
		fullWidth: {
			name: 'fullWidth',
			type: {
				name: 'boolean',
			},
			table: {
				type: { summary: 'boolean' },
				defaultValue: {
					summary: 'false',
				},
			},
		},
	},
};

export const Default = Template.bind({});

Default.args = {
	children: 'Button',
	category: 'default',
	fullWidth: true,
	size: 'medium',
	onClick: () => {},
};

export const Primary = Template.bind({});

Primary.args = {
	children: 'Button',
	category: 'primary',
	fullWidth: true,
	size: 'medium',
	onClick: () => {},
};

export const Secondary = Template.bind({});

Secondary.args = {
	children: 'Button',
	category: 'secondary',
	fullWidth: true,
	size: 'medium',
	onClick: () => {},
};

export const Accent = Template.bind({});

Accent.args = {
	children: 'Button',
	category: 'accent',
	fullWidth: true,
	size: 'medium',
	onClick: () => {},
};

export const WithIcon = Template.bind({});

WithIcon.args = {
	children: 'Button',
	category: 'default',
	glyph: 'bag',
	fullWidth: true,
	size: 'medium',
	onClick: () => {},
};
