'use client';

const AddProductPage = ({ isEditForm }) => {
	return (
		<div className="flex items-center justify-center h-fit w-full p-4 ">
			<form
				name="add-product-form"
				className="flex flex-col gap-6 sm:gap-4 w-[100%] sm:w-fit shadow-2xl px-8 py-4 sm:px-16 sm:py-8 rounded-lg"
			>
				<h1 className="text-center font-semibold text-lg md:text-2xl">
					{isEditForm ? 'Edit Product' : 'Add Product'}
				</h1>
				<label htmlFor="name" className="flex flex-col gap-2">
					Name
					<input className="input" id="name" type="text" />
				</label>
				<label htmlFor="price" className="flex flex-col gap-2">
					Price
					<input className="input" id="price" type="number" />
				</label>
				<label htmlFor="quantity" className="flex flex-col gap-2">
					Quantity
					<input className="input" id="quantity" type="number" />
				</label>
				<label htmlFor="expiry-date" className="flex flex-col gap-2">
					Expiry Date
					<input className="input" id="expiry-date" type="date" />
				</label>
				{isEditForm ? (
					<button className="bg-background text-textColor p-2  font-semibold rounded-full mt-1">
						Edit Product
					</button>
				) : (
					<button className="bg-background text-textColor p-2  font-semibold rounded-full mt-1">
						Add Product
					</button>
				)}
			</form>
		</div>
	);
};

export default AddProductPage;
