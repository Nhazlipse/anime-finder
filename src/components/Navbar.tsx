import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [darkMode, setDarkMode] = useState<boolean>(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (darkMode) {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
    };

    return (
        <nav className={`bg-white dark:bg-gray-900 border-b border-gray-300 dark:border-gray-800 p-4`}>
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className={`text-3xl font-bold text-gray-800 dark:text-white`}>
                    Anime World
                </Link>
                <div className="flex items-center">
                    <button
                        onClick={toggleDarkMode}
                        className={`text-gray-800 dark:text-white p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full focus:outline-none transition duration-300 ease-in-out`}
                    >
                        {darkMode ? 'Light Mode' : 'Dark Mode'}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
