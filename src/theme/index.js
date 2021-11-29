import thinHex from './helpers/thin-hex';

const Theme = {
	colors: {
		primary: {
			100: '#F6BED5',
			400: '#EA4C89',
			500: '#E83273',
			600: '#D72F6F',
		},
		secondary: {
			100: '#C5CBF9',
			400: '#074FE9',
			500: '#2334EF',
			600: '#0046DE',
			700: '#003BD1',
		},
		success: {
			100: '#D7FCCB',
			200: '#BBFBA9',
			300: '#9BF882',
			400: '#7EF460',
			500: '#C6CB11',
			600: '#4BDE34',
			700: '#28C829',
			800: '#00B41C',
			900: '#008F0C',
		},
		warning: {
			600: '#F8D910',
		},
		alert: {
			400: '#FB614C',
		},
		dark: {
			800: '#0A1C1C',
		},
		gray: {
			100: '#EDF4F4',
			200: '#E4EBEB',
			300: '#D5DCDC',
			400: '#CAD1D1',
			800: '#979E9E',
			900: '#8A9191',
		},
		white: {
			50: '#F9FFFF',
			100: '#F4FAFA',
			200: '#EEF4F4',
		},
	},
	border: {
		radius: {
			large: 10,
			medium: 8,
			small: 6,
		},
		width: {
			large: 3,
			medium: 2,
			small: 1,
		},
	},
	shadow: {
		inset: 'inset 1px 1px 1px #CAD1D1',
	},
	breakpoints: {
		xlg: 1200,
		lg: 992,
		md: 768,
		sm: 576,
	},
	thinHex,
};

export default Theme;
