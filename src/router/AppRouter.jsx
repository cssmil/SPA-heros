import { Navigate, Routes, Route } from "react-router-dom";
import { DcPage, MarvelPage, HerosRouter } from "../heroes";
import { LoginPage } from "../auth";
import { Navbar } from "../ui";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={ <LoginPage /> } />
        <Route path="/*" element={ <HerosRouter />} />
      </Routes>
    </>
  );
};
