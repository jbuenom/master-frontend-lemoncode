import React, { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {}

export const CartLayout: React.FC<Props> = (props) => {
  const { children } = props;
  return <div className="container-cart">{children}</div>;
};
