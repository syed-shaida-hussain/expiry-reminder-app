'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginUser } from '@/features/user/userSlice';
import toast from 'react-hot-toast';

const LoginPage = () => {
  const [user, setUser] = useState({ username: '', password: '' });
  const [error, setError] = useState({
    usernameError: '',
    passwordError: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();

  // Frontend Validation
  const validate = () => {
    let isValid = true;
    const newErrors = { usernameError: '', passwordError: '' };

    if (!user.username.trim()) {
      newErrors.usernameError = 'Username is required';
      isValid = false;
    }

    if (!user.password.trim()) {
      newErrors.passwordError = 'Password is required';
      isValid = false;
    } else if (user.password.length < 6) {
      newErrors.passwordError = 'Password must be at least 6 characters';
      isValid = false;
    }

    setError(newErrors);
    return isValid;
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const res = await axios.post('/api/user/login', user, {
        withCredentials: true,
      });

      if (res.status === 200) {
        toast.success('Login successful');
        dispatch(loginUser(res.data.user));
        setError({ usernameError: '', passwordError: '' });
        router.refresh();
      }
    } catch (err) {
      setError({
        usernameError: err?.response?.data?.errors?.username || '',
        passwordError: err?.response?.data?.errors?.password || '',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex items-center justify-center min-h-[90vh] w-full p-4 bg-background text-textColor">
      <form
        className="shadow-2xl rounded-xl px-8 py-10 w-full max-w-md flex flex-col gap-5 bg-surfaceColor"
        onSubmit={handleLoginSubmit}
      >
        <h1 className="text-4xl font-semibold text-center">Login</h1>

        {/* Username */}
        <div className="flex flex-col gap-1">
          <label htmlFor="username" className="text-lg font-medium">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            className={`bg-surfaceColor text-textColor border border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-accent placeholder-gray-400 ${
              error.usernameError ? 'border-red-500' : ''
            }`}
            value={user.username}
            onChange={handleUserChange}
          />
          {error.usernameError && (
            <p className="text-sm text-red-500">{error.usernameError}</p>
          )}
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="text-lg font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            className={`bg-surfaceColor text-textColor border border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-accent placeholder-gray-400 ${
              error.passwordError ? 'border-red-500' : ''
            }`}
            value={user.password}
            onChange={handleUserChange}
          />
          {error.passwordError && (
            <p className="text-sm text-red-500">{error.passwordError}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 rounded-lg font-semibold flex justify-center items-center transition bg-background text-textColor
            ${isSubmitting ? 'bg-accent/70 cursor-not-allowed' : 'hover:bg-accent-dark'}
          `}
        >
          {isSubmitting ? (
            <div className="h-5 w-5 border-2 border-textColor border-t-transparent rounded-full animate-spin"></div>
          ) : (
            'Login'
          )}
        </button>

        {/* Signup Link */}
        <p className="text-center text-textColor">
          Not a user?{' '}
          <Link
            href="/signup"
            className="underline"
            style={{ color: 'var(--link-color)' }}
          >
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
