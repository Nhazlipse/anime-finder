import React from 'react';

const NotFoundPage: React.FC = () => {
    return (
        <div className="h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-800">404</h1>
                <p className="text-2xl font-light text-gray-600">Page Not Found</p>
                <p className="mt-4 text-gray-500">The page you are looking for does not exist or has been moved.</p>
            </div>
        </div>
    );
};

export default NotFoundPage;
