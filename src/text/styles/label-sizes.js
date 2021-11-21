import { css } from "styled-components";
import noSpaceDecorator from "../helpers/no-space-decorator";

const large = css`
  font-size: 18px;
  line-height: 24px;
  margin-bottom: ${noSpaceDecorator(12)}px;
`;

const medium = css`
  font-size: 16px;
  line-height: 20px;
  margin-bottom: ${noSpaceDecorator(12)}px;
`;

const small = css`
  font-size: 14px;
  line-height: 20px;
  margin-bottom: ${noSpaceDecorator(8)}px;
`;

const xSmall = css`
  font-size: 12px;
  line-height: 20px;
  margin-bottom: ${noSpaceDecorator(8)}px;
`;

const paragraphSizes = {
  large,
  medium,
  small,
  xSmall,
};

export default paragraphSizes;
