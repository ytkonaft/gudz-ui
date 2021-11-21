import styled from "styled-components";
import categoryStyles from "./category-styles";
import sizeStyles from "./size-styles";
import SVG from "../../icon/svg";

const Button = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  border-radius: ${({ theme, size }) => theme.border.radius[size]}px;
  transition: all 0.3s ease;
  ${SVG} {
    transition: all 0.3s ease;
  }

  ${({ category }) => categoryStyles[category]};
  ${({ size }) => sizeStyles[size]};
`;

export default Button;
