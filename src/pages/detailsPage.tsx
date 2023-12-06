import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import LoadingComponent from '../components/Loading';
import Navbar from '../components/Navbar';

const DetailsPage: React.FC = () => {
    const { animeId } = useParams<{ animeId: string }>();
    const [animeDetails, setAnimeDetails] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const fetchAnimeDetails = async () => {
            try {
                const response = await axios.get(`https://kitsu.io/api/edge/anime/${animeId}`);
                setAnimeDetails(response.data);
            } catch (error) {
                console.error("Error fetching anime details: ", error);
                setError('Error fetching anime details. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchAnimeDetails();
    }, [animeId]);

    if (loading) {
        return <LoadingComponent />;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!animeDetails || !animeDetails.data || !animeDetails.data.attributes) {
        return <div>Error: Anime details not found.</div>;
    }

    const { attributes } = animeDetails.data;

    return (
        <div className="bg-gray-100 min-h-screen p-8">
        <Navbar />
            <div className="container mx-auto">
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="lg:col-span-1">
                            <img src={attributes.posterImage.large} alt="Poster" className="w-full h-auto shadow-lg rounded-lg" />
                        </div>
                        <div className="lg:col-span-1">
                            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">{attributes.canonicalTitle}</h1>
                            <p className="text-gray-700 text-lg mb-6">{attributes.description}</p>
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="text-gray-700">
                                    <strong>Start Date:</strong> {attributes.startDate}
                                </div>
                                <div className="text-gray-700">
                                    <strong>End Date:</strong> {attributes.endDate}
                                </div>
                                <div className="text-gray-700">
                                    <strong>Episode Count:</strong> {attributes.episodeCount}
                                </div>
                                <div className="text-gray-700">
                                    <strong>Average Rating:</strong> {attributes.averageRating}
                                </div>
                                <div className="text-gray-700">
                                    <strong>Age Rating:</strong> {attributes.ageRatingGuide}
                                </div>
                                <div className="text-gray-700">
                                    <strong>Status:</strong> {attributes.status}
                                </div>
                            </div>
                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">Genres</h2>
                                <ul className="list-disc list-inside text-gray-700">
                                    {attributes.genres && attributes.genres.map((genre: any) => (
                                        <li key={genre.id}>{genre.attributes.name}</li>
                                    ))}
                                </ul>
                            </div>
                            <Link to="/search" className="inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                                Back to Search
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;
