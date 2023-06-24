import { FC } from "react";
import logoImg from "./content/logo_1.png";
export const HelloComponent: FC = () => {
  const user = "Javier";

  return (
    <>
      <div className="item-background">
        <img src={logoImg} alt="logo lemoncode" />
        <h1>Welcome to Vite project</h1>
      </div>
      <h2 className="hello-title">Hello {user} from React</h2>
    </>
  );
};
