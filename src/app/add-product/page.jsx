'use client';

import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';

const AddProductPage = () => {
  const initialState = {
    name: '',
    price: '',
    quantity: '',
    expiryDate: '',
    userId: null,
  };

  const [newProduct, setNewProduct] = useState(initialState);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAddProduct = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await axios.post('/api/products', newProduct);

      if (res?.status === 201) {
        toast.success('Product added successfully');
        setError('');
        setNewProduct(initialState);
      }
    } catch (error) {
      setError(error?.response?.data?.message || 'Something went wrong');
      console.log(error.response);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  return (
    <div className="flex items-center justify-center min-h-[90vh] w-full p-4 bg-background text-textColor">
      <form
        onSubmit={handleAddProduct}
        className="flex flex-col gap-6 w-full sm:w-4/5 lg:w-3/5 xl:w-1/2 2xl:w-2/5 bg-surfaceColor shadow-2xl px-8 py-6 sm:px-16 sm:py-10 rounded-xl"
      >
        <h1 className="text-center font-bold text-2xl sm:text-3xl">Add Product</h1>

        {/* Name */}
        <label htmlFor="name" className="flex flex-col gap-2">
          Name *
          <input
            className="bg-surfaceColor text-textColor border border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-accent"
            id="name"
            type="text"
            name="name"
            value={newProduct.name}
            onChange={handleInputChange}
          />
        </label>

        {/* Price */}
        <label htmlFor="price" className="flex flex-col gap-2">
          Price *
          <input
            className="bg-surfaceColor text-textColor border border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-accent"
            id="price"
            type="number"
            name="price"
            value={newProduct.price}
            onChange={handleInputChange}
            onWheel={(e) => e.target.blur()}
          />
        </label>

        {/* Quantity */}
        <label htmlFor="quantity" className="flex flex-col gap-2">
          Quantity *
          <input
            className="bg-surfaceColor text-textColor border border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-accent"
            id="quantity"
            type="number"
            name="quantity"
            value={newProduct.quantity}
            onChange={handleInputChange}
            onWheel={(e) => e.target.blur()}
          />
        </label>

        {/* Expiry Date */}
        <label htmlFor="expiry-date" className="flex flex-col gap-2">
          Expiry Date *
          <input
            className="bg-surfaceColor text-textColor border border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-accent"
            id="expiry-date"
            type="date"
            name="expiryDate"
            value={newProduct.expiryDate}
            onChange={handleInputChange}
          />
        </label>

        {/* Error */}
        {error && <div className="text-red-500 text-center">{error}</div>}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`bg-background text-white p-3 font-semibold rounded-full mt-2 flex justify-center items-center transition
            ${isSubmitting ? 'bg-accent/70 cursor-not-allowed' : 'hover:bg-accent-dark'}
          `}
        >
          {isSubmitting ? (
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Adding Product...
            </div>
          ) : (
            'Add Product'
          )}
        </button>
      </form>
    </div>
  );
};

export default AddProductPage;
