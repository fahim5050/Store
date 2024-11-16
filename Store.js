import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Slices/cartSlice';  // Correct path from store.js



const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
