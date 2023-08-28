import React, { PropsWithChildren, createContext } from "react";

export interface PictureInfo {
  id: string;
  picUrl: string;
  title: string;
  selected: boolean;
}
interface Props extends PropsWithChildren {}
interface PetContextModel {
  petsId: string[];
  setPetsId: (value) => void;
}

export const PetContext = createContext<PetContextModel>(null);

export const PetProvider = (props: Props) => {
  const [petsId, setPetsId] = React.useState<string[]>([]);

  return (
    <PetContext.Provider value={{ petsId, setPetsId }}>
      {props.children}
    </PetContext.Provider>
  );
};
