import styled from "styled-components";

import Captain from "../../../assets/captain.png";
import CatQuery from "../../../assets/catQuery.png";
import Captain760 from "../../../assets/captain760.png";
import Captain320 from "../../../assets/captain320.png";
import CatQuery760 from "../../../assets/catQuery760.png";

export const Query = () => {
  return (
    <QueryStyle>
      <Interview>
        <InterviewTitle>Понравилась ли тебе игра?</InterviewTitle>
        <InterviewBtns>
          <InterviewBtn>Да</InterviewBtn>
          <InterviewBtn>Нет</InterviewBtn>
        </InterviewBtns>
      </Interview>
      <Image>
        <ImgCaptain src={Captain} />
        <ImgCatQuery src={CatQuery} />
        <ImgCaptain760 src={Captain760} />
        <ImgCatQuery760 src={CatQuery760} />
        <ImgCaptain320 src={Captain320} />
      </Image>
    </QueryStyle>
  );
};

const QueryStyle = styled.div({
  background: "#FFCA28",
  width: "100%",
  height: "218px",
  borderRadius: "20px",
  overflow: "hidden",
  position: "relative",

  "@media(max-width: 685px)": {
    height: "474px",
  },
});

const Interview = styled.div({
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
  top: "50%",
  marginTop: "-65px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "600px",
  width: "100%",

  "@media(max-width: 685px)": {
    top: "0",
    marginTop: "24px",
  },
});

const InterviewTitle = styled.div({
  fontSize: "40px",
  fontWeight: "600",
  marginBottom: "32px",
  textAlign: "center",

  "@media(max-width: 820px)": {
    fontSize: "32px",
  },
});

const InterviewBtns = styled.div({
  display: "flex",
  width: "100%",
  gap: "24px",

  "@media(max-width: 685px)": {
    gap: "12px",
    flexDirection: "column",
    alignItems: "center",
  },
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

const ImgCaptain = styled.img({
  "@media(max-width: 1041px)": {
    display: "none",
  },
});

const ImgCatQuery = styled.img({
  "@media(max-width: 1041px)": {
    display: "none",
  },
});

const ImgCaptain760 = styled.img({
  display: "none",

  "@media(max-width: 1041px)": {
    display: "block",
  },

  "@media(max-width: 685px)": {
    display: "none",
  },
});

const ImgCatQuery760 = styled.img({
  display: "none",

  "@media(max-width: 1041px)": {
    display: "block",
  },

  "@media(max-width: 685px)": {
    display: "none",
  },
});

const ImgCaptain320 = styled.img({
  display: "none",

  "@media(max-width: 685px)": {
    display: "block",
  },
});

const Image = styled.div({
  display: "flex",
  justifyContent: "space-between",

  "@media(max-width: 685px)": {
    justifyContent: "center",
    alignItems: "flex-end",
    height: "100%",
  },
});
