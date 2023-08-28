import React from "react";
import { Cart } from "../components/cart.component";
import { CartLayout } from "../layouts/cart.layout";

export const CartScene: React.FC = () => {
  return (
    <CartLayout>
      <Cart />
    </CartLayout>
  );
};
