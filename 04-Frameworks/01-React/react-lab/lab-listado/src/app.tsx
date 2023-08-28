import React from "react";
import { AppRouter } from "./core/router/app.router";
import { CartScene } from "./scenes/cart.scene";
import { PetProvider } from "./core/providers/pet.provider";

export const App = () => {
  return (
    <>
      <PetProvider>
        <AppRouter />
        <CartScene />
      </PetProvider>
    </>
  );
};
