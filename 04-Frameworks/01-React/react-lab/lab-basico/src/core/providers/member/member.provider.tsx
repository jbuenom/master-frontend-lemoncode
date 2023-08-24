import React, { PropsWithChildren, createContext } from "react";
import { MemberEntity } from "../../../components/github/list";

interface Props extends PropsWithChildren {}
interface MembersContextModel {
  filter: string;
  setFilter: (value: string) => void;
  members: MemberEntity[];
  setMembers: (value: MemberEntity[]) => void;
}

export const MembersContext = createContext<MembersContextModel>({
  filter: "",
  members: [],
  setFilter: () => {},
  setMembers: () => {},
});

export const MembersProvider = (props: Props) => {
  const [filter, setFilter] = React.useState<string>("lemoncode");
  const [members, setMembers] = React.useState<MemberEntity[]>([]);

  return (
    <MembersContext.Provider value={{ filter, setFilter, members, setMembers }}>
      {props.children}
    </MembersContext.Provider>
  );
};
