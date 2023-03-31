import styled from 'styled-components';

export const Button = ({ width, text }: { width: string; text: string }) =>
  <StyledButton width={width}>{text}</StyledButton>;

const StyledButton = styled.button<{ width: string}>`
  background: linear-gradient(270deg, #FFA000 0%, #FF6F00 100%);
  box-shadow: 0px 5px 20px rgba(255, 159, 1, 0.36);
  border-radius: 20px;
  border: none;
  max-width: ${({ width }) => width};
  width: 100%;
  height: 50px;
  color: #ffffff;
  display: flex;
  align-items: center;
  font-size: 18px;
  justify-content: center;
`;
