import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import animeBackground1 from "../assets/img/anime-bg-1.jpg";

const SearchPage: React.FC = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<any[]>([]);
    const navigate = useNavigate();

    const searchAnime = async () => {
        try {
            const response = await axios.get(`https://kitsu.io/api/edge/anime?filter[text]=${query}`);
            setResults(response.data.data);
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };

    const viewDetails = (animeId: number) => {
        navigate(`/anime/${animeId}`);
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="bg-white dark:bg-gray-900 flex flex-col lg:flex-row mb-20">
                <div className="lg:flex-1 p-8">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                        Discover Anime
                    </h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 dark:text-gray-400">
                        Explore a world of anime with us. Find your favorite shows and discover new adventures.
                    </p>
                    <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-start sm:space-y-0 sm:space-x-4">
                        <div className="flex-grow">
                            <input
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search for an anime..."
                                className="w-full p-3 rounded-md shadow-md focus:outline-none focus:ring focus:ring-blue-300 bg-white text-gray-800"
                            />
                        </div>
                        <button
                            onClick={searchAnime}
                            className="py-3 px-5 text-base font-medium text-start text-white rounded-lg bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                        >
                            Search Anime
                        </button>
                    </div>
                </div>
                <div className="md:lg:w-3/5">
                    <img
                        src={animeBackground1}
                        alt="Anime Background 1"
                        className="w-full h-auto mt-6 object-cover rounded-tl-3xl rounded-bl-3xl lg:mt-0"
                    />
                </div>
            </div>

            <div className="max-w-screen-xl mx-auto mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {results.map(anime => (
                    <div key={anime.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105 cursor-pointer" onClick={() => viewDetails(anime.id)}>
                        <div className="relative">
                            <img src={anime.attributes.posterImage.large} alt="Poster" className="w-full h-64 object-cover rounded-t-lg" />
                            <div className="absolute top-0 right-0 p-2 bg-blue-500 text-white rounded-bl-lg">
                                <span className="text-sm font-semibold">Rating</span>
                                <br />
                                <span className="text-lg">{anime.attributes.averageRating} / 100</span>
                            </div>
                        </div>
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">{anime.attributes.titles.en}</h2>
                            <p className="text-gray-600 line-clamp-3">{anime.attributes.synopsis}</p>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-b-lg">
                            <span className="text-white text-sm">{anime.attributes.episodeCount} episodes</span>
                            <button
                                onClick={() => viewDetails(anime.id)}
                                className="py-2 px-4 text-sm font-medium text-white rounded-lg bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                            >
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchPage;
