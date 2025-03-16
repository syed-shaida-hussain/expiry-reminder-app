'use client';

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
	loading: false,
	products: [],
	expiringSoonProducts: [],
	singleProduct: {},
};

export const fetchProducts = createAsyncThunk(
	'products/fetchProducts',
	async () => {
		try {
			const res = await fetch('http://localhost:3000/api/products');
			return res.json();
		} catch (error) {
			console.log(error.response);
		}
	}
);

export const fetchSingleProduct = createAsyncThunk(
	'products/fetchSingleProduct',
	async (action) => {
		try {
			const id = action;
			const res = await fetch(`http://localhost:3000/api/products/${id}`);
			return res.json();
		} catch (error) {
			console.log(error.response);
		}
	}
);

export const fetchExpiringSoonProducts = createAsyncThunk(
	'products/fetchExpiringSoonProducts',
	async () => {
		try {
			const res = await fetch('http://localhost:3000/api/expiring-soon');
			return res.json();
		} catch (error) {
			console.log(error.response.data);
		}
	}
);

const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProducts.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				(state.loading = false), (state.products = action.payload.products);
			})
			.addCase(fetchExpiringSoonProducts.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchExpiringSoonProducts.fulfilled, (state, action) => {
				(state.loading = false),
					(state.expiringSoonProducts = action.payload.products);
			})
			.addCase(fetchSingleProduct.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchSingleProduct.fulfilled, (state, action) => {
				(state.loading = false), (state.singleProduct = action.payload.product);
			});
	},
});

export default productSlice.reducer;
