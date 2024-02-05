import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addItemActionCreator } from "../../store/reducers/cart.reducer";
import { MdAddShoppingCart } from "react-icons/md";
import { MdDownloadDone } from "react-icons/md";

function CartButton({ product }) {
  const [amount, setAmount] = useState(1);
  const dispatch = useDispatch();
  const [isSelected, setIsSelected] = useState(false);

  const handleClickAddItem = (product) => {
    const id = product.id;
    setAmount((prev) => prev + 1);
    const item = { amount, ...product };
    const action = addItemActionCreator(item);
    dispatch(action);
    setIsSelected(true);
    alert("장바구니 담기 성공 🛒");
  };

  return isSelected ? (
    <CartedBtn onClick={() => handleClickAddItem(product)} />
  ) : (
    <CartBtn onClick={() => handleClickAddItem(product)} />
  );
}

export default CartButton;

const CartBtn = styled(MdAddShoppingCart)`
  font-size: 24px;
  cursor: pointer;
`;
const CartedBtn = styled(MdDownloadDone)`
  font-size: 24px;
  cursor: pointer;
`;
