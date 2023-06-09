import styled from "styled-components";

type Props = {
  width: string;
  text: string;
  withMargin?: boolean;
  handleClick?: () => void;
  type?: "submit" | "button" | "reset";
  disabled?: boolean;
};

export const Button = ({
  width,
  text,
  withMargin,
  handleClick,
  type,
  disabled = false,
}: Props) => (
  <StyledButton
    type={type}
    onClick={handleClick}
    withMargin={withMargin}
    width={width}
    disabled={disabled}
  >
    {text}
  </StyledButton>
);

const StyledButton = styled.button<{ width: string; withMargin?: boolean }>`
  background: linear-gradient(-270deg, #ff6f00, #ffa000 25%, #ff6f00);
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
  margin-top: ${({ withMargin }) => (withMargin ? "20px" : 0)};
  transition: background 2s;
  background-size: 400%;

  &:hover {
    animation: gradient-animation 4s ease-in-out infinite;
  }

  @keyframes gradient-animation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  &:active {
    background: #ff7001;
    transition: none;
  }

  &:disabled {
    background: #efefef;
    animation: none;
    transition: none;
    color: #bbbbbb;
    box-shadow: none;
  }
`;
