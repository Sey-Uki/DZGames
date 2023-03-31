import styled from "styled-components";

import GameBanner from "../../assets/gameBanner.png";
import GameBanner720 from "../../assets/gameBanner720.png";
import GameBanner320 from "../../assets/gameBanner320.png";
import S from "../../assets/S.svg";
import A from "../../assets/A.svg";
import { Form } from "../Form/Form";

import Map from "../../assets/map.png";
import Cat from "../../assets/cat.png";
import Science from "../../assets/science.png";
import House from "../../assets/house.png";

import BackgroundGame from "../../assets/backgroundGame.png";
import BackgroundGame760 from "../../assets/backgroundGame760.png";
import BackgroundGame320 from "../../assets/backgroundGame320.png";
import GG from "../../assets/GG.png";
import Captain from "../../assets/captain.png";
import CatQuery from "../../assets/cat-query.png";
import { Button } from "../Button";

export const AboutGame = () => {
  return (
    <AboutGameStyle>
      <Container>
        {/* <Banner>
          <ImgBanner src={GameBanner} />
          <ImgBanner720 src={GameBanner720} />
          <ImgBanner320 src={GameBanner320} />
          <BannerDescriptionBlock>
            <BannerTitle>Юнга Мур и большая стройка котов-пиратов</BannerTitle>
            <BannerDescription>
              Наше дело не так однозначно, как может показаться: семантический
              разбор внешних противодействий является качественно новой ступенью
              соответствующих условий активизации!
            </BannerDescription>
            <Button width="1020px" text="Скачать для Windows" />
          </BannerDescriptionBlock>
        </Banner> */}
         {/* <div>
          <Title>Что тебя ждет в игре</Title>
          <Wrapper>
            <GrayBlockMini>
              <BlockDescription>
                Просторная карта, на которой можно весело провести время
              </BlockDescription>
              <Img src={Map} />
            </GrayBlockMini>
            <GrayBlockMini>
              <BlockDescription>
                Надежные друзья, которые помогут в решении задач
              </BlockDescription>
              <Img src={Cat} />
            </GrayBlockMini>
            <GrayBlockMini>
              <BlockDescription>
                Интересные задачи, которые предстоит решить
              </BlockDescription>
              <Img src={Science} />
            </GrayBlockMini>
            <GrayBlockMini>
              <BlockDescription>Бонусы и градострой</BlockDescription>
              <Img src={House} />
            </GrayBlockMini>
          </Wrapper>
        </div> */}

        <div>
          <Title>Чему ты научишься</Title>
          <Learn>
            <LearnDescription>
              В игре ты потренируешься копить деньги и разумно их тратить,
              узнаешь, как правильно аргументировать выводы и затронешь азы
              строительства.
            </LearnDescription>
            {/* <ImgBackgroundGame src={BackgroundGame} /> */}
            <ImgBackgroundGame760 src={BackgroundGame760} />
            {/* <ImgBackgroundGame320 src={BackgroundGame320} /> */}
            <ImgGG src={GG} />
          </Learn>
        </div>

        {/* <Title>Методическая информация</Title>
        <Description>
          Wake: Tales from the Aqualab нацелен на научные практики NGSS,
          связанные с экспериментами, моделированием и аргументацией.
          Инструменты, которые учащиеся будут использовать для изучения
          экосистем и решения задач в игре, включают:
        </Description> */}

        {/* <Implements>
          <ImplementsTitle>Инструменты аргументации:</ImplementsTitle>
          <WhiteBlock>
            Утверждение, доказательства, структура рассуждений. Подкрепляйте
            аргументы данными, собранными в результате наблюдений, экспериментов
            и моделирования.
          </WhiteBlock>
          <ImplementsTitle>Инструменты аргументации:</ImplementsTitle>
          <WhiteBlock>
            Утверждение, доказательства, структура рассуждений. Подкрепляйте
            аргументы данными, собранными в результате наблюдений, экспериментов
            и моделирования.
          </WhiteBlock>
          <ImplementsTitle>Инструменты аргументации:</ImplementsTitle>
          <WhiteBlock>
            Утверждение, доказательства, структура рассуждений. Подкрепляйте
            аргументы данными, собранными в результате наблюдений, экспериментов
            и моделирования.
          </WhiteBlock>
        </Implements> */}

        {/* <div>
          <Title>Об игре</Title>
          <GrayBlock>
            <ImgS src={S} />
            <Description>
              Разнообразный и богатый опыт говорит нам, что реализация
              намеченных плановых заданий однозначно определяет каждого
              участника как способного принимать собственные решения касаемо
              переосмысления внешнеэкономических политик. Противоположная точка
              зрения подразумевает, что независимые государства могут быть
              описаны максимально подробно. В рамках спецификации современных
              стандартов, интерактивные прототипы, вне зависимости от их уровня,
              должны быть ограничены исключительно образом мышления.
            </Description>
            <Description>
              Разнообразный и богатый опыт говорит нам, что реализация
              намеченных плановых заданий однозначно определяет каждого
              участника как способного принимать собственные решения касаемо
              переосмысления внешнеэкономических политик. Противоположная точка
              зрения подразумевает, что независимые государства могут быть
              описаны максимально подробно. В рамках спецификации современных
              стандартов, интерактивные прототипы, вне зависимости от их уровня,
              должны быть ограничены исключительно образом мышления.
            </Description>
             <Img src={RightArrow} /> 
          </GrayBlock>
        </div> */}

        {/* <Query>
          <Image>
            <Img src={Captain} />
            <Img src={CatQuery} />
          </Image>
          <Interview>
            <InterviewTitle>Понравилась ли тебе игра?</InterviewTitle>
            <InterviewBtns>
              <InterviewBtn>Да</InterviewBtn>
              <InterviewBtn>Нет</InterviewBtn>
            </InterviewBtns>
          </Interview>
        </Query> */}

        {/* <div className="relative ">
          <Title>Стань частью нашей команды</Title>
          <Form text="Хочешь получать актуальные новости о наших играх? Тогда смело подписывайся на рассылку!" />
          <ImgA src={A} />
        </div>  */}
      </Container>
    </AboutGameStyle>
  );
};

const AboutGameStyle = styled.div({
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
  gap: "60px",

  "@media(max-width: 1300px)": {
    padding: "0 24px",
  },
});

const Implements = styled.div({
  padding: "48px 60px",
  background: "#F7F7F8",
  borderRadius: "20px",
});

const ImplementsTitle = styled.div({
  color: "#0B0D22",
  marginBottom: "24px",
  fontSize: "30px",
  fontWeight: "600",
});

const WhiteBlock = styled.div({
  background: "#FFFFFF",
  marginBottom: "48px",
  width: "100%",
  maxWidth: "1104px",
  padding: "42px",
  borderRadius: "16px",
});

const Img = styled.img({});

const ImgBanner = styled.img({
  width: "100%",

  "@media(max-width: 920px)": {
    display: "none",
  },
});

const ImgBanner720 = styled.img({
  width: "100%",
  display: "none",
  borderRadius: "20px",

  "@media(max-width: 920px)": {
    display: "block",
  },

  "@media(max-width: 520px)": {
    display: "none",
  },
});

const ImgBanner320 = styled.img({
  width: "100%",
  display: "none",
  borderRadius: "20px",

  "@media(max-width: 520px)": {
    display: "block",
  },
});

const ImgBackgroundGame = styled.img({

})

const ImgBackgroundGame760 = styled.img({
  
})

const ImgBackgroundGame320 = styled.img({
  
})

const Image = styled.div({
  display: "flex",
  justifyContent: "space-between",
});

const ImgGG = styled.img({
  position: "absolute",
  right: "36px",
  bottom: "0",
});

const ImgS = styled.img({
  position: "absolute",
  right: "-46px",
  top: "-51px",
  transform: "rotate(322deg)",
});

const ImgA = styled.img({
  position: "absolute",
  bottom: "-47px",
  left: "-56px",
});

const GrayBlock = styled.div({
  width: "100%",
  maxWidth: "1224px",
  padding: "48px 104px",
  backgroundColor: "#F7F7F8",
  borderRadius: "20px",
  display: "flex",
  gap: "12px",
  flexDirection: "column",
  position: "relative",
});

const GrayBlockMini = styled.div({
  width: "100%",
  maxWidth: "594px",
  padding: "24px 24px",
  backgroundColor: "#F7F7F8",
  borderRadius: "20px",
  boxShadow: "16px 16px 0px #FFCD4C",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const Wrapper = styled.div({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "24px",
});

const Title = styled.div({
  fontSize: "40px",
  fontWeight: "600",
  color: "#0B0D22",
  marginBottom: "24px",
});

const Description = styled.div({
  color: "#0B0D22",
  fontSize: "18px",
});

const BlockDescription = styled.div({
  color: "#0B0D22",
  fontSize: "30px",
});

const Learn = styled.div({
  background: "#F7F7F8",
  display: "flex",
  alignItems: "center",
  borderRadius: "20px",
  position: "relative",
});

const LearnDescription = styled.div({
  fontSize: "30px",
  color: "#0B0D22",
  margin: "48px",

  "@media(max-width: 1300px)": {
    marginLeft: "24px",
    marginRight: "0"
  },
});

const Query = styled.div({
  background: "#FFCA28",
  width: "100%",
  height: "218px",
  borderRadius: "20px",
  overflow: "hidden",
  position: "relative",
});

const Interview = styled.div({
  position: "absolute",
  top: "50%",
  left: "50%",
  marginLeft: "-300px",
  marginTop: "-64px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "600px",
});

const InterviewTitle = styled.div({
  fontSize: "40px",
  fontWeight: "600",
  marginBottom: "32px",
});

const InterviewBtns = styled.div({
  display: "flex",
  width: "100%",
  gap: "24px",
});

const InterviewBtn = styled.button({
  background: "#FFF3E8",
  border: "none",
  height: "50px",
  maxWidth: "288px",
  width: "100%",
  borderRadius: "24px",
  padding: "16px 30px",
  color: "#FFA000",
  fontSize: "18px",
  fontWeight: "600",
});

const Banner = styled.div({
  position: "relative",
});

const BannerDescriptionBlock = styled.div({
  background: "rgba(247, 247, 248, 0.66)",
  backdropFilter: "blur(12px)",
  borderRadius: "20px",
  height: "268px",
  position: "absolute",
  width: "100%",
  bottom: "0",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  padding: "48px 24px",

  "@media(max-width: 520px)": {
    height: "408px",
    // paddingBottom: "0",
    // paddingTop: "0",
  },
});

const BannerTitle = styled.div({
  fontSize: "30px",
  fontWeight: "600",
  marginBottom: "12px",
});

const BannerDescription = styled.div({
  fontSize: "18px",
  marginBottom: "32px",
  maxWidth: "1020px",
  textAlign: "center",
});
