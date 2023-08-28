import React from "react";
import { AppLayout } from "../layouts/app.layout";
import { Kitties } from "../components/kitties.component";

export const KittiesScene: React.FC = (props) => {
  return (
    <AppLayout>
      <Kitties />
    </AppLayout>
  );
};
