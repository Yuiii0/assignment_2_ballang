import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { calculateDisCountRate, formatPrice } from "../../utils/formatPrice";
import CartButton from "../CartButton/CartButton";

function ProductsListItem({ product, selected }) {
  const formatedPrice = formatPrice(product.goods_price);
  const discountRate = calculateDisCountRate(
    product.standard_price,
    product.goods_price
  );

  return (
    <Link to={`/products/${product.id}`}>
      <Wrapper>
        <div style={{ boxSizing: "border-box", width: 208, height: 277 }}>
          <ProductImg src={product.img_i} alt={product.goodsnm} />
        </div>

        <TextContainer>
          <BrandName>{product.brandnm}</BrandName>
          <ProductName>{product.goodsnm.slice(0, 22)}</ProductName>
          <Price>
            {`${formatedPrice}원`}
            {selected || <strong>{`${discountRate}%`}</strong>}
            {selected || (
              <CartWrapper to={"#"}>
                <CartButton product={product} plus={true}></CartButton>
              </CartWrapper>
            )}
          </Price>
        </TextContainer>
      </Wrapper>
    </Link>
  );
}

export default ProductsListItem;
const Wrapper = styled.div`
  margin-bottom: 3rem;
  box-sizing: border-box;
`;
const ProductImg = styled.img`
  width: 208px;
  height: 277px;
  object-fit: cover;
  transition: all 0.3s;
  &:hover {
    border: 1px solid lightgray;
  }
`;
const TextContainer = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
const BrandName = styled.p`
  font-weight: 700;
  font-size: 14px;
  height: 20px;
`;
const ProductName = styled.p`
  margin-top: 2px;
  font-size: 13px;
  color: black;
  font-weight: 300;
  height: 36px;
`;
const Price = styled.p`
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 1rem;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -1px;
  strong {
    margin-left: 10px;
    color: #bd081c;
    font-weight: 500;
  }
`;
const CartWrapper = styled(Link)`
  position: absolute;
  right: 10px;
`;
