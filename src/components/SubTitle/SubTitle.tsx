import styled from 'styled-components';

export const SubTitle = ({
  text,
  fontSize,
}: {
  text: string;
  fontSize?: number;
}) => {
  return <StyledTitle fontSize={fontSize}>{text}</StyledTitle>;
};

const StyledTitle = styled.h2<{ fontSize?: number }>`
  font-size: ${({ fontSize }) => (fontSize && `${fontSize}px`) || '40px'};
  font-weight: 600;
  color: #0b0d22;

  @media only screen and (max-width: 768px) {
    font-size: 32px;
  }
`;
