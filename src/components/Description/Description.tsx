import styled from "styled-components";

export const Description = ({
  text,
  fontSize,
}: {
  text: string;
  fontSize?: number;
}) => {
  return <DescriptionStyle fontSize={fontSize}>{text}</DescriptionStyle>;
};

const DescriptionStyle = styled.div<{ fontSize?: number }>`
  color: #0B0D22;
  font-size: 30px;

  @media (max-width: 820px) {
    font-size: ${({ fontSize }) => (fontSize && `${fontSize}px`) || "18px"};
  }
`;
