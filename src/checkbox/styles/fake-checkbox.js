import styled, { css } from 'styled-components';
import SVG from '../../icon/svg';

const disabledStles = css`
	border-color: ${({ theme }) => theme.colors.gray[400]};
	cursor: default;

	${SVG} {
		stroke: ${({ theme }) => theme.colors.gray[400]};
	}
`;

const defaultStyles = css`
	border-color: ${({ theme }) => theme.colors.primary[400]};
	cursor: pointer;

	${SVG} {
		stroke: ${({ theme }) => theme.colors.primary[400]};
	}
`;

const FakeCheckbox = styled.div`
	display: inline-block;
	width: 20px;
	height: 20px;
	border: 1px solid;
	background: transparent;
	border-radius: 2px;
	transition: all 0.3s ease;

	${({ disabled }) => (disabled ? disabledStles : defaultStyles)}

	${SVG} {
		width: 100%;
		height: 100%;
		visibility: ${({ checked }) => (checked ? 'visible' : 'hidden')};
	}
`;

export default FakeCheckbox;
