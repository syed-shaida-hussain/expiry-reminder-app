'use client';

import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../../components/ProductCard';
import { useEffect } from 'react';
import { fetchExpiringSoonProducts } from '@/features/products/productSlice';
import Link from 'next/link';

const ExpiringSoonPage = () => {
	const { expiringSoonProducts, loading } = useSelector(
		(store) => store.product
	);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchExpiringSoonProducts());
	}, [dispatch]);

	return (
		<div className="min-h-screen bg-background text-textColor px-4 md:px-10 py-10">
			{loading ? (
				<div className="fixed inset-0 flex justify-center items-center bg-background z-50">
					<div className="flex space-x-3">
						<span className="w-4 h-4 bg-white rounded-full animate-bounce loader-delay-0"></span>
						<span className="w-4 h-4 bg-white rounded-full animate-bounce loader-delay-200"></span>
						<span className="w-4 h-4 bg-white rounded-full animate-bounce loader-delay-400"></span>
					</div>
				</div>
			) : expiringSoonProducts?.length > 0 ? (
				<>
					<h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold mb-8">
						Expiring Soon Items
					</h1>
					<main className="overflow-x-auto">
						<div className="min-w-full shadow-md rounded-lg overflow-hidden">
							<div className="hidden sm:flex bg-surface text-textColor p-3 font-semibold rounded-t-lg">
								<div className="flex-1 text-center">Name</div>
								<div className="flex-1 text-center">Price</div>
								<div className="flex-1 text-center">Quantity</div>
								<div className="flex-1 text-center">Edit</div>
							</div>
							{expiringSoonProducts?.map((product) => (
								<ProductCard key={product._id} product={product} />
							))}
						</div>
					</main>
				</>
			) : (
				<div className="h-[70vh] flex flex-col justify-center gap-3 items-center text-center">
					<h2 className="text-xl font-semibold">
						No products to show here...
					</h2>
					<Link
						href="/add-product"
						className="px-4 py-2 bg-accent border border-textColor text-textColor rounded font-semibold hover:bg-accent-dark transition"
					>
						Add Products
					</Link>
				</div>
			)}
		</div>
	);
};

export default ExpiringSoonPage;
