import { css } from 'styled-components';
import noSpaceDecorator from '../helpers/no-space-decorator';

const large = css`
	font-size: 96px;
	line-height: 112px;
	font-weight: 800;
	margin-bottom: ${noSpaceDecorator(64)}px;
`;

const medium = css`
	font-size: 52px;
	line-height: 64px;
	font-weight: 700;
	margin-bottom: ${noSpaceDecorator(32)}px;
`;

const small = css`
	font-size: 44px;
	line-height: 52px;
	font-weight: 700;
	margin-bottom: ${noSpaceDecorator(24)}px;
`;

const xSmall = css`
	font-size: 36px;
	line-height: 44px;
	font-weight: 700;
	margin-bottom: ${noSpaceDecorator(20)}px;
`;

const displayTextSizes = {
	large,
	medium,
	small,
	xSmall,
};

export default displayTextSizes;
