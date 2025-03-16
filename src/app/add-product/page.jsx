'use client';

import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';

const AddProductPage = () => {
	const initialState = {
		name: '',
		price: '',
		quantity: '',
		expiryDate: '',
		userId: null,
	};
	const [newProduct, setNewProduct] = useState(initialState);
	const [error, setError] = useState('');
	const handleAddProduct = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post('/api/products', newProduct);

			if (res?.status === 201) {
				toast('Product added successfully');
				setError('');
				setNewProduct(initialState);
			}
		} catch (error) {
			setError(error?.response?.data?.message);
			console.log(error.response);
		}
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setNewProduct({ ...newProduct, [name]: value });
	};

	return (
		<div className="flex items-center justify-center h-[90vh] w-full p-4 my-14">
			<form
				onSubmit={handleAddProduct}
				name="add-product-form"
				className="flex flex-col gap-6  w-[100%] h-fit sm:w-[80%] lg:w-[70%] xl:w-[50%] 2xl:w-fit shadow-2xl px-8 py-4 sm:px-16 sm:py-8 2xl:p-20 2xl:text-2xl  rounded-lg"
			>
				<h1 className="text-center font-semibold text-lg md:text-2xl">
					Add Product
				</h1>
				<label htmlFor="name" className="flex flex-col gap-2">
					Name *
					<input
						className="input"
						id="name"
						type="text"
						name="name"
						value={newProduct.name}
						onChange={handleInputChange}
					/>
				</label>
				<label htmlFor="price" className="flex flex-col gap-2">
					Price *
					<input
						className="input"
						id="price"
						type="number"
						name="price"
						value={newProduct.price}
						onChange={handleInputChange}
					/>
				</label>
				<label htmlFor="quantity" className="flex flex-col gap-2">
					Quantity *
					<input
						className="input"
						id="quantity"
						type="number"
						name="quantity"
						value={newProduct.quantity}
						onChange={handleInputChange}
					/>
				</label>
				<label htmlFor="expiry-date" className="flex flex-col gap-2">
					Expiry Date *
					<input
						className="input"
						id="expiry-date"
						type="date"
						name="expiryDate"
						value={newProduct.expiryDate}
						onChange={handleInputChange}
					/>
				</label>
				<div className="text-red-500">{error}</div>
				<button
					type="submit"
					className="bg-background text-textColor p-2  font-semibold rounded-full mt-1"
				>
					Add Product
				</button>
			</form>
		</div>
	);
};

export default AddProductPage;
