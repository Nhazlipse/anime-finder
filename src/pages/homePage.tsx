import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
    const navigate = useNavigate();

    const navigateSearchPage = () => {
        navigate('/search');
    };

    return (
        <div>
            {/* Hero Section */}
            <div className="bg-cover bg-center h-screen relative" style={{ backgroundImage: 'url("/path-to-your-background-image.jpg")' }}>
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                            Welcome to Your App
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8">
                            Discover, Explore, Enjoy
                        </p>
                        <button onClick={navigateSearchPage} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full text-lg sm:text-xl md:text-2xl transition duration-300 ease-in-out transform hover:scale-105">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <section className="py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        About Us
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae accumsan purus.
                    </p>
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-gray-100 py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        Key Features
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
                        {/* Feature 1 */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-2">Feature 1</h3>
                            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        {/* Feature 2 */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-2">Feature 2</h3>
                            <p className="text-gray-700">Nulla vitae accumsan purus.</p>
                        </div>
                        {/* Feature 3 */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-2">Feature 3</h3>
                            <p className="text-gray-700">Suspendisse potenti.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        Contact Us
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-4">
                        Have questions or feedback? We'd love to hear from you!
                    </p>
                    <a href="/contact" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full text-lg sm:text-xl md:text-2xl transition duration-300 ease-in-out transform hover:scale-105">
                        Contact Us
                    </a>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
