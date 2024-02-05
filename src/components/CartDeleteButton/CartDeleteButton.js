import React from "react";
import styled from "styled-components";
import { removeItemActionCreator } from "../../store/reducers/cart.reducer";
import { useDispatch } from "react-redux";
import { MdOutlineDelete } from "react-icons/md";

function CartDeleteButton({ productId }) {
  const dispatch = useDispatch();
  const handleClickDeleteItem = (productId) => {
    const action = removeItemActionCreator(productId);
    dispatch(action);
  };
  return (
    <CartDeleteBtn
      onClick={() => handleClickDeleteItem(productId)}
    ></CartDeleteBtn>
  );
}

export default CartDeleteButton;

const CartDeleteBtn = styled(MdOutlineDelete)`
  background-color: transparent;
  cursor: pointer;
  font-size: 24px;
  text-align: right;
  position: absolute;
  right: 10px;
  top: 400px;
`;
