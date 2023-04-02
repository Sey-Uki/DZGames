import styled from 'styled-components';

export const MainTitle = ({ text, noMargin }: { text: string, noMargin?: boolean }) => {
  return (
    <StyledTitle noMargin={noMargin}>{text}</StyledTitle>
  )
}

const StyledTitle = styled.h1<{noMargin?: boolean}>`
  font-size: 40px;
  font-weight: 600;
  color: #0B0D22;
  margin-top: 0;
  margin: ${({ noMargin }) => noMargin && 0};

  @media only screen and (max-width: 768px) {
    font-size: 32px;
  }
`