'use client';

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
	status: 'idle',
	products: [],
	expiringSoonProducts: [],
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
				state.status = 'loading';
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				(state.status = 'idle'), (state.products = action.payload.products);
			})
			.addCase(fetchExpiringSoonProducts.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchExpiringSoonProducts.fulfilled, (state, action) => {
				(state.status = 'idle'),
					(state.expiringSoonProducts = action.payload.products);
			});
	},
});

export default productSlice.reducer;
