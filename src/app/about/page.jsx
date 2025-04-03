import React from 'react';

const AboutPage = () => {
	return (
		<div className="flex flex-col justify-center gap-5 px-6 md:px-10 lg:px-20 py-10 ">
			<h1 className="text-lg md:text-2xl lg:text-3xl text-center">
				About ExpireTrack
			</h1>
			<h2 className="text-base md:text-xl lg:text-2xl">
				Minimize Loss, Maximize Profit :
			</h2>
			<p>
				Our inventory management app is designed to help business owners keep
				track of product expiry dates and minimize losses due to expired stock.
				By providing timely reminders and an intuitive interface, we make it
				easier for you to manage your inventory efficiently.
			</p>
			<h2 className="text-base md:text-xl lg:text-2xl">Key Features : </h2>
			<ul className="list-disc flex flex-col gap-3">
				<li>
					<span className="font-bold">Product Tracking : </span> Easily add,
					edit, and delete products in your inventory.
				</li>
				<li>
					<span className="font-bold">Expiry Reminders : </span> Stay informed
					about products nearing their expiration dates.
				</li>
				<li>
					<span className="font-bold">Expiring Soon Section : </span> Products
					close to expiry are automatically moved to a separate section for
					quick action.
				</li>
				<li>
					<span className="font-bold">Put on Sale : </span> Reduce waste and
					maximize profits by offering discounts on expiring products.
				</li>
			</ul>
			<h2 className="text-base md:text-xl lg:text-2xl">Why Choose Our App?</h2>
			<p>
				Managing inventory manually can be time-consuming and prone to errors.
				Our app automates the process, ensuring you never miss an important
				expiry date. Whether you own a small store or a large business, our tool
				helps you stay ahead, reduce wastage, and optimize sales.
			</p>
		</div>
	);
};

export default AboutPage;
