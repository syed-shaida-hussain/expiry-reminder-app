'use client';

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
	status: 'idle',
	products: [],
};

export const fetchProducts = createAsyncThunk(
	'products/fetchProducts',
	async () => {
		try {
			const res = await fetch('http://localhost:3000/api/products');
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
			});
	},
});

export default productSlice.reducer;
