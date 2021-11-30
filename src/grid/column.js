import styled, { css } from 'styled-components';
import { GUTTER_WIDTH, CONTAINER_MAX_WIDTH, COLUMNS_NUMBER } from './constants';

const getColWidth = (cols = COLUMNS_NUMBER) => (cols / COLUMNS_NUMBER) * 100;

const getColCss = ({ colXs = COLUMNS_NUMBER, colSm, colMd, colLg }) => {
	const xsmWidth = getColWidth(colXs);
	const smWidth = colSm ? getColWidth(colSm) : xsmWidth;
	const mdWidth = colMd ? getColWidth(colMd) : smWidth;
	const lgWidth = colLg ? getColWidth(colLg) : mdWidth;

	return css`
		flex: 0 0 ${xsmWidth}%;
		max-width: ${xsmWidth}%;

		@media (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
			flex: 0 0 ${lgWidth}%;
			max-width: ${lgWidth}%;
		}

		@media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
			flex: 0 0 ${mdWidth}%;
			max-width: ${mdWidth}%;
		}

		@media (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
			flex: 0 0 ${smWidth}%;
			max-width: ${smWidth}%;
		}
	`;
};

const Column = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 ${GUTTER_WIDTH};
	align-items: flex-start;
	${getColCss};
`;

export default Column;
