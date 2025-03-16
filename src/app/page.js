'use client';

import { useEffect, useState } from 'react';
import Filters from '../components/Filters';
import ProductCard from '../components/ProductCard';
import { fetchProducts } from '@/features/products/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredProducts } from '@/utils/getFilteredProducts';
import { getSortedProducts } from '@/utils/getSortedProducts';
import Link from 'next/link';

const Homepage = () => {
	const [filterState, setFilterState] = useState({
		searchQuery: '',
		sortBy: '',
	});
	const { searchQuery, sortBy } = filterState;
	const { products, loading } = useSelector((store) => store.product);
	const dispatch = useDispatch();
	const sortedProducts = getSortedProducts(products, sortBy);
	const filteredProducts = getFilteredProducts(sortedProducts, searchQuery);

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);
	return (
		<>
			{loading ? (
				<div className="h-[80vh] flex justify-center items-center text-2xl font-semibold">
					Fetching Data...
				</div>
			) : (
				<div>
					{filteredProducts?.length > 0 ? (
						<>
							<Filters
								filterState={filterState}
								setFilterState={setFilterState}
							/>
							<h1 className="text-lg md:text-2xl lg:text-3xl my-8 text-center">
								Product list
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
										{filteredProducts?.map((product) => (
											<ProductCard key={product._id} product={product} />
										))}
									</div>
								</div>
							</main>
						</>
					) : (
						<div className="h-[70vh] flex flex-col justify-center gap-3 items-center px-2">
							<h2 className="text-xl text-center font-semibold">
								No products to show here...
							</h2>
							<Link
								href="/add-product"
								className="px-3 py-2 bg-background text-textColor rounded font-semibold"
							>
								Add products
							</Link>
						</div>
					)}
				</div>
			)}
		</>
	);
};

export default Homepage;
