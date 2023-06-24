import { createRoot } from "react-dom/client";
import { HelloComponent } from "./hello";
import "bootstrap/dist/css/bootstrap.min.css";
import "./mystyles.scss";
import { CardComponent } from "./card";

const root = createRoot(document.getElementById("root"));

root.render(
  <>
    <HelloComponent />
    <CardComponent />
  </>
);
