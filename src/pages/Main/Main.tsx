import styled from "styled-components";

import GroupLessons from "../../assets/groupLessons.svg";
import LeftArrow from "../../assets/left_arrow.svg";
import DoctorBg from "../../assets/doctor-bg.png";
import DoctorBgSmall from "../../assets/doctor-bg-small.png";
import Doctor from "../../assets/doctor.png";
import { Form } from "../../components/Form/Form";
import { CarouselSection } from "./CarouselSection/CarouselSection";
import { MainTitle } from "../../components/MainTitle/MainTitle";

export const Main = () => {
  return (
    <MainStyle>
      <Container>
        {/* <Wrapper>
        </Wrapper> */}

        <MainTitle text="Наши игры" noMargin />
        <CarouselSection />
        <Info>
          <TextInfo>Мы делаем игры на функциональную грамотность</TextInfo>
          <BackgrundBlock />
          <ImgDoctor src={Doctor} alt="Doctor" />
          <Img src={LeftArrow} />
        </Info>
          <Form text="У тебя есть идеи или вопросы? Напиши нам!" />
      </Container>
    </MainStyle>
  );
};

const MainStyle = styled.div({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  width: "100%",
  // position: "relative",
  gap: "60px",
});

const BackgrundBlock = styled.div`
  background-image: url('${GroupLessons}');

  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  background-position: right;

  @media only screen and (max-width: 991px) {
    background-image: url('${DoctorBg}');
  }

  @media only screen and (max-width: 768px) {
    background-image: url('${DoctorBgSmall}');
    background-size: cover;
    background-position: top;
    border-radius: 20px;
  }
`;

const ImgDoctor = styled.img`
  position: absolute;
  right: 20px;
  bottom: 0;
  display: none;

  @media only screen and (max-width: 991px) {
    display: block;
  }

  @media only screen and (max-width: 768px) {
    width: 200px;
    right: auto;
  }

`;

const Img = styled.img({
  position: "absolute",
  right: "-172px",
  top: "183px",

  "@media(max-width: 1580px)": {
    display: "none",
  },

});

const Container = styled.div({
  // backgroundColor: "#F7F7F8",
  width: "100%",
  maxWidth: "1224px",
  // height: "442px",
  // borderRadius: "20px",
  display: "flex",
  flexDirection: "column",
  // justifyContent: "space-around",
  gap: "40px"
});

const Info = styled.div({
  backgroundColor: "#F7F7F8",
  borderRadius: "20px",
  height: "246px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  position: "relative",

  "@media(max-width: 768px)": {
    flexDirection: "column",
    height: "316px",
  },
});

const TextInfo = styled.div({
  fontWeight: "600",
  fontSize: "30px",
  maxWidth: "516px",
  marginLeft: "48px",

  "@media(max-width: 768px)": {
    margin: 0,
    padding: 20,
    maxWidth: "none"
  },

  "@media(max-width: 491px)": {
    fontSize: 24,
  },
});

const Wrapper = styled.div({
  display: "flex",
  justifyContent: "space-between",
  maxWidth: "1128px",
  width: "100%",
  margin: "0 auto",
});
