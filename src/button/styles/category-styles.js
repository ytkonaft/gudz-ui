import { css } from 'styled-components';
import SVG from '../../icon/svg';

export const defaultStyle = css`
	border: 1px solid ${({ theme }) => theme.colors.gray[300]};
	background: ${({ theme }) => theme.colors.white[50]};
	color: ${({ theme }) => theme.colors.dark[800]};
	${SVG} {
		stroke: ${({ theme }) => theme.colors.dark[800]};
	}

	&:hover {
		background: ${({ theme }) => theme.colors.gray[100]};
	}

	&:active {
		background: ${({ theme }) => theme.colors.gray[200]};
	}

	&:disabled {
		background: ${({ theme }) => theme.colors.gray[100]};
		border-color: ${({ theme }) => theme.colors.gray[200]};
		color: ${({ theme }) => theme.colors.gray[800]};
		pointer-events: none;
		${SVG} {
			stroke: ${({ theme }) => theme.colors.gray[800]};
		}
	}
`;

export const primary = css`
	border: none;
	background: ${({ theme }) => theme.colors.primary[500]};
	color: ${({ theme }) => theme.colors.white[50]};
	${SVG} {
		stroke: ${({ theme }) => theme.colors.white[50]};
	}

	&:hover {
		background: ${({ theme }) => theme.colors.primary[600]};
	}

	&:active {
		background: ${({ theme }) => theme.colors.primary[700]};
	}

	&:disabled {
		pointer-events: none;
		background: ${({ theme }) => theme.colors.primary[100]};
	}
`;

export const secondary = css`
	border-width: ${({ theme }) => theme.border.width.medium}px;
	border-style: solid;
	border-color: ${({ theme }) => theme.colors.primary[400]};
	background: ${({ theme }) => theme.colors.white[50]};
	color: ${({ theme }) => theme.colors.dark[800]};
	${SVG} {
		stroke: ${({ theme }) => theme.colors.dark[800]};
	}

	&:hover {
		background: ${({ theme }) => theme.colors.primary[400]};
		border-color: ${({ theme }) => theme.colors.primary[400]};
		color: ${({ theme }) => theme.colors.white[50]};
		${SVG} {
			stroke: ${({ theme }) => theme.colors.white[50]};
		}
	}

	&:active {
		background: ${({ theme }) => theme.colors.primary[500]};
		border-color: ${({ theme }) => theme.colors.primary[500]};
		color: ${({ theme }) => theme.colors.white[50]};
		${SVG} {
			stroke: ${({ theme }) => theme.colors.white[50]};
		}
	}

	&:disabled {
		pointer-events: none;
		border-color: ${({ theme }) => theme.colors.primary[100]};
		color: ${({ theme }) => theme.colors.primary[100]};
		${SVG} {
			stroke: ${({ theme }) => theme.colors.primary[100]};
		}
	}
`;

export const accent = css`
	border: none;
	background: ${({ theme }) => theme.colors.secondary[500]};
	color: ${({ theme }) => theme.colors.white[50]};
	${SVG} {
		stroke: ${({ theme }) => theme.colors.white[50]};
	}

	&:hover {
		background: ${({ theme }) => theme.colors.secondary[600]};
	}

	&:active {
		background: ${({ theme }) => theme.colors.secondary[700]};
	}

	&:disabled {
		pointer-events: none;
		background: ${({ theme }) => theme.colors.secondary[100]};
	}
`;

export const text = css`
	background: transparent;
	color: ${({ theme }) => theme.colors.primary[500]};
	border: none;
`;

const categoryStyles = {
	default: defaultStyle,
	primary,
	secondary,
	accent,
	text,
};

export default categoryStyles;
