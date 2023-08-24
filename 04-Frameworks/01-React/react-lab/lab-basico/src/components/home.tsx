import React from "react";
import { Link } from "react-router-dom";
import githubLogo from "../../assets/logos/github.png";
import rickLogo from "../../assets/logos/rick.png";

export const HomePage: React.FC = () => {
  return (
    <div className="container-home">
      <Link className="link" to={"/list"}>
        <img src={githubLogo} alt="github logo" />
        <div>Github Members List</div>
      </Link>
      <Link className="link" to={"/rick"}>
        <img src={rickLogo} alt="rick logo" />
        <div>Rick & Morty List</div>
      </Link>
    </div>
  );
};
