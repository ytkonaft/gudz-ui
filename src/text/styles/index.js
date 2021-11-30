import styled from 'styled-components';
import headingSizes from './heading-sizes';
import paragraphSizes from './paragraph-sizes';
import labelSizes from './label-sizes';
import displayTextSizes from './display-text-sizes';

export const StyledText = styled.p`
	font-weight: 400;
	margin-top: 0;
	${({ size }) => paragraphSizes[size]}
`;

export const StyledLabel = styled.label`
	font-weight: 500;
	margin-top: 0;
	${({ size }) => labelSizes[size]}
`;

export const StyledHeading = styled.h1`
	margin-top: 0;
	${({ size }) => headingSizes[size]}
`;

export const StyledDisplayText = styled.h1`
	margin-top: 0;
	${({ size }) => displayTextSizes[size]}
`;
