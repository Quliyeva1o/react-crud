import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import AddProduct from './AddProduct';
import SearchProduct from './SearchProduct';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);


  return (
    <>
      <AddProduct products={products} setProducts={setProducts} />
      <SearchProduct products={products} setFilteredProducts={setFilteredProducts} />
      <ProductList products={filteredProducts} setProducts={setProducts} />
    </>
  );
};

export default Product;
