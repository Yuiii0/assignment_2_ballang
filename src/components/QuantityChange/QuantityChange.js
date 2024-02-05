import React, { useDebugValue, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemActionCreator,
  subItemActionCreator,
  updateItemAmountActionCreator,
} from "../../store/reducers/cart.reducer";
import styled from "styled-components";

function QuantityChange({ product }) {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const { amount } = product;

  const [displayAmount, setDisplayAmount] = useState(amount);

  const handleChangeAmount = (e) => {
    setDisplayAmount(e.target.value);
    const action = updateItemAmountActionCreator({
      ...product,
      amount: displayAmount,
    });
    dispatch(action);
  };

  const handleClickAddAmount = () => {
    setDisplayAmount((prevAmount) => (prevAmount += 1));
    const action = addItemActionCreator(product);
    dispatch(action);
  };
  const handleClickDeleteAmount = () => {
    setDisplayAmount((prevAmount) => (prevAmount -= 1));
    const action = subItemActionCreator(product);
    dispatch(action);
  };

  return (
    <Container>
      <NumberInput type="text" onChange={handleChangeAmount} value={amount} />
      <BtnGroup>
        <AmountBtn
          onClick={handleClickAddAmount}
          style={{ borderBottom: "1px solid gray" }}
        >
          +
        </AmountBtn>
        <AmountBtn onClick={handleClickDeleteAmount}>-</AmountBtn>
      </BtnGroup>
    </Container>
  );
}

export default QuantityChange;

const Container = styled.div`
  margin-top: -20px;
  width: 150px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  height: 24px;
`;
const NumberInput = styled.input`
  width: 36px;
  border: 1px solid lightgray;
  text-align: center;
`;
const BtnGroup = styled.div`
  display: flex;
  width: 14px;
  flex-direction: column;
`;
const AmountBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  border: 1px solid lightgray;
  height: 12px;
  cursor: pointer;
  border: none;
  background-color: black;
  color: white;
`;
