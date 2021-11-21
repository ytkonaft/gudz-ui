import styled from "styled-components";

export default styled.svg.attrs({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
})`
  stroke: ${({ theme }) => theme.colors.primary[400]};
  width: 24px;
  height: 24px;
`;
