import styled from "styled-components";

export const Description = ({
  text,
  fontSize,
  fontSize820,
}: {
  text: string;
  fontSize?: number;
  fontSize820?: number;
}) => {
  return <DescriptionStyle fontSize={fontSize} fontSize820={fontSize820}>{text}</DescriptionStyle>;
};

const DescriptionStyle = styled.div<{ fontSize?: number, fontSize820?: number }>`
  color: #0B0D22;
  font-size: ${({ fontSize }) => (fontSize && `${fontSize}px`) || "30px"};

  @media (max-width: 820px) {
    font-size: ${({ fontSize820 }) => (fontSize820 && `${fontSize820}px`) || "18px"};
  }
`;
