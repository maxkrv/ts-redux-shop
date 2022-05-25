import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICart, IProduct } from "../../types/types";
import axios from "axios";

interface productState {
	list: IProduct[];
	cart: {
		list: ICart[];
		amount: number;
		total: number;
	};
	isLoading: boolean;
}

const initialState: productState = {
	list: [],
	cart: {
		list: [],
		amount: 0,
		total: 0,
	},
	isLoading: false,
};

export const fetchProduct = createAsyncThunk<
	IProduct[],
	undefined,
	{ rejectValue: string }
>("product/fetchProduct", async (_, { rejectWithValue }) => {
	try {
		const response = await axios.get("https://fakestoreapi.com/products");

		return response.data;
	} catch (e: any) {
		return rejectWithValue(e.message);
	}
});

const productSlice = createSlice({
	name: "product",
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<IProduct>) => {
			const productToAdd = { ...action.payload, quantity: 1 };
			const ItemIndex = state.cart.list.findIndex(
				(product) => product.id === action.payload.id
			);

			if (ItemIndex >= 0) {
				state.cart.list[ItemIndex].quantity += 1;
			} else {
				state.cart.list.push(productToAdd);
			}
		},
		removeFromCart: (state, action: PayloadAction<number>) => {
			state.cart.list = state.cart.list.filter(
				(product) => product.id !== action.payload
			);
		},
		clearCart: (state) => {
			state.cart.list = [];
		},
		increase: (state, action: PayloadAction<number>) => {
			const cartItem = state.cart.list.find(
				(item) => item.id === action.payload
			);

			if (cartItem) {
				cartItem.quantity += 1;
			}
		},
		decrease: (state, action: PayloadAction<number>) => {
			const cartItem = state.cart.list.find(
				(item) => item.id === action.payload
			);

			if (cartItem) {
				cartItem.quantity -= 1;
			}
		},
		calculateTotals: (state) => {
			let amount = 0;
			let total = 0;
			state.cart.list.forEach((item) => {
				amount += item.quantity;
				total += item.quantity * item.price;
			});
			state.cart.amount = amount;
			state.cart.total = total;
		},
		sortByName: (state) => {
			state.list.sort((a, b) => a.title.localeCompare(b.title));
		},
		sortLowToHigh: (state) => {
			state.list.sort((a, b) => a.price - b.price);
		},
		sortHighToLow: (state) => {
			state.list.sort((a, b) => b.price - a.price);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProduct.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchProduct.fulfilled, (state, action) => {
				state.isLoading = false;
				state.list = action.payload;
			});
	},
});

export const {
	addToCart,
	removeFromCart,
	clearCart,
	increase,
	decrease,
	calculateTotals,
	sortByName,
	sortLowToHigh,
	sortHighToLow,
} = productSlice.actions;
export default productSlice.reducer;
