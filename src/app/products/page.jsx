'use client';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import Filters from '@/components/Filters';
import { getSortedProducts } from '@/utils/getSortedProducts';
import { getFilteredProducts } from '@/utils/getFilteredProducts';
import { fetchProducts } from '@/features/products/productSlice';

const ProductPage = () => {
	const [filterState, setFilterState] = useState({
		searchQuery: '',
		sortBy: '',
	});

	const { products, loading } = useSelector((store) => store.product);
	const dispatch = useDispatch();

	const sortedProducts = getSortedProducts(products, filterState.sortBy);
	const filteredProducts = getFilteredProducts(
		sortedProducts,
		filterState.searchQuery
	);

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	return (
		<div className="min-h-screen p-6 bg-background text-textColor">
			{/* Filters */}
			<Filters filterState={filterState} setFilterState={setFilterState} />

			{/* Page Title */}
			<h1 className="text-lg md:text-2xl lg:text-3xl my-4 lg:my-8 text-center font-bold">
				Product List
			</h1>

			{/* Loading state */}
			{loading ? (
				<div className="fixed inset-0 flex justify-center items-center bg-background z-50">
					<div className="flex space-x-3">
						<span className="w-4 h-4 bg-white rounded-full animate-bounce delay-0"></span>
						<span className="w-4 h-4 bg-white rounded-full animate-bounce delay-200"></span>
						<span className="w-4 h-4 bg-white rounded-full animate-bounce delay-400"></span>
					</div>
				</div>
			) : products.length === 0 ? (
				<div className="flex flex-col justify-center gap-3 items-center">
					<h2 className="text-xl font-semibold text-center">
						No products available in the inventory.
					</h2>
					<Link
						href="/add-product"
						className="px-4 py-2 bg-accent border border-textColor text-textColor rounded font-semibold hover:bg-accent-dark transition"
					>
						Add Products
					</Link>
				</div>
			) : filteredProducts.length === 0 ? (
				<div className="h-[40vh] flex flex-col justify-center gap-3 items-center">
					<h2 className="text-xl font-semibold text-center">
						No matching products found.
					</h2>
					<p className="text-gray-400 text-center">
						Try adjusting your filters or search keywords.
					</p>
				</div>
			) : (
				<main className="overflow-x-auto">
					<div className="min-w-full shadow-md rounded-lg overflow-hidden bg-surface">
						{filteredProducts.map((product) => (
							<ProductCard key={product._id} product={product} />
						))}
					</div>
				</main>
			)}
		</div>
	);
};

export default ProductPage;
