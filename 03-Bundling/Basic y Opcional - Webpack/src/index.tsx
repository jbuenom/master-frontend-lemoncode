import classes from "./mystyles.scss";
import logo from "./content/logo_1.png";

import React from "react";
import { createRoot } from "react-dom/client";
import { FruitsComponent } from "./fruitsComponent";

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1 className={classes.resultBackground}>Hello World from React DOM</h1>
    <img src={logo} alt="logo lemoncode" />
    <FruitsComponent />
  </div>
);
