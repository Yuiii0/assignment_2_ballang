import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemActionCreator,
  subItemActionCreator,
  updateItemAmountActionCreator,
} from "../../store/reducers/cart.reducer";

function AmountChangeButton({ product }) {
  const [quantity, setQuantity] = useState(1);
  const items = useSelector((state) => state.cart.items);
  console.log("state", items);
  const dispatch = useDispatch();
  console.log(product);

  const handleClickIncrease = (product) => {
    setQuantity((prevAmount) => prevAmount + 1);
  };
  const handleClickDecrease = (product) => {
    setQuantity((prevAmount) => prevAmount - 1);
  };
  const handleChangeAmount = (e) => {
    setQuantity(e.target.value);
  };
  const handleClickAddItem = () => {
    const item = { amount: quantity, ...product };
    const action = updateItemAmountActionCreator(item);
    dispatch(action);
  };
  // console.log("amount", quantity);
  return (
    <>
      <div>
        <button onClick={handleClickIncrease}>+</button>
        <input value={quantity} type="number" onChange={handleChangeAmount} />
        <button onClick={handleClickDecrease}>-</button>
      </div>
      <button onClick={handleClickAddItem}>담기</button>
    </>
  );
}

export default AmountChangeButton;
