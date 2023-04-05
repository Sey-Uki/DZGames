import styled from "styled-components";

export const MainTitle = ({
  text,
  noMargin,
}: {
  text: string;
  noMargin?: boolean;
}) => {
  return <StyledTitle noMargin={noMargin}>{text}</StyledTitle>;
};

const StyledTitle = styled.h1<{ noMargin?: boolean }>`
  font-size: 40px;
  font-weight: 600;
  color: #0b0d22;
  margin-top: 0;
  margin-bottom: ${({ noMargin }) => noMargin ? 0 : '24px'};

  @media only screen and (max-width: 768px) {
    font-size: 32px;
  }

  @media only screen and (max-width: 600px) {
    margin-top: 0px;
    margin-bottom: 12px;
  }
`;
