import styled from "styled-components";

import GroupLessons from "../../assets/groupLessons.svg";
import LeftArrow from "../../assets/left_arrow.svg";
import RightArrow from "../../assets/right_arrow.svg";
import DoctorBg from "../../assets/doctor-bg.png";
import DoctorBgSmall from "../../assets/doctor-bg-small.png";
import Doctor from "../../assets/doctor.png";
import { Form } from "../../components/Form/Form";
import { CarouselSection } from "./CarouselSection/CarouselSection";
import { MainTitle } from "../../components/MainTitle/MainTitle";

import S from "../../assets/S.svg";
import A from "../../assets/A.svg";
import { SubTitle } from "../../components/SubTitle/SubTitle";

export const Main = () => {
  return (
    <MainStyle>
      <Container>
        <div style={{ marginTop: 60 }} className="relative">
          <MainTitle text="Наши игры" />
          <CarouselSection />
          <ImgR src={RightArrow} />
          <ImgS className="asideButton" src={S} />
        </div>
        <Info>
          <TextInfo>Мы делаем игры на функциональную грамотность</TextInfo>
          <BackgrundBlock src={GroupLessons} />
          {/* <ImgDoctor src={Doctor} alt="Doctor" /> */}
          <ImgL src={LeftArrow} />
          <ImgA className="asideButton" src={A} />
        </Info>
        <div>
          <SubTitle text="Задавай вопросы и делись идеями" />
          <Form text="У тебя есть идеи или вопросы? Напиши нам!" />
        </div>
      </Container>
    </MainStyle>
  );
};

const MainStyle = styled.div({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  width: "100%",
});

const BackgrundBlock = styled.img`
  width: 50%;
  /* background-image: url("${GroupLessons}");

  background-repeat: no-repeat;
  width: 50%;
  height: 100%;
  background-position: right; */

  /* @media only screen and (max-width: 991px) {
    background-image: url("${DoctorBg}");
  }

  @media only screen and (max-width: 768px) {
    background-image: url("${DoctorBgSmall}");
    background-size: cover;
    background-position: top;
    border-radius: 20px;
  } */

  @media only screen and (max-width: 768px) {
    height: 180px;
    width: 100%;
  }
`;

const ImgS = styled.img({
  position: "absolute",
  right: "-46px",
  bottom: "-51px",

  "@media(max-width: 1340px)": {
    right: "-10px",
    bottom: "-23px",
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

const ImgL = styled.img({
  position: "absolute",
  right: "-172px",
  top: "183px",

  "@media(max-width: 1580px)": {
    display: "none",
  },
});

const ImgR = styled.img({
  position: "absolute",
  left: "-174px",
  bottom: "-218px",

  "@media(max-width: 1580px)": {
    display: "none",
  },
});

const Container = styled.div({
  width: "100%",
  maxWidth: "1224px",
  display: "flex",
  flexDirection: "column",
  gap: "60px",
  marginTop: "80px",

  "@media(max-width: 600px)": {
    gap: "30px",
  },
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
  width: "50%",
  fontWeight: "600",
  fontSize: "30px",
  maxWidth: "516px",
  marginLeft: "48px",
  marginRight: "48px",

  "@media(max-width: 768px)": {
    margin: 0,
    padding: 20,
    maxWidth: "none",
    width: "100%",
  },

  "@media(max-width: 491px)": {
    fontSize: 24,
  },
});
