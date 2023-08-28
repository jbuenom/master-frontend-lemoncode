import React from "react";
import kittie1 from "../../assets/images/kittie1.jpg";
import kittie2 from "../../assets/images/kittie2.jpg";
import kittie3 from "../../assets/images/kittie3.jpg";
import kittie4 from "../../assets/images/kittie4.jpg";
import { PetContext, PictureInfo } from "../core/providers/pet.provider";
export const Kitties: React.FC = () => {
  const kittiesList: PictureInfo[] = [
    { id: "1", picUrl: kittie1, title: "Kittie 1", selected: false },
    { id: "2", picUrl: kittie2, title: "Kittie 2", selected: false },
    { id: "3", picUrl: kittie3, title: "Kittie 3", selected: false },
    { id: "4", picUrl: kittie4, title: "Kittie 4", selected: false },
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
      {kittiesList.map((kittie) => (
        <div key={kittie.id} className="pet">
          <img className="pet-img" src={kittie.picUrl} alt="" />
          <p className="pet-name">{kittie.title}</p>
          <input
            id={kittie.id}
            onChange={handleChange}
            checked={isChecked(kittie.id)}
            type="checkbox"
          />
          <label htmlFor={kittie.id}>Buy</label>
        </div>
      ))}
    </div>
  );
};
