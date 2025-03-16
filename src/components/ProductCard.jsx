import { calculateDaysToExpire } from '@/utils/calculateExpiry';
import Link from 'next/link';
import { MdOutlineModeEdit } from 'react-icons/md';

const ProductCard = ({ product }) => {
	return (
		<div className="bg-gray-100 shadow-md">
			<div
				className={`text-lg font-semibold text-center pt-4 px-2 mb-2 ${calculateDaysToExpire(product.expiryDate) < 20 ? 'text-red-500' : calculateDaysToExpire(product.expiryDate) < 40 ? 'text-yellow-500' : 'text-green-400'}`}
			>
				{calculateDaysToExpire(product.expiryDate) > 0
					? `Expiring in ${calculateDaysToExpire(product.expiryDate)} days`
					: `Expired ${calculateDaysToExpire(product.expiryDate)} days ago`}
			</div>
			<div
				className={`flex flex-col gap-4 sm:flex-row p-3 border-b-4 sm:border-b-2 last:border-b-0 products-center mb-4 sm:mb-2 `}
			>
				<div className="w-full sm:flex-1 sm:w-auto flex justify-between text-center gap-4 sm:block">
					<span className="sm:hidden font-semibold">Name: </span>
					{product.name}
				</div>
				<div className="w-full sm:flex-1 sm:w-auto flex justify-between text-center gap-4 sm:block">
					<span className="sm:hidden font-semibold">Price: </span>
					{product.price}
				</div>
				<div className="w-full sm:flex-1 sm:w-auto flex justify-between text-center gap-4 sm:block">
					<span className="sm:hidden font-semibold">Quantity: </span>
					<span
						className={`font-semibold ${product.quantity < 10 ? 'text-red-500' : 'text-green-500'}`}
					>
						{product.quantity}
					</span>
				</div>
				<div className="w-full sm:flex-1 sm:w-auto flex justify-between text-center gap-4 sm:block">
					<span className="sm:hidden font-semibold">Edit: </span>
					<button>
						<Link href={`/edit/${product?._id}`}>
							<MdOutlineModeEdit size={20} />
						</Link>
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
