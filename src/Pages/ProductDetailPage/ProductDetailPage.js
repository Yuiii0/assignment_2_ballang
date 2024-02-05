import React, { useEffect, useState } from "react";
import Page from "../../components/Page/Page";
import { useParams } from "react-router-dom";
import api from "../../api/api";
import styled from "styled-components";
import { formatPrice } from "../../utils/formatPrice";
import { Button } from "../../components/Share/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItemActionCreator } from "../../store/reducers/cart.reducer";
import CartButton from "../../components/CartButton/CartButton";
import AmountChangeButton from "../../components/AmountChangeButton";
import QuantityChange from "../../components/QuantityChange";

function ProductDetailPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  const items = useSelector((state) => state.cart.items);

  useEffect(() => {
    api.products.getProduct(productId).then((product) => setProduct(product));
  }, [productId]);
  if (product === null) return;
  console.log(product);
  const formattedStandardPrice = formatPrice(product.standard_price);
  const formattedPrice = formatPrice(product.goods_price);

  return (
    <Page>
      <CategoryList>
        {product.catnm.map((category, index) => (
          <li key={index} style={{ marginRight: "5px" }}>{`${category}${
            index !== product.catnm.length - 1 ? " >" : ""
          }`}</li>
        ))}
      </CategoryList>
      <Wrapper>
        <ProductImg src={product.img_i} alt={product.name} />
        <div>
          <div style={{ borderBottom: "2px solid black", padding: "5px 0" }}>
            <BrandName>{product.brandnm}</BrandName>
            <ProductName>{product.goodsnm}</ProductName>
          </div>
          <ul style={{ borderBottom: "2px solid black" }}>
            <DetailList>
              <DetailTitle>상품 금액</DetailTitle>
              <DetailDescription
                style={{ color: "gray", textDecoration: "line-through" }}
              >
                {formattedStandardPrice} 원
              </DetailDescription>
            </DetailList>
            <DetailList>
              <DetailTitle>판매가</DetailTitle>
              <DetailDescription>{formattedPrice} 원</DetailDescription>
            </DetailList>
            <DetailList>
              <DetailTitle>무이자 할부</DetailTitle>
              <DetailDescription>최대 12개월</DetailDescription>
            </DetailList>
            <DetailList style={{ marginBottom: 15 }}>
              <DetailTitle>배송비</DetailTitle>
              <DetailDescription>무료</DetailDescription>
            </DetailList>
          </ul>
          <BtnGroup>
            <Button
              style={{
                width: 260,
                borderRadius: 0,
                height: 44,
                marginRight: 10,
              }}
            >
              BUY NOW
            </Button>
            {/* <QuantityChange product={product}></QuantityChange> */}
            <CartButton product={product}></CartButton>
          </BtnGroup>
        </div>
      </Wrapper>
    </Page>
  );
}

export default ProductDetailPage;

const CategoryList = styled.ul`
  display: flex;
  font-size: 13px;
`;

const ProductImg = styled.img`
  width: 567px;
  height: 756px;
`;
const Wrapper = styled.section`
  border-top: 1px solid lightgray;
  padding-top: 3rem;
  display: flex;
  gap: 3rem;
`;
const BrandName = styled.p`
  font-size: 30px;
  letter-spacing: -1px;
  font-weight: 600;
  margin-bottom: 0;
`;
const ProductName = styled.p`
  font-size: 15px;
  line-height: 26px;
`;
const DetailList = styled.li`
  display: flex;
  align-items: center;
`;
const DetailTitle = styled.p`
  font-size: 14px;
  font-weight: bold;
  width: 130px;
`;

const DetailDescription = styled.span`
  font-size: 15px;
`;
const BtnGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
