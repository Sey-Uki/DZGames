import { Navigate, Route, Routes } from "react-router-dom";
import { Main } from "./components/Main/Main";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { AboutGame } from "./components/AboutGame/AboutGame";
import { Game } from "./components/Game/Game";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="about-game" element={<AboutGame />} />
      <Route path="/game" element={<Game />} />
    </Routes>
  );
};
