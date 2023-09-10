import React from "react";
import { Header } from "./components/header.component";
import { Detail, DetailOrder } from "./components/detail.component";

export const Order: React.FC = () => {
  const [numberEntity, setNumberEntity] = React.useState<string>("343434");
  const [supplier, setSupplier] = React.useState<string>("EMPRESA RANDOM");
  const [stateOrder, setStateOrder] = React.useState<number>(0);
  const [date, setDate] = React.useState<string>("2012-03-23");
  const [totalAmount, setTotalAmount] = React.useState<number>(0);
  const [validSend, setValidSend] = React.useState<boolean>(false);

  // Detail
  const [detailOrderList, setDetailOrderList] = React.useState<DetailOrder[]>([
    {
      id: "1",
      state: "Pendiente",
      description: "Soporte plataforma",
      amount: "1230",
    },
    {
      id: "2",
      state: "Pendiente",
      description: "Soporte plataforma",
      amount: "1230",
    },
    {
      id: "3",
      state: "Valido",
      description: "Soporte plataforma",
      amount: "1230",
    },
    {
      id: "4",
      state: "Pendiente",
      description: "Soporte plataforma",
      amount: "1230",
    },
    {
      id: "5",
      state: "Pendiente",
      description: "Soporte plataforma",
      amount: "1230",
    },
  ]);
  const [detailOrderListSelected, setDetailOrderListSelected] = React.useState<
    string[]
  >([]);

  React.useEffect(() => {
    updateTotalAmout(detailOrderList, setTotalAmount);
    checkValidOrder(detailOrderList, setValidSend);
    checkPercentageOrder(detailOrderList, setStateOrder);
  }, [detailOrderList]);

  const validate = () => {
    detailOrderListSelected.map((detailOrder) => {
      const indexToUpdate = detailOrderList.findIndex(
        (el) => el.id === detailOrder
      );
      detailOrderList[indexToUpdate] = {
        ...detailOrderList[indexToUpdate],
        state:
          detailOrderList[indexToUpdate].state === "Pendiente"
            ? "Valido"
            : "Pendiente",
      };
    });
    setDetailOrderList([...detailOrderList]);
  };

  const updateDetailAmount = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const indexToUpdate = detailOrderList.findIndex((el) => el.id === id);
    detailOrderList[indexToUpdate] = {
      ...detailOrderList[indexToUpdate],
      amount: e.target.value,
    };
    setDetailOrderList([...detailOrderList]);
  };

  const onCheckout = () => {
    alert("Checkout done!");
  };

  const updateTotalAmout = (
    detailOrderList: DetailOrder[],
    setTotalAmount: React.Dispatch<React.SetStateAction<number>>
  ) => {
    const totalAmount = detailOrderList
      .map((el) => Number(el.amount))
      .reduce((acc, cur) => acc + cur);
    setTotalAmount(totalAmount);
  };

  const checkValidOrder = (
    detailOrderList: DetailOrder[],
    setValidSend: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    const checkValidOrder = detailOrderList.every(
      (el) => el.state === "Valido"
    );
    setValidSend(checkValidOrder);
  };

  const checkPercentageOrder = (
    detailOrderList: DetailOrder[],
    setStateOrder: React.Dispatch<React.SetStateAction<number>>
  ) => {
    const totalOrderDetail = detailOrderList.length;
    const totalOrderValid = detailOrderList.filter(
      (el) => el.state === "Valido"
    ).length;
    setStateOrder((totalOrderValid / totalOrderDetail) * 100);
  };

  return (
    <>
      <h1>Pedido a proveedor</h1>
      <div className="order-container">
        <Header
          numberEntity={numberEntity}
          supplier={supplier}
          stateOrder={stateOrder}
          date={date}
          totalAmount={totalAmount}
          validSend={validSend}
          onCheckout={onCheckout}
        />
        <Detail
          detailOrderListSelected={detailOrderListSelected}
          setDetailOrderListSelected={setDetailOrderListSelected}
          detailOrderList={detailOrderList}
          validate={validate}
          updateDetailAmount={updateDetailAmount}
        />
      </div>
    </>
  );
};
