import React, { useEffect, useState } from "react";
import Page from "../../components/Page/Page";
import { useDispatch, useSelector } from "react-redux";
import ProductsListItem from "../../components/ProductsListItem";
import api from "../../api/api";
import styled from "styled-components";
import { Title } from "../../components/Share/Title";
import CartDeleteButton from "../../components/CartDeleteButton";
import QuantityChange from "../../components/QuantityChange";

function CartPage() {
  const [cartItem, setCartItem] = useState([]);
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <Page>
      <Title>CART</Title>
      <Wrapper>
        {items.length === 0 && <EmptyCart>장바구니를 담아주세요</EmptyCart>}
        {items.map((item) => (
          <ProductContainer>
            <ProductsListItem product={item} selected></ProductsListItem>
            <CartDeleteButton productId={item.id}></CartDeleteButton>
            <SQuantityChange product={item}></SQuantityChange>
          </ProductContainer>
        ))}
      </Wrapper>
    </Page>
  );
}

export default CartPage;
const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;
const ProductContainer = styled.div`
  position: relative;
  width: 210px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 30px;
`;

const EmptyCart = styled.div`
  font-size: 1rem;
  width: 400px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 50%);
  text-align: center;
`;
const SQuantityChange = styled(QuantityChange)`
  margin-top: -6px;
`;
