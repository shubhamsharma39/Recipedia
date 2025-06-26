import React, { useState } from 'react';

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-sm">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-1">Welcome Back 👋</h2>
        <p className="text-sm text-center text-gray-500 mb-6">Login to continue to Recipedia</p>

        {isLoggedIn ? (
          <>
            <div className="text-center text-green-600 font-medium mb-4">
              You're now logged in ✅
            </div>
            <button
              className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-md font-medium"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-600 mb-1">Username</label>
              <input
                type="text"
                placeholder="Enter username"
                className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-600 mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md font-medium transition"
            >
              Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
