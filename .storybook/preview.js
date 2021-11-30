import { ThemeProvider } from 'styled-components';
import { addDecorator } from '@storybook/react';
import { withThemes } from '@react-theming/storybook-addon';
import theme from '../src/theme';
import GlobalStyles from '../src/globals/global-styles';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

addDecorator((story) => (
	<>
		<GlobalStyles />
		{story()}
	</>
));

addDecorator(withThemes(ThemeProvider, [theme]));
