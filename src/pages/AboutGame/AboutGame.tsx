import styled from "styled-components";

import { Form } from "../../components/Form/Form";
import { Banner } from "./Banner/Banner";
import { Info } from "./Info/Info";
import { Query } from "./Query/Query";
import { GrayBlock } from "../../components/GrayBlock/GrayBlock";
import { MiniBlock } from "./MiniBlock/MiniBlock";
import { Learn } from "./Learn/Learn";
import { SubTitle } from "../../components/SubTitle/SubTitle";

export const AboutGame = () => {
  return (
    <AboutGameStyle>
      <Container>
        <Banner />
        <MiniBlock />
        <Learn />
        <Info />
        <GrayBlock
          title="Об игре"
          description="Разнообразный и богатый опыт говорит нам, что реализация
          намеченных плановых заданий однозначно определяет каждого
          участника как способного принимать собственные решения касаемо
          переосмысления внешнеэкономических политик. Противоположная точка
          зрения подразумевает, что независимые государства могут быть
          описаны максимально подробно. В рамках спецификации современных
          стандартов, интерактивные прототипы, вне зависимости от их уровня,
          должны быть ограничены исключительно образом мышления."
        />
        <Query />

        <div>
          <SubTitle text="Стань частью нашей команды" />
          <Form
            withMessage={false}
            submitText="Подписаться"
            text="Хочешь получать актуальные новости о наших играх? Тогда смело подписывайся на рассылку!"
          />
        </div>
      </Container>
    </AboutGameStyle>
  );
};

const AboutGameStyle = styled.div({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  width: "100%",
  gap: "25px",
});

const Container = styled.div({
  width: "100%",
  maxWidth: "1224px",
  display: "flex",
  flexDirection: "column",
  gap: "25px",
});
