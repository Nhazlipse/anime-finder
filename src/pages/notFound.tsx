import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
    const navigate = useNavigate();   

    const navigateHome = () => {
        navigate('/');
    };

    return (
        <div className="h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-800">404</h1>
                <p className="text-2xl font-light text-gray-600">Page Not Found</p>
                <p className="mt-4 text-gray-500">The page you are looking for does not exist or has been moved.</p>
                <button onClick={navigateHome} className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-md">
                Back to Home
            </button>
            </div>
        </div>
    );
};

export default NotFoundPage;
