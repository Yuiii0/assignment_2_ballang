import React from "react";
import ProductsListItem from "../ProductsListItem";
import styled from "styled-components";
import { PageWrapper, Title } from "../Share/Title";

function ProductList({ products }) {
  return (
    <section>
      <Title>의류</Title>
      <PageWrapper as="ul">
        {products.map((product) => (
          <li key={products.id}>
            <ProductsListItem
              key={products.id}
              product={product}
            ></ProductsListItem>
          </li>
        ))}
      </PageWrapper>
    </section>
  );
}

export default ProductList;
const Products = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;
