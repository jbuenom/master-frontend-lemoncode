import React, { PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";

interface Props extends PropsWithChildren {}

export const AppLayout: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <div className="layout-container">
      <nav className="nav-container">
        <ul>
          <li>
            <NavLink to={"/kitties"}>Kitties</NavLink>
          </li>
          <li>
            <NavLink to={"/puppies"}>Puppies</NavLink>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
};
