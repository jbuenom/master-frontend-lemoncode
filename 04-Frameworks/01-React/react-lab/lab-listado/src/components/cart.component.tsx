import React from "react";
import cartSvg from "../../assets/images/cart.svg";
import deleteIcon from "../../assets/images/delete.png";
import { PetContext, PictureInfo } from "../core/providers/pet.provider";
import kittie1 from "../../assets/images/kittie1.jpg";
import kittie2 from "../../assets/images/kittie2.jpg";
import kittie3 from "../../assets/images/kittie3.jpg";
import kittie4 from "../../assets/images/kittie4.jpg";
import puppie1 from "../../assets/images/puppie1.jpg";
import puppie2 from "../../assets/images/puppie2.jpg";
import puppie3 from "../../assets/images/puppie3.jpg";
import puppie4 from "../../assets/images/puppie4.jpg";
import deleteCartIcon from "../../assets/images/eraser.png";

export const Cart: React.FC = () => {
  const petsList: PictureInfo[] = [
    { id: "1", picUrl: kittie1, title: "Kittie 1", selected: false },
    { id: "2", picUrl: kittie2, title: "Kittie 2", selected: false },
    { id: "3", picUrl: kittie3, title: "Kittie 3", selected: false },
    { id: "4", picUrl: kittie4, title: "Kittie 4", selected: false },
    { id: "5", picUrl: puppie1, title: "Puppie 5", selected: false },
    { id: "6", picUrl: puppie2, title: "Puppie 6", selected: false },
    { id: "7", picUrl: puppie3, title: "Puppie 7", selected: false },
    { id: "8", picUrl: puppie4, title: "Puppie 8", selected: false },
  ];
  const { petsId, setPetsId } = React.useContext(PetContext);

  const handleClick = (id: string) => {
    setPetsId(petsId.filter((el) => el !== id));
  };

  const handleDeleteCart = (e) => {
    setPetsId([]);
  };

  return (
    <div className="cart">
      <div className="cart-title">
        <img className="cart-img" src={cartSvg} alt="cart icon" />
        <p>Cart</p>
        <img
          title="Delete cart"
          className="cart-hide"
          onClick={handleDeleteCart}
          src={deleteCartIcon}
          alt="delete cart icon"
        />
      </div>
      <div className="cart-list">
        {petsId
          .map((id) => {
            return petsList.find((el) => el.id === id);
          })
          .map((pet) => (
            <div key={pet.id} className="cart-item">
              <img className="cart-item-img" src={pet.picUrl} alt="" />
              <p>{pet.title}</p>
              <img
                src={deleteIcon}
                onClick={(e) => handleClick(pet.id)}
                alt="pet image"
              />
            </div>
          ))}
      </div>
    </div>
  );
};
