import React, { useEffect } from 'react';
import { getAllProducts } from '../store/slices/products';
import { useDispatch, useSelector } from 'react-redux';

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  console.log(products);
  return <div>Store</div>;
};

export default Products;
