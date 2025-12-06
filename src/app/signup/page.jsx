'use client';

import Link from 'next/link';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const SignupPage = () => {
  const [user, setUser] = useState({ username: '', password: '' });
  const [error, setError] = useState({ usernameError: '', passwordError: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();
  const { username, password } = user;
  const { usernameError, passwordError } = error;

  // Frontend Validation
  const validate = () => {
    let isValid = true;
    const newErrors = { usernameError: '', passwordError: '' };

    if (!username.trim()) {
      newErrors.usernameError = 'Username is required';
      isValid = false;
    }

    if (!password.trim()) {
      newErrors.passwordError = 'Password is required';
      isValid = false;
    } else if (password.length < 8) {
      newErrors.passwordError = 'Password must be at least 8 characters long';
      isValid = false;
    }

    setError(newErrors);
    return isValid;
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const res = await axios.post('/api/user/signup', user);

      if (res?.data?.status === 201) {
        toast.success('Signup successful');
        router.push('/login');
      } else {
        setError({
          usernameError: res?.data?.errors?.username || '',
          passwordError: res?.data?.errors?.password || '',
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="flex items-center justify-center min-h-[90vh] w-full p-4 bg-background text-textColor">
      <form
        name="signup-form"
        onSubmit={handleSignupSubmit}
        method="POST"
        className="shadow-2xl rounded-xl px-8 py-10 w-full max-w-md flex flex-col gap-5 bg-surfaceColor"
      >
        <h1 className="text-4xl font-semibold text-center">Signup</h1>

        {/* Username */}
        <div className="flex flex-col gap-1">
          <label htmlFor="username" className="text-lg font-medium">
            Username
          </label>
          <input
            name="username"
            type="text"
            id="username"
            placeholder="Enter your username"
            className={`bg-surfaceColor text-textColor border border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-accent placeholder-gray-400 ${
              usernameError ? 'border-red-500' : ''
            }`}
            value={username}
            onChange={handleUserChange}
          />
          {usernameError && (
            <p className="text-sm text-red-500">{usernameError}</p>
          )}
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="text-lg font-medium">
            Password
          </label>
          <input
            name="password"
            type="password"
            id="password"
            placeholder="Enter your password"
            className={`bg-surfaceColor text-textColor border border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-accent placeholder-gray-400 ${
              passwordError ? 'border-red-500' : ''
            }`}
            value={password}
            onChange={handleUserChange}
          />
          {passwordError && (
            <p className="text-sm text-red-500">{passwordError}</p>
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
            'Signup'
          )}
        </button>

        {/* Login Link */}
        <p className="text-center text-textColor">
          Already a user?{' '}
          <Link
            href="/login"
            className="underline"
            style={{ color: 'var(--link-color)' }}
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignupPage;
