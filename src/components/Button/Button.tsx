import styled from 'styled-components';

export const Button = ({
  width,
  text,
  withMargin,
}: {
  width: string;
  text: string;
  withMargin?: boolean;
}) => (
  <StyledButton withMargin={withMargin} width={width}>
    {text}
  </StyledButton>
);

const StyledButton = styled.button<{ width: string; withMargin?: boolean }>`
  background: linear-gradient(270deg, #ffa000 0%, #ff6f00 100%);
  box-shadow: 0px 5px 20px rgba(255, 159, 1, 0.36);
  border-radius: 20px;
  border: none;
  max-width: ${({ width }) => width};
  width: 100%;
  min-height: 50px;
  color: #ffffff;
  display: flex;
  align-items: center;
  font-size: 18px;
  justify-content: center;
  margin-top: ${({ withMargin }) => (withMargin ? '20px' : 0)};
`;
