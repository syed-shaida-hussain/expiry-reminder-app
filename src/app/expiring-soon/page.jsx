'use client';

import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../../components/ProductCard';
import { useEffect } from 'react';
import { fetchExpiringSoonProducts } from '@/features/products/productSlice';

const ExpiringSoonPage = () => {
	const { expiringSoonProducts } = useSelector((store) => store.product);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchExpiringSoonProducts());
	}, [dispatch]);
	return (
		<div>
			<h1 className="text-lg md:text-2xl lg:text-3xl my-8 text-center">
				Expiring soon items
			</h1>
			<main className="px-4">
				<div className="overflow-x-auto">
					<div className="min-w-full shadow-md rounded-lg overflow-hidden">
						<div className="hidden sm:flex bg-background text-textColor p-3 font-semibold">
							<div className="flex-1 text-center">Name</div>
							<div className="flex-1 text-center">Price</div>
							<div className="flex-1 text-center">Quantity</div>
							<div className="flex-1 text-center">Edit</div>
						</div>
						{expiringSoonProducts?.map((product) => (
							<ProductCard key={product._id} product={product} />
						))}
					</div>
				</div>
			</main>
		</div>
	);
};

export default ExpiringSoonPage;
