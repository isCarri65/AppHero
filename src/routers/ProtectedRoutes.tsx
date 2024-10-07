import { Route, Routes } from "react-router-dom";
import { Home } from "../components/screen/home/Home";
import { Header } from "../components/ui/Header/Header";
import { Search } from "../components/screen/Search/Search";
import { DcHeroes } from "../components/screen/DCHeroes/DcHeroes";
import { MarvelHeroes } from "../components/screen/MarvelHeroes/MarvelHeroes";
import { HeroPage } from "../components/screen/HeroPage/HeroPage";

export const ProtectedRoutes = () => {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/dcheroes" element={<DcHeroes />} />
      <Route path="/marvelheroes" element={<MarvelHeroes />} />
      <Route path="/hero/:id" element={<HeroPage />} />

    </Routes>
    </>
  );
};
