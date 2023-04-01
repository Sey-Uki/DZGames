import styled from "styled-components";
import A from "../../assets/A.svg";
import GameImg from "../../assets/game.png";
import { Form } from "../Form/Form";
import { useNavigate } from "react-router-dom";

export const Game = () => {

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/about-game');
  }

  return (
    <GameStyle>
      <Container>
        <Games>
          <Title>Наши игры</Title>
          <Cards>
            <Card onClick={handleNavigation}>
              <Img src={GameImg} />
              <CardText>
                <CardTitle>Юнга Мур и большая стройка котов-пиратов</CardTitle>
                <CardDescription>
                  Описание игры Описание игры Описание игры Описание игры
                </CardDescription>
              </CardText>
            </Card>
            <Card onClick={handleNavigation}>
              <Img src={GameImg} />
              <CardText>
                <CardTitle>Юнга Мур и большая стройка котов-пиратов</CardTitle>
                <CardDescription>
                  Описание игры Описание игры Описание игры Описание игры
                </CardDescription>
              </CardText>
            </Card>
            <Card onClick={handleNavigation}>
              <Img src={GameImg} />
              <CardText>
                <CardTitle>Юнга Мур и большая стройка котов-пиратов</CardTitle>
                <CardDescription>
                  Описание игры Описание игры Описание игры Описание игры
                </CardDescription>
              </CardText>
            </Card>
          </Cards>
        </Games>

        <div className="relative ">
          <Form text="У тебя есть идеи или вопросы? Напиши нам!" />
          <ImgA src={A} />
        </div>
      </Container>
    </GameStyle>
  );
};

const GameStyle = styled.div({
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
  gap: "76px",

  "@media(max-width: 1300px)": {
    padding: "0 24px",
  },
});

const Games = styled.div({
  marginBottom: "0px",
});

const Img = styled.img({
  width: "100%",
});

const ImgA = styled.img({
  position: "absolute",
  bottom: "-47px",
  left: "-56px",
});

const Cards = styled.div({
  display: "flex",
  gap: "24px",
  // flexWrap: "wrap",

  "@media(max-width: 1024px)": {
    flexWrap: "wrap",
  },

  "@media(max-width: 856px)": {
    justifyContent: "center",
  },
});

const Card = styled.div({
  ":hover": {
    boxShadow: "16px 16px 0px #FFCD4C",
    borderRadius: "20px",
    transition: "0.5s",
  }
});

const CardText = styled.div({
  width: "100%",
  maxWidth: "392px",
  maxHeight: "198px",
  background: "#F7F7F8",
  borderRadius: "0px 0px 20px 20px",
  padding: "24px",

  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",  
  gap: "12px"
});

const CardTitle = styled.div({
  fontSize: "30px",
  fontWeight: "600",
  maxWidth: "296px"
});

const CardDescription = styled.div({
  fontSize: "18px",
  maxWidth: "296px"
});

const Title = styled.div({
  fontSize: "40px",
  fontWeight: "600",
  color: "#0B0D22",
  marginBottom: "24px",
});
