import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});
export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;

export const getAllProducts = () => {
  return (dispatch) => {
    axios
      .get('http://localhost:3001/products')
      .then((response) => {
        let products = response.data;
        dispatch(setProducts(products));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
