import React, { useRef } from "react";

export interface DetailOrder {
  id: string;
  state: "Valido" | "Pendiente";
  description: string;
  amount: string;
}

interface Props {
  detailOrderList: DetailOrder[];
  detailOrderListSelected: string[];
  setDetailOrderListSelected: (detailOrderListSelected: string[]) => void;
  validate: () => void;
  updateDetailAmount: (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => void;
}

export const Detail: React.FC<Props> = (props) => {
  const {
    detailOrderList,
    validate,
    updateDetailAmount,
    detailOrderListSelected,
    setDetailOrderListSelected,
  } = props;

  const itemsRef = useRef(null);

  const getMap = () => {
    if (!itemsRef.current) {
      // Initialize the Map on first usage.
      itemsRef.current = new Map();
    }
    return itemsRef.current;
  };

  const clearCheckBoxes = () => {
    const map = getMap();
    map.forEach((el) => (el.checked = false));
    setDetailOrderListSelected([]);
  };

  const handleDetailChange = (e, id: string) => {
    if (e.target.checked) {
      setDetailOrderListSelected([id, ...detailOrderListSelected]);
    } else {
      setDetailOrderListSelected(
        detailOrderListSelected.filter((el) => el !== id)
      );
    }
  };

  const isDisabled = (el: "validate" | "invalidate"): boolean => {
    if (detailOrderListSelected.length === 0) {
      return true;
    }
    if (el === "validate") {
      return detailOrderListSelected.some((detailOrderId) => {
        const index = detailOrderList.findIndex(
          (el) => el.id === detailOrderId
        );
        return detailOrderList[index].state === "Valido";
      });
    } else {
      return detailOrderListSelected.some((detailOrderId) => {
        const index = detailOrderList.findIndex(
          (el) => el.id === detailOrderId
        );
        return detailOrderList[index].state === "Pendiente";
      });
    }
  };

  return (
    <div className="detail-container">
      <div className="buttons-group">
        <button
          name="validate"
          disabled={isDisabled("validate")}
          type="button"
          onClick={(e) => {
            validate();
            clearCheckBoxes();
          }}
        >
          Validar
        </button>
        <button
          name="invalidate"
          disabled={isDisabled("invalidate")}
          type="button"
          onClick={(e) => {
            validate();
            clearCheckBoxes();
          }}
        >
          Invalidar
        </button>
      </div>
      <div className="detail-entries">
        <div className="detail-entries-header">
          <p></p>
          <p>Estado</p>
          <p>Descripción</p>
          <p>Importe</p>
        </div>
        <div className="detail-entry-container">
          {detailOrderList.map((entry) => (
            <div key={entry.id} className="detail-entry">
              <input
                ref={(node) => {
                  const map = getMap();
                  if (node) {
                    map.set(entry.id, node);
                  } else {
                    map.delete(entry.id);
                  }
                }}
                type="checkbox"
                onChange={(e) => handleDetailChange(e, entry.id)}
              />
              <p>{entry.state}</p>
              <p>{entry.description}</p>
              <input
                type="number"
                min={0}
                value={entry.amount}
                onChange={(e) => updateDetailAmount(e, entry.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
