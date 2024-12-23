import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import usersReducer from './usersSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    users: usersReducer
  },
});

export default store;
