import styled, { css } from 'styled-components';
import SVG from '../../icon/svg';

const inputSizesMap = {
	large: css`
		font-size: 18px;
		line-height: 28px;
		padding: 14px 16px;
	`,
	medium: css`
		font-size: 16px;
		line-height: 24px;
		padding: 12px;
	`,
	small: css`
		font-size: 14px;
		line-height: 20px;
		padding: 8px;
	`,
};

const getBorder = ({ invalid, success }) => {
	if (invalid)
		return css`
			border: 1px solid ${({ theme }) => theme.colors.alert[400]};
		`;
	if (success)
		return css`
			border: 1px solid ${({ theme }) => theme.colors.success[400]};
		`;
	return css`
		border: 1px solid transparent;
		&:focus {
			border: 1px solid ${({ theme }) => theme.colors.primary[400]};
		}
	`;
};

const getBackground = ({ filled }) => {
	if (filled)
		return css`
			background-color: ${({ theme }) => theme.colors.white[100]};
		`;

	return css`
		background-color: ${({ theme }) => theme.colors.gray[100]};

		&:hover {
			background-color: ${({ theme }) => theme.colors.white[100]};
		}

		&:focus {
			background-color: ${({ theme }) => theme.colors.white[100]};
		}
	`;
};

export const StyledInput = styled.input`
	box-shadow: ${({ theme }) => theme.shadow.inset};
	border-radius: 8px;
	width: 100%;
	${({ size }) => inputSizesMap[size]};
	outline: none;
	transition: all 0.3s ease;

	::placeholder,
	::-webkit-input-placeholder {
		color: ${({ theme }) => theme.colors.gray[900]};
	}

	&:disabled {
		pointer-events: none;

		::placeholder,
		::-webkit-input-placeholder {
			color: ${({ theme }) => theme.colors.gray[500]};
		}
	}

	${getBorder}
	${getBackground}
`;

export const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const LabelWrapper = styled.div`
	margin-bottom: 8px;
`;

export const DescriptionWrapper = styled.div`
	margin-top: 8px;
	color: ${({ theme, invalid, success, disabled }) => {
		if (disabled) return theme.colors.gray[400];
		if (invalid) return theme.colors.alert[400];
		if (success) return theme.colors.success[500];
		return theme.colors.gray[900];
	}};
`;

export const InputFieldWrapper = styled.div`
	position: relative;
	width: 100%;
`;

export const ClearButton = styled.button`
	border: none;
	background: none;
	position: absolute;
	padding: 0;
	top: 50%;
	right: 16px;
	transform: translateY(-50%);
	cursor: pointer;
	display: flex;

	${SVG} {
		stroke: ${({ theme }) => theme.colors.primary[600]};
	}

	&:hover {
		${SVG} {
			stroke: ${({ theme }) => theme.colors.primary[900]};
		}
	}
`;
