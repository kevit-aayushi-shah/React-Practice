// import { createSlice } from "@reduxjs/toolkit";

// export const STATUSES = {
//   IDLE: "idle",
//   ERROR: "error",
//   LOADING: "loading",
// };
// const ProductSlice = createSlice({
//   name: "product",
//   initialState: {
//     data: [],
//     status: STATUSES.IDLE,
//   },
//   reducers: {
//     setProducts(state, action) {
//       state.data = action.payload;
//     },
//     setStatus(state, action) {
//       state.status = action.payload;
//     },
//   },
// }); 

// export const { setProducts, setStatus } = ProductSlice.actions;
// export default ProductSlice.reducer;

// // Thunks
// export function fetchProducts() {
//   return async function fetchProductsThunk(dispatch, getState) {
//     dispatch(setStatus(STATUSES.LOADING));
//     try {
//       const res = await fetch(`https://dummyjson.com/products/`);
//       const data = await res.json();
//       dispatch(setProducts(data.products));
//       dispatch(setStatus(STATUSES.IDLE));
//     } catch (error) {
//       console.log(error);
//       dispatch(setStatus(STATUSES.ERROR));
//     }
//   };
// }
