import React from 'react';
import { Layout, Filters, ProductsGrid, SEO } from 'components';
import ProductContext from 'context/ProductContext';
import styled from 'styled-components';
import queryString from 'query-string';
import { useLocation } from '@reach/router';

export default function AllProducts() {
  const { products, collections } = React.useContext(ProductContext);
  const collectionProductMap = {};
  const { search } = useLocation();
  const qs = queryString.parse(search);
  const selectedCollectionIds = qs.c?.split(',').filter(c => !!c) || [];
  const selectedCollectionIdsMap = {};

  selectedCollectionIds.forEach(collectionId => {
    selectedCollectionIdsMap[collectionId] = true;
  });

  if (collections) {
    collections.forEach(collection => {
      collectionProductMap[collection.shopifyId] = {};

      collection.products.forEach(prodcut => {
        collectionProductMap[collection.shopifyId][prodcut.shopifyId] = true;
      });
    });
  }
  console.log(collectionProductMap);

  const filterByCategory = product => {
    if (Object.keys(selectedCollectionIdsMap).length) {
      for (let key in selectedCollectionIdsMap) {
        if (collectionProductMap[key]?.[product.shopifyId]) {
          return true;
        }
      }
      return false;
    }
    return true;
  };

  const filteredProducts = products.filter(filterByCategory);
  return (
    <Layout>
      <SEO
        description="OP Floral Designer: Productos"
        title="Todos los Productos"
      />
      <h4>{filteredProducts.length} articulos</h4>
      <Content>
        <Filters />
        <div>
          <ProductsGrid products={filteredProducts} />
        </div>
      </Content>
    </Layout>
  );
}

const Content = styled.div`
  grid-gap: 20px;
  margin-top: 20px;
  grid-template-columns: 1fr 3fr;
`;
