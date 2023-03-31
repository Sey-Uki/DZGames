import styled from "styled-components";

export const Button = ({width, text}: {width: string, text: string}) => {
  const ButtonStyle = styled.button({
    background: "linear-gradient(270deg, #FFA000 0%, #FF6F00 100%)",
    boxShadow: "0px 5px 20px rgba(255, 159, 1, 0.36)",
    borderRadius: "20px",
    border: "none",
    maxWidth: width,
    width: "100%",
    height: "50px",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    fontSize: "18px",
    justifyContent: "center",
  });
  return <ButtonStyle>{text}</ButtonStyle>;
};


