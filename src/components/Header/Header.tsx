import { useState } from "react";
import styled from "styled-components";
import { Button } from "../Button/Button";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <HeaderStyle>
      <Container>
        <Wrapper>
          <Logo>
            <NavLink to="/">DZGames</NavLink>
          </Logo>
          <Line></Line>
          <Nav>
            <Li>
              <NavLink to="/game">Игры</NavLink>
            </Li>
            <Li>
              <NavLink to="/about-us">О нас</NavLink>
            </Li>
          </Nav>
        </Wrapper>
        <ButtonWrapper>
          <Button width="100%" text="Связаться с нами" />
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
            <Li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/game"
              >
                Игры
              </NavLink>
            </Li>
            <Li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/about-us"
              >
                О нас
              </NavLink>
            </Li>
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
  marginBottom: "40px",

  position: "fixed",
  zIndex: "200",
  marginLeft: "-20px",
  paddingLeft: "20px",
  paddingRight: "20px",

  "@media(max-width: 820px)": {
    height: "52px",
    paddingLeft: "0",
    paddingRight: "0",
  },
});

const Container = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  maxWidth: "1224px",
  zIndex: 500,
  backgroundColor: "#ffffff",
  height: "100%",


  "@media(max-width: 820px)": {
    paddingLeft: "20px",
    paddingRight: "20px",
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
  fontFamily: "Jost",
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

const Li = styled.li`
  color: #0b0d22;
  list-style-type: none;

  & a.active {
    border-bottom: 2px solid #ffa000;
  }
`;

const ButtonWrapper = styled.div({
  width: 212,
  "@media(max-width: 820px)": {
    display: "none",
  },
});
