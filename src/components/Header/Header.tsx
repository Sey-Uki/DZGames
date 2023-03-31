import { useState } from "react";
import styled from "styled-components";
import { Button } from "../Button";

export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <HeaderStyle>
      <Container>
        <Wrapper>
          <Logo>DZGames</Logo>
          <Line></Line>
          <Nav>
            <Li>Игры</Li>
            <Li>О нас</Li>
          </Nav>
        </Wrapper>
        <ButtonWrapper>
          <Button width="212px" text="Связаться с нами" />
        </ButtonWrapper>
        <div
          className={`menu-btn ${isOpenMenu ? "active" : ""}`}
          onClick={() => setIsOpenMenu(!isOpenMenu)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </Container>
      <div className={`menu ${isOpenMenu ? "active" : ""}`}>
        <nav>
          <ul>
            <Li>Игры</Li>
            <Li>О нас</Li>
          </ul>
        </nav>
        <Button width="212px" text="Связаться с нами" />
      </div>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header({
  height: "80px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  marginBottom: "60px",

  "@media(max-width: 820px)": {
    height: "52px",
  },
});

const Container = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  maxWidth: "1224px",
  zIndex: "20",
  backgroundColor: "#ffffff",
  height: "100%",

  "@media(max-width: 820px)": {
    margin: "0 20px",
  },
});

const Wrapper = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "24px",
});

export const Logo = styled.div({
  color: "#000000",
  fontWeight: "700",
  fontSize: "32px",
});

const Line = styled.div({
  borderRight: "2px solid #000000",
  height: "24px",
  "@media(max-width: 820px)": {
    display: "none",
  },
});

const Nav = styled.ul({
  display: "flex",
  margin: "0",
  padding: "0",
  gap: "24px",

  "@media(max-width: 820px)": {
    display: "none",
  },
});

const Li = styled.li({
  color: "#0B0D22",
  listStyleType: "none",
});

const ButtonWrapper = styled.div({
  "@media(max-width: 820px)": {
    display: "none",
  },
});
