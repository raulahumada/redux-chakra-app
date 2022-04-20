import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    list: [],
  },
  reducers: {
    setUsers: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setUsers } = userSlice.actions;

export default userSlice.reducer;

export const getAllUsers = () => {
  return (dispatch) => {
    axios
      .get('https://reqres.in/api/users?per_page=12')
      .then((response) => {
        let users = response.data.data;
        dispatch(setUsers(users));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
