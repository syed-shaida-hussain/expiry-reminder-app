'use client';

import Footer from '@/components/Footer';
import React from 'react';

const features = [
  {
    title: 'Product Tracking',
    description:
      'Easily add, edit, and delete products in your inventory, keeping everything organized.',
  },
  {
    title: 'Expiry Reminders',
    description:
      'Stay informed about products nearing their expiration dates with timely notifications.',
  },
  {
    title: 'Expiring Soon Section',
    description:
      'Products close to expiry are automatically moved to a separate section for quick action.',
  },
  {
    title: 'Put on Sale',
    description:
      'Reduce waste and maximize profits by offering discounts on expiring products.',
  },
];

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-textColor">
      {/* Hero Section */}
      <section className="py-16 px-6 md:px-16 lg:px-32 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          About ExpireTrack
        </h1>
        <p className="max-w-3xl mx-auto text-base md:text-lg lg:text-xl leading-relaxed text-gray-300">
          ExpireTrack is an intelligent inventory management platform designed to
          help businesses minimize loss, maximize profit, and simplify inventory
          management. Our app keeps track of product expiry dates, automates
          reminders, and provides actionable insights to optimize your operations.
        </p>
      </section>

      {/* Features Section */}
      <section className="py-12 px-6 md:px-16 lg:px-32">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
          Key Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-surfaceColor p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-full bg-accent/20 text-accent text-2xl font-bold">
                {feature.title.charAt(0)}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Details */}
      <section className="py-12 px-6 md:px-16 lg:px-32">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
          Why Choose ExpireTrack?
        </h2>
        <p className="max-w-4xl mx-auto text-base md:text-lg lg:text-xl leading-relaxed mb-6 text-center text-gray-300">
          Managing inventory manually can be time-consuming and prone to errors. 
          ExpireTrack automates the process, ensuring you never miss an important expiry date. 
          Whether you run a small store or a large business, our platform helps you stay ahead, 
          reduce wastage, and optimize sales.
        </p>
        <p className="max-w-4xl mx-auto text-base md:text-lg lg:text-xl leading-relaxed text-center text-gray-300">
          With real-time updates, easy-to-use dashboards, and smart notifications, 
          ExpireTrack empowers your team to make smarter decisions and increase profitability.
        </p>
      </section>

      {/* Who Can Benefit */}
      <section className="py-12 px-6 md:px-16 lg:px-32">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
          Who Can Benefit?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-surfaceColor p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 text-center">
            <h3 className="font-bold text-xl mb-2">Small Business Owners</h3>
            <p className="text-gray-300">
              Manage your inventory efficiently, reduce wastage, and save time.
            </p>
          </div>
          <div className="bg-surfaceColor p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 text-center">
            <h3 className="font-bold text-xl mb-2">Retail Stores</h3>
            <p className="text-gray-300">
              Keep track of expiring products and offer discounts strategically.
            </p>
          </div>
          <div className="bg-surfaceColor p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 text-center">
            <h3 className="font-bold text-xl mb-2">Warehouses</h3>
            <p className="text-gray-300">
              Optimize inventory rotation and reduce losses due to expired stock.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
