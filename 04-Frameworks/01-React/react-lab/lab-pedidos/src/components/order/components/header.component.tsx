import React from "react";

interface Props {
  numberEntity: string;
  supplier: string;
  stateOrder: number;
  date: string;
  totalAmount: number;
  validSend: boolean;
  onCheckout: () => void;
}

export const Header: React.FC<Props> = (props) => {
  return (
    <div className="header-container">
      <div className="header-element">
        <label>Número</label>
        <input disabled type="text" value={props.numberEntity} />
      </div>
      <div className="header-element">
        <label>Provedor</label>
        <input disabled type="text" value={props.supplier} />
      </div>
      <div className="header-element">
        <label>Fecha</label>
        <input disabled type="date" value={props.date} />
      </div>
      <div className="header-element">
        <label>Importe total</label>
        <input disabled type="text" value={props.totalAmount} />
      </div>
      <div className="header-element">
        <label>Estado</label>
        <input disabled type="text" value={`${props.stateOrder}%`} />
      </div>
      <button
        disabled={!props.validSend}
        type="button"
        onClick={props.onCheckout}
      >
        Enviar
      </button>
    </div>
  );
};
