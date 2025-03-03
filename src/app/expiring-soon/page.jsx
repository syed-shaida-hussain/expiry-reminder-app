import Filters from '../components/Filters';
import ProductCard from '../components/ProductCard';
import { dummyData } from '../constants/constants';

const ExpiringSoonPage = () => {
	return (
		<div>
			<Filters />
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
							<div className="flex-1 text-center">Days Till Expiry</div>
							<div className="flex-1 text-center">Edit</div>
						</div>
						{dummyData.map((product) => (
							<ProductCard key={product.id} product={product} />
						))}
					</div>
				</div>
			</main>
		</div>
	);
};

export default ExpiringSoonPage;
