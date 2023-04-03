import styled from "styled-components";
import S from "../../../assets/S.svg";
import LeftArrow from "../../../assets/left_arrow.svg";
import { SubTitle } from "../../../components/SubTitle/SubTitle";
import { Description } from "../../../components/Description/Description";

export const Info = () => {
  return (
    <>
      <SubTitle text="Методическая информация" />
      <Description
        text="
        Wake: Tales from the Aqualab нацелен на научные практики NGSS, связанные
        с экспериментами, моделированием и аргументацией. Инструменты, которые
        учащиеся будут использовать для изучения экосистем и решения задач в
        игре, включают:"
      />

      <Implements>
        <ImplementBlock>
          <ImplementsTitle>Инструменты аргументации:</ImplementsTitle>
          <WhiteBlock>
            <ImplementUl>
              <ImplementLi>
                Утверждение, доказательства, структура рассуждений. Подкрепляйте
                аргументы данными, собранными в результате наблюдений,
                экспериментов и моделирования.
              </ImplementLi>
              <ImplementLi>
                Резервуар наблюдения для сбора информации о взаимодействии
                организмов.
              </ImplementLi>
              <ImplementLi>
                Утверждение, доказательства, структура рассуждений. Подкрепляйте
                аргументы данными, собранными в результате наблюдений,
                экспериментов и моделирования.
              </ImplementLi>
              <ImplementLi>
                Резервуар наблюдения для сбора информации о взаимодействии
                организмов.
              </ImplementLi>
            </ImplementUl>
          </WhiteBlock>
        </ImplementBlock>
        <ImplementBlock>
          <ImplementsTitle>Инструменты аргументации:</ImplementsTitle>
          <WhiteBlock>
            <ImplementUl>
              <ImplementLi>
                Утверждение, доказательства, структура рассуждений. Подкрепляйте
                аргументы данными, собранными в результате наблюдений,
                экспериментов и моделирования.
              </ImplementLi>
              <ImplementLi>
                Резервуар наблюдения для сбора информации о взаимодействии
                организмов.
              </ImplementLi>
              <ImplementLi>
                Утверждение, доказательства, структура рассуждений. Подкрепляйте
                аргументы данными, собранными в результате наблюдений,
                экспериментов и моделирования.
              </ImplementLi>
              <ImplementLi>
                Резервуар наблюдения для сбора информации о взаимодействии
                организмов.
              </ImplementLi>
            </ImplementUl>
          </WhiteBlock>
        </ImplementBlock>
        <ImplementBlock>
          <ImplementsTitle>Инструменты аргументации:</ImplementsTitle>
          <WhiteBlock>
            <ImplementUl>
              <ImplementLi>
                Утверждение, доказательства, структура рассуждений. Подкрепляйте
                аргументы данными, собранными в результате наблюдений,
                экспериментов и моделирования.
              </ImplementLi>
              <ImplementLi>
                Резервуар наблюдения для сбора информации о взаимодействии
                организмов.
              </ImplementLi>
              <ImplementLi>
                Утверждение, доказательства, структура рассуждений. Подкрепляйте
                аргументы данными, собранными в результате наблюдений,
                экспериментов и моделирования.
              </ImplementLi>
              <ImplementLi>
                Резервуар наблюдения для сбора информации о взаимодействии
                организмов.
              </ImplementLi>
            </ImplementUl>
          </WhiteBlock>
        </ImplementBlock>
        <ImgS className="asideButton" src={S} />
        <ImgLeft src={LeftArrow} />
      </Implements>
    </>
  );
};

const Implements = styled.div({
  position: "relative",
  padding: "48px 60px",
  background: "#F7F7F8",
  borderRadius: "20px",

  "@media(max-width: 700px)": {
    padding: "12px 8px 24px 8px",
  },
});

const ImplementBlock = styled.div({
  ":not(:last-child)": {
    marginBottom: "48px",
  },

  "@media(max-width: 700px)": {
    ":not(:last-child)": {
      marginBottom: "24px",
    },
  },
});

const ImplementUl = styled.ul({
  gap: "24px",
  display: "flex",
  flexDirection: "column",
  listStyle: "none",
  margin: "0",
});

const ImplementLi = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  font-size: 30px;
  &::before {
    content: "";
    background: #ffa000;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-right: 16px;
    position: absolute;
    left: -40px;
  }

  @media only screen and (max-width: 820px) {
    font-size: 24px;
  }

  @media (max-width: 700px) {
    align-items: flex-start;
  }
`;

const ImplementsTitle = styled.div({
  color: "#0B0D22",
  marginBottom: "24px",
  fontSize: "30px",
  fontWeight: "600",

  "@media(max-width: 820px)": {
    fontSize: "24px",
  },

  "@media(max-width: 700px)": {
    marginBottom: "12px",
  },
});

const WhiteBlock = styled.div({
  background: "#FFFFFF",
  width: "100%",
  maxWidth: "1104px",
  padding: "42px",
  borderRadius: "16px",

  "@media(max-width: 700px)": {
    padding: "8px",
  },
});

const ImgS = styled.img({
  position: "absolute",
  right: "-46px",
  top: "-51px",

  "@media(max-width: 1340px)": {
    top: "-20px",
    right: "-18px",
  },
});

const ImgLeft = styled.img({
  position: "absolute",
  right: "-172px",
  bottom: "-295px",

  "@media(max-width: 1580px)": {
    display: "none",
  },
});
