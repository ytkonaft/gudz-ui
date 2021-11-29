import styled from 'styled-components';
import { GUTTER_WIDTH } from './constants';

const Row = styled.div`
	display: flex;
	margin: 0 -${GUTTER_WIDTH};
	flex-wrap: wrap;
	box-sizing: border-box;
`;

export default Row;
