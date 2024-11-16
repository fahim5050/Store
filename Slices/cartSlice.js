import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity } = action.payload;
  const existingItem = state.cartItems.find(item => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += quantity;  // Increase quantity if already in cart
  } else {
    state.cartItems.push({ ...product, quantity });  // Add new product to cart
  }
  
  console.log("Updated cart items:", state.cartItems);  // Log the updated cart state
},
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
