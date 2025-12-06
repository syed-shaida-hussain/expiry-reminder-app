import Link from 'next/link';
import Footer from '@/components/Footer';

const LandingPage = () => {
	return (
		<div className="flex flex-col min-h-screen bg-background text-textColor">
			{/* Hero Section */}
			<section className="flex flex-col items-center text-center px-6 md:px-20 py-20 gap-6 bg-background">
				<h1 className="text-4xl md:text-6xl font-bold leading-tight">
					ExpireTrack
				</h1>
				<p className="text-lg md:text-xl text-gray-300 max-w-2xl">
					Minimize Loss, Maximize Profit. Track your inventory efficiently and
					stay ahead of product expiry dates.
				</p>
				<div className="flex flex-col sm:flex-row gap-4 mt-6">
					<Link
						href="/add-product"
						className="border border-accent font-semibold px-6 py-3 rounded-lg shadow text-center transition-colors duration-300 hover:bg-gray-300 hover:text-background"
					>
						Get Started
					</Link>
					<Link
						href="/about"
						className="border border-accent font-semibold px-6 py-3 rounded-lg text-center transition-colors duration-300 hover:bg-gray-300 hover:text-background"
					>
						Learn More
					</Link>
				</div>
			</section>

			{/* Features Section */}
			<section className="px-6 md:px-20 py-10 ">
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
					Key Features
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
					<div className="flex flex-col items-center text-center p-6 bg-surfaceColor rounded-xl shadow hover:shadow-lg transition">
						<h3 className="font-semibold text-xl mb-2">Product Tracking</h3>
						<p>Easily add, edit, and delete products in your inventory.</p>
					</div>
					<div className="flex flex-col items-center text-center p-6 bg-surfaceColor rounded-xl shadow hover:shadow-lg transition">
						<h3 className="font-semibold text-xl mb-2">Expiry Reminders</h3>
						<p>Stay informed about products nearing their expiration dates.</p>
					</div>
					<div className="flex flex-col items-center text-center p-6 bg-surfaceColor rounded-xl shadow hover:shadow-lg transition">
						<h3 className="font-semibold text-xl mb-2">Expiring Soon</h3>
						<p>Products close to expiry are highlighted for quick action.</p>
					</div>
					<div className="flex flex-col items-center text-center p-6 bg-surfaceColor rounded-xl shadow hover:shadow-lg transition">
						<h3 className="font-semibold text-xl mb-2">Put on Sale</h3>
						<p>Reduce waste and maximize profits by offering discounts.</p>
					</div>
				</div>
			</section>

			{/* About Section */}
			<section className="px-6 md:px-20 py-10 flex flex-col gap-10 items-center">
				<h2 className="text-3xl md:text-4xl font-bold text-center">
					Why Choose ExpireTrack?
				</h2>
				<p className="text-lg md:text-xl text-gray-300 max-w-3xl text-center">
					Managing inventory manually is time-consuming and prone to errors. Our
					app automates the process, ensuring you never miss an important expiry
					date. Reduce wastage and optimize sales with a few clicks.
				</p>
				<ul className="list-disc list-inside flex flex-col gap-3 text-lg md:text-xl max-w-2xl">
					<li>Easy-to-use, intuitive interface</li>
					<li>Automated notifications and reminders</li>
					<li>Insightful analytics for better decisions</li>
					<li>Perfect for small and large businesses</li>
				</ul>
				<Link
					href="/products"
					className="border border-accent font-semibold px-6 py-3 rounded-lg text-center transition-colors duration-300 hover:bg-gray-300 hover:text-background"
				>
					Start Tracking
				</Link>
			</section>

			{/* Call to Action */}
			<section className=" px-6 md:px-20 py-10 text-center bg-surfaceColor rounded-t-3xl">
				<h2 className="text-3xl md:text-4xl font-bold mb-6">
					Ready to take control of your inventory?
				</h2>
				<p className="text-lg mb-16 text-gray-300 ">
					Start minimizing losses and maximizing profits today with ExpireTrack.
				</p>
				<Link
					href="/add-product"
					className="border border-accent font-semibold px-6 py-3 rounded-lg text-center transition-colors duration-300 hover:bg-gray-300 hover:text-background"
				>
					Get Started Now
				</Link>
			</section>

			<Footer />
		</div>
	);
};

export default LandingPage;
