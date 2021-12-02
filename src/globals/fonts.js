import { createGlobalStyle } from 'styled-components';

const getGoogleFonts = (fonts = []) => {
	return fonts
		.reduce((accumulator, font) => {
			const accumulatorClone = [...accumulator];
			const family = font.family.replace(/ +/g, '+');
			const weights = (font.weights || []).join(',');

			accumulatorClone.push(family + (weights && `:${weights}`));
			return accumulatorClone;
		}, [])
		.join('|');
};

const FontLoader = ({
	fonts = [
		{
			family: 'Inter',
			weights: [300, 400, 500, 700],
		},
	],
}) => {
	const googleFamilies = getGoogleFonts(fonts);
	return (
		<link
			rel='preload'
			href={`https://fonts.googleapis.com/css?family=${googleFamilies}`}
		/>
	);
};

export default FontLoader;
