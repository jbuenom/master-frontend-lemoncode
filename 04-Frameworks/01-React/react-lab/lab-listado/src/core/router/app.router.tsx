import React from "react";
import { Navigate, Route, BrowserRouter, Routes } from "react-router-dom";
import { KittiesScene } from "../../scenes/kitties.scene";
import { PuppiesScene } from "../../scenes/puppies.scene";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={"/kitties"} />} />
        <Route path="/kitties" element={<KittiesScene />} />
        <Route path="/puppies" element={<PuppiesScene />} />
      </Routes>
    </BrowserRouter>
  );
};
