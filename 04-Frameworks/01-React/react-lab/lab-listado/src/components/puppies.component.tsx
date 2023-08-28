import React from "react";
import puppie1 from "../../assets/images/puppie1.jpg";
import puppie2 from "../../assets/images/puppie2.jpg";
import puppie3 from "../../assets/images/puppie3.jpg";
import puppie4 from "../../assets/images/puppie4.jpg";
import { PetContext, PictureInfo } from "../core/providers/pet.provider";

export const Puppies: React.FC = () => {
  const puppiesList: PictureInfo[] = [
    { id: "5", picUrl: puppie1, title: "Puppie 5", selected: false },
    { id: "6", picUrl: puppie2, title: "Puppie 6", selected: false },
    { id: "7", picUrl: puppie3, title: "Puppie 7", selected: false },
    { id: "8", picUrl: puppie4, title: "Puppie 8", selected: false },
  ];

  const { petsId, setPetsId } = React.useContext(PetContext);

  const isChecked = (id: string) => {
    return petsId.some((el) => el === id);
  };

  const handleChange = (e) => {
    const id = String(e.target.id);
    if (e.target.checked) {
      setPetsId([...petsId, ...id]);
    } else {
      setPetsId(petsId.filter((el) => el !== id));
    }
  };

  return (
    <div className="container-pets">
      {puppiesList.map((puppie) => (
        <div key={puppie.id} className="pet">
          <img className="pet-img" src={puppie.picUrl} alt="" />
          <p className="pet-name">{puppie.title}</p>
          <input
            id={puppie.id}
            onChange={handleChange}
            checked={isChecked(puppie.id)}
            type="checkbox"
          />
          <label htmlFor={puppie.id}>Buy</label>
        </div>
      ))}
    </div>
  );
};
