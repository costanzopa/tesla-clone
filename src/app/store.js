import { configureStore } from '@reduxjs/toolkit';
import menuItemReducer from '../features/menuItem/menuItemSlice';

export const store = configureStore({
  reducer: {
    menuItem: menuItemReducer,
  },
});
