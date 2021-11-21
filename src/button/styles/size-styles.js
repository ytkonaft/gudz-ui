import { css } from "styled-components";
import SVG from "../../icon/svg";

export const largeStyles = css`
  height: 56px;
  padding: 0 24px;
  ${SVG} {
    width: 24px;
    height: 24px;
    margin-right: 8px;
    margin-bottom: 4px;
  }
`;

export const mediumStyles = css`
  height: 48px;
  padding: 0 12px;

  ${SVG} {
    width: 20px;
    height: 20px;
    margin-right: 6px;
    margin-bottom: 2px;
  }
`;

export const smallStyles = css`
  height: 36px;
  padding: 0 8px;

  ${SVG} {
    width: 20px;
    height: 20px;
    margin-right: 4px;
    margin-bottom: 2px;
  }
`;

const sizeStyles = {
  large: largeStyles,
  medium: mediumStyles,
  small: smallStyles,
};

export default sizeStyles;
