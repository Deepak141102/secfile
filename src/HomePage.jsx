import React, { useEffect, useState } from 'react';
import "./index.css"
const HomePage = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch('/user')
            .then(res => res.json())
            .then(data => setUser(data));
    }, []);
    const handleLogout = () => {
        window.location.href = '/logout'; // Redirect to the logout route
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-600 via-indigo-600 to-purple-800 p-6">
            <div className="bg-white shadow-xl rounded-lg p-10 md:p-12 max-w-md w-full text-center">
                <h1 className="text-4xl font-bold text-indigo-800 mb-6">Home Page</h1>
                {user ? (
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                            Welcome, <span  className=" text-purple-600">{user.displayName}</span>
                        </h2>
                        <img
                            src={user.photos[0].value}
                            alt="Profile"
                            className="w-32 h-32 rounded-full mx-auto shadow-md mb-6 border-4 border-indigo-500"
                        />
                        <button
                            onClick={handleLogout}
                            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-3 px-6 rounded-lg text-lg font-semibold transition duration-300 transform hover:scale-105"
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <p className="text-gray-500 text-lg">Loading user info...</p>
                )}
            </div>
        </div>
    );
};

export default HomePage;
