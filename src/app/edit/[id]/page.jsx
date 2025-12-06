'use client';

import {
  deleteProduct,
  editProduct,
  fetchSingleProduct,
} from '@/features/products/productSlice';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { use, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

const ProductEditPage = ({ params }) => {
  const { id } = use(params);

  const [error, setError] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const initialState = {
    name: '',
    price: '',
    quantity: '',
    expiryDate: '',
  };

  const [productToEdit, setProductToEdit] = useState(initialState);
  const { singleProduct } = useSelector((store) => store.product);
  const { name, price, quantity, expiryDate } = productToEdit;

  const dispatch = useDispatch();
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductToEdit({ ...productToEdit, [name]: value });
  };

  const handleEditProduct = async (e) => {
    e.preventDefault();
    setIsEditing(true);

    try {
      const res = await axios.put(`/api/products/edit/${id}`, productToEdit);

      if (res?.status === 200) {
        setError('');
        toast.success('Product edited successfully');
        dispatch(editProduct({ id, updatedProduct: res?.data?.updatedProduct }));
        router.push('/products');
      }
    } catch (error) {
      setError(error?.response?.data?.message || 'Something went wrong');
      console.log(error.response);
    } finally {
      setIsEditing(false);
    }
  };

  const handleDeleteProduct = async () => {
    setIsDeleting(true);

    try {
      const res = await axios.delete(`/api/products/delete/${id}`);
      if (res.status === 200) {
        toast.success('Product deleted successfully');
        dispatch(deleteProduct(id));
        router.push('/products');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsDeleting(false);
    }
  };

  useEffect(() => {
    if (id) dispatch(fetchSingleProduct(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (singleProduct) {
      setProductToEdit({
        name: singleProduct?.name,
        price: singleProduct?.price,
        quantity: singleProduct?.quantity,
        expiryDate: singleProduct?.expiryDate,
      });
    }
  }, [singleProduct]);

  return (
    <div className="flex items-center justify-center min-h-[90vh] w-full p-4 bg-background text-textColor">
      <form
        onSubmit={handleEditProduct}
        name="edit-product-form"
        className="flex flex-col gap-6 w-full sm:w-4/5 lg:w-3/5 xl:w-1/2 2xl:w-2/5 shadow-2xl px-8 py-6 sm:px-16 sm:py-8 rounded-xl bg-surfaceColor"
      >
        <h1 className="text-center font-semibold text-lg md:text-2xl">Edit Product</h1>

        {/* Name */}
        <label htmlFor="name" className="flex flex-col gap-2">
          Name *
          <input
            className="bg-surfaceColor text-textColor border border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-accent"
            id="name"
            type="text"
            name="name"
            value={name || ''}
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
            value={price || ''}
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
            value={quantity || ''}
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
            value={expiryDate?.split('T')[0] || ''}
            onChange={handleInputChange}
          />
        </label>

        {/* Error */}
        {error && <div className="text-red-500 text-center">{error}</div>}

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          {/* Edit Button */}
          <button
            type="submit"
            disabled={isEditing || isDeleting}
            className={`bg-background text-textColor p-3 font-semibold rounded-full flex justify-center items-center transition
              ${isEditing ? 'bg-accent/70 cursor-not-allowed' : 'hover:bg-accent-dark'}
            `}
          >
            {isEditing ? (
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 border-2 border-textColor border-t-transparent rounded-full animate-spin"></div>
                Editing Product...
              </div>
            ) : (
              'Edit Product'
            )}
          </button>

          {/* Delete Button */}
          <button
            type="button"
            disabled={isDeleting || isEditing}
            onClick={handleDeleteProduct}
            className={`bg-red-500 text-white p-3 font-semibold rounded-full flex justify-center items-center transition
              ${isDeleting ? 'bg-red-700 cursor-not-allowed' : 'hover:bg-red-600'}
            `}
          >
            {isDeleting ? (
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Deleting Product...
              </div>
            ) : (
              'Delete Product'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductEditPage;
