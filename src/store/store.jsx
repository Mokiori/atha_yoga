import { configureStore } from '@reduxjs/toolkit';
import userReducer from './profileSlice';

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
