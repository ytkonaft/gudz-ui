import { css } from "styled-components";
import noSpaceDecorator from "../helpers/no-space-decorator";

const xxLarge = css`
  font-weight: 600;
  font-size: 40px;
  line-height: 52px;
  margin-bottom: ${noSpaceDecorator(24)}px;
`;

const xLarge = css`
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  margin-bottom: ${noSpaceDecorator(24)}px;
`;

const large = css`
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  margin-bottom: ${noSpaceDecorator(20)}px;
`;

const medium = css`
  font-weight: 500;
  font-size: 28px;
  line-height: 36px;
  margin-bottom: ${noSpaceDecorator(16)}px;
`;

const small = css`
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  margin-bottom: ${noSpaceDecorator(12)}px;
`;

const xSmall = css`
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  margin-bottom: ${noSpaceDecorator(12)}px;
`;

const headingSizes = {
  xxLarge,
  xLarge,
  large,
  medium,
  small,
  xSmall,
};

export default headingSizes;
