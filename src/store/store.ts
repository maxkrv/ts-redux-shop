import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducers/productSlice";

const store = configureStore({
	reducer: {
		product: productSlice,
	},
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
