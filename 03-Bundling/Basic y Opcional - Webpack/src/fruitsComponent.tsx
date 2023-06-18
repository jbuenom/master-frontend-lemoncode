import React from "react";
import { countFruitsByType } from "./fruitsService";
import classes from "./mystyles.scss";

export const FruitsComponent: React.FC = () => {
  const [fruitsOrdered, setfruitsOrdered] = React.useState([]);

  React.useEffect(() => {
    const fruitsList = ["🍋", "🍍", "🍊", "🍎", "🍊", "🍎", "🍋", "🍋", "🍊"];

    setfruitsOrdered(countFruitsByType(fruitsList));
  }, []);

  return (
    <>
      <h1>List of fruits</h1>
      {fruitsOrdered.map((el) => {
        return <div className={classes.marginItems}>{el}</div>;
      })}
    </>
  );
};
