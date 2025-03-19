'use client';

import {
	editProduct,
	fetchSingleProduct,
} from '@/features/products/productSlice';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { use, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

const ProductEditPage = ({ params }) => {
	const { id } = use(params);
	const [error, setError] = useState('');
	const initialState = {
		name: '',
		price: '',
		quantity: '',
		expiryDate: '',
	};
	const [productToEdit, setProductToEdit] = useState(initialState);
	const { singleProduct } = useSelector((store) => store.product);
	const { name, price, quantity, expiryDate } = productToEdit;
	const dispatch = useDispatch();
	const router = useRouter();

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setProductToEdit({ ...productToEdit, [name]: value });
	};

	const handleEditProduct = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.put(`/api/products/edit/${id}`, productToEdit);

			if (res?.status === 200) {
				setError('');
				toast('Product Edited successfully');
				setProductToEdit(initialState);
				router.push('/');
				dispatch(
					editProduct({ id, updatedProduct: res?.data?.updatedProduct })
				);
			}
		} catch (error) {
			setError(error?.response?.data?.message);
			console.log(error.response);
		}
	};

	useEffect(() => {
		if (id) {
			dispatch(fetchSingleProduct(id));
		}
	}, [dispatch, id]);

	useEffect(() => {
		if (singleProduct) {
			setProductToEdit({
				...productToEdit,
				name: singleProduct?.name,
				price: singleProduct?.price,
				quantity: singleProduct?.quantity,
				expiryDate: singleProduct?.expiryDate,
			});
		}
	}, [singleProduct]);
	return (
		<div className="flex items-center justify-center h-[90vh] w-full p-4 my-14">
			<form
				onSubmit={handleEditProduct}
				name="edit-product-form"
				className="flex flex-col gap-6  w-[100%] h-fit sm:w-[80%] lg:w-[70%] xl:w-[50%] 2xl:w-fit shadow-2xl px-8 py-4 sm:px-16 sm:py-8 2xl:p-20 2xl:text-2xl  rounded-lg"
			>
				<h1 className="text-center font-semibold text-lg md:text-2xl">
					Edit Product
				</h1>
				<label htmlFor="name" className="flex flex-col gap-2">
					Name *
					<input
						className="input"
						id="name"
						type="text"
						name="name"
						value={name || ''}
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
						value={price || ''}
						onChange={handleInputChange}
						onWheel={(e) => e.target.blur()}
					/>
				</label>
				<label htmlFor="quantity" className="flex flex-col gap-2">
					Quantity *
					<input
						className="input"
						id="quantity"
						type="number"
						name="quantity"
						value={quantity || ''}
						onChange={handleInputChange}
						onWheel={(e) => e.target.blur()}
					/>
				</label>
				<label htmlFor="expiry-date" className="flex flex-col gap-2">
					Expiry Date *
					<input
						className="input"
						id="expiry-date"
						type="date"
						name="expiryDate"
						value={expiryDate?.split('T')[0] || ''}
						onChange={handleInputChange}
					/>
				</label>
				<div className="text-red-500">{error}</div>
				<button
					type="submit"
					className="bg-background text-textColor p-2  font-semibold rounded-full mt-1"
				>
					Edit Product
				</button>
			</form>
		</div>
	);
};

export default ProductEditPage;
