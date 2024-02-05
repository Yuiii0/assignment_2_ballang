import React, { useEffect, useState } from "react";
import Page from "../../components/Page/Page";
import api from "../../api/api";
import ProductList from "../../components/ProductList";
import styled from "styled-components";

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Promise.all([api.products.getProducts()]).then(([product]) =>
      setProducts(product)
    );
  }, []);

  return (
    <Page>
      {products.length === 0 ? (
        <LoadingPage>Loading...</LoadingPage>
      ) : (
        <ProductList products={products}></ProductList>
      )}
    </Page>
  );
}

export default HomePage;

const LoadingPage = styled.h3`
  text-align: center;
`;
