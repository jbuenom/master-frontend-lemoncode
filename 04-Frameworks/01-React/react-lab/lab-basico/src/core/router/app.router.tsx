import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { MembersProvider } from "../providers";
import { LoginPage } from "../../components/login";
import { ListPage } from "../../components/github/list";
import { DetailPage } from "../../components/github/detail";
import { HomePage } from "../../components/home";
import { RickList } from "../../components/rick/rickList";
import React from "react";
import { RickDetail } from "../../components/rick/rickDetail";

export const AppRouter = () => {
  return (
    <Router>
      <MembersProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/rick" element={<RickList />} />
          <Route path="/rickdetail/:id" element={<RickDetail />} />
        </Routes>
      </MembersProvider>
    </Router>
  );
};
