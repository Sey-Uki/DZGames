import styled from "styled-components";

import A from "../../assets/A.svg";
import { Form } from "../../components/Form/Form";
import { SubTitle } from "../../components/SubTitle/SubTitle";
import { GrayBlock } from "../../components/GrayBlock/GrayBlock";

export const AboutUs = () => {
  return (
    <AboutUsStyle>
      <Container>
        <GrayBlock
          title="О нас"
          isMainTitle={true}
          isImg={true}
          description="Разнообразный и богатый опыт говорит нам, что реализация
          намеченных плановых заданий однозначно определяет каждого
          участника как способного принимать собственные решения касаемо
          переосмысления внешнеэкономических политик. Противоположная точка
          зрения подразумевает, что независимые государства могут быть
          описаны максимально подробно. В рамках спецификации современных
          стандартов, интерактивные прототипы, вне зависимости от их уровня,
          должны быть ограничены исключительно образом мышления."
        />

        <div>
          <SubTitle text="Наши ценности" />
          <Wrapper>
            <GrayBlockMini>
              <BlockTitle>Открытость</BlockTitle>
              <BlockDescription>
                Разнообразный и богатый опыт говорит нам, что реализация
                намеченных плановых заданий однозначно
              </BlockDescription>
            </GrayBlockMini>
            <GrayBlockMini>
              <BlockTitle>Развитие</BlockTitle>
              <BlockDescription>
                Разнообразный и богатый опыт говорит нам, что реализация
                намеченных плановых заданий однозначно
              </BlockDescription>
            </GrayBlockMini>
            <GrayBlockMini>
              <BlockTitle>Свобода</BlockTitle>
              <BlockDescription>
                Разнообразный и богатый опыт говорит нам, что реализация
                намеченных плановых заданий однозначно
              </BlockDescription>
            </GrayBlockMini>
            <GrayBlockMini>
              <BlockTitle>Ответственность</BlockTitle>
              <BlockDescription>
                Разнообразный и богатый опыт говорит нам, что реализация
                намеченных плановых заданий однозначно
              </BlockDescription>
            </GrayBlockMini>
            <GrayBlockMini>
              <BlockTitle>Увлеченность</BlockTitle>
              <BlockDescription>
                Разнообразный и богатый опыт говорит нам, что реализация
                намеченных плановых заданий однозначно
              </BlockDescription>
            </GrayBlockMini>
          </Wrapper>
        </div>
        <RelativeBlock className="relative">
          <SubTitle text="Стань частью нашей команды" />
          <Form text="Если у тебя есть желание присоединиться к нам, то смело заполняй форму!" />
          <ImgA className="asideButton" src={A} />
        </RelativeBlock>
      </Container>
    </AboutUsStyle>
  );
};

const AboutUsStyle = styled.div({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  width: "100%",
  gap: "60px",
});

const Container = styled.div({
  width: "100%",
  maxWidth: "1224px",
  display: "flex",
  flexDirection: "column",
  gap: "30px",
  marginTop: "140px",

  "@media(max-width: 820px)": {
    marginTop: "72px",
  },

  "@media(max-width: 600px)": {
    gap: "0",
  },
});

const ImgA = styled.img({
  position: "absolute",
  bottom: "-47px",
  left: "-56px",

  "@media(max-width: 1340px)": {
    bottom: "-10px",
    left: "-20px",
  },
});

const GrayBlockMini = styled.div({
  width: "calc(33.3% - 26px)",
  padding: "24px 24px",
  backgroundColor: "#F7F7F8",
  borderRadius: "20px",
  boxShadow: "16px 16px 0px #FFCD4C",
  display: "flex",
  gap: "12px",
  flexDirection: "column",
  marginRight: 26,
  marginBottom: 30,

  "@media(max-width: 991px)": {
    width: "calc(50% - 26px)",
  },

  "@media(max-width: 650px)": {
    width: "100%",
  },
});

const Wrapper = styled.div({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
});

const BlockTitle = styled.div({
  fontSize: "30px",
  fontWeight: "600",
  color: "#0B0D22",

  "@media(max-width: 820px)": {
    fontSize: "24px",
  },
});

const BlockDescription = styled.div({
  color: "#0B0D22",
  fontSize: "18px",
});

const RelativeBlock = styled.div`
  @media only screen and (max-width: 600px) {
    margin-top: 40px;
  }
`;
