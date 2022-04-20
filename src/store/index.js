import { configureStore } from '@reduxjs/toolkit';
import users from './slices/users';
import products from './slices/products';
export default configureStore({
  reducer: {
    users,
    products,
  },
});
