import styled, { css } from 'styled-components';
import { GUTTER_WIDTH, CONTAINER_MAX_WIDTH } from './constants';

const Container = styled.div`
	display: block;
	width: 100%;
	margin: 0 auto;
	padding: 0 ${GUTTER_WIDTH};
	max-width: ${({ fuild }) => (fuild ? '100%' : CONTAINER_MAX_WIDTH)};
`;

export default Container;
