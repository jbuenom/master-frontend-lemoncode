import React from "react";
import { AppLayout } from "../layouts/app.layout";
import { Puppies } from "../components/puppies.component";

export const PuppiesScene: React.FC = (props) => {
  return (
    <AppLayout>
      <Puppies />
    </AppLayout>
  );
};
