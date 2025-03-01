import Filters from './components/Filters';
import ProductCard from './components/ProductCard';

const dummyData = [
	{
		id: 1,
		name: 'namkeen tea',
		price: 600,
		quantity: '50',
		expiryDate: '05/03/2025',
	},
	{
		id: 2,
		name: 'lipton tea',
		price: 400,
		quantity: '30',
		expiryDate: '09/01/2025',
	},
	{
		id: 3,
		name: 'copy',
		price: 60,
		quantity: '1',
		expiryDate: '08/03/2026',
	},
	{
		id: 4,
		name: 'pen',
		price: 10,
		quantity: '10',
		expiryDate: '02/27/2025',
	},
	{
		id: 5,
		name: 'perfume',
		price: 200,
		quantity: '20',
		expiryDate: '02/28/2025',
	},
	{
		id: 6,
		name: 'perfume',
		price: 200,
		quantity: '20',
		expiryDate: '03/28/2025',
	},
	{
		id: 7,
		name: 'perfume',
		price: 200,
		quantity: '20',
		expiryDate: '04/05/2025',
	},
	{
		id: 8,
		name: 'perfume',
		price: 200,
		quantity: '20',
		expiryDate: '03/20/2025',
	},
];

const Homepage = () => {
	return (
		<div>
			<Filters />
			<main className="px-4">
				<div className="overflow-x-auto">
					<div className="min-w-full shadow-md rounded-lg overflow-hidden">
						<div className="hidden sm:flex bg-gray-200 p-3 font-semibold">
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

export default Homepage;
