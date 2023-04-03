import styled from "styled-components";
import { SubTitle } from "../../../components/SubTitle/SubTitle";

import Map from "../../../assets/map.png";
import Cat from "../../../assets/cat.png";
import Science from "../../../assets/science.png";
import House from "../../../assets/house.png";
import { Description } from "../../../components/Description/Description";

export const MiniBlock = () => {
  return (
    <>
      <SubTitle text="Что тебя ждет в игре" />
      <Wrapper>
        <GrayBlockMini>
          <Description
            text="Просторная карта, на которой можно весело провести время"
            fontSize={24}
          />
          <Img src={Map} />
        </GrayBlockMini>
        <GrayBlockMini>
          <Description
            text="Надежные друзья, которые помогут в решении задач"
            fontSize={24}
          />
          <Img src={Cat} />
        </GrayBlockMini>
        <GrayBlockMini>
          <Description
            text="Интересные задачи, которые предстоит решить"
            fontSize={24}
          />
          <Img src={Science} />
        </GrayBlockMini>
        <GrayBlockMini>
          <Description text="Бонусы и градострой" fontSize={24} />
          <Img src={House} />
        </GrayBlockMini>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "24px",
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
  height: "270px",

  "@media(max-width: 1301px)": {
    height: "408px",
    width: "340px",
    flexDirection: "column",
  },
});

const Img = styled.img({});
