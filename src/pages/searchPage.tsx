import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
        <div className="flex flex-col items-center p-6">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for an anime..."
                className="p-2 border border-gray-300 rounded-md"
            />
            <button onClick={searchAnime} className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-md">
                Search
            </button>
            <div className="mt-4 w-full">
                {results.map(anime => (
                    <div key={anime.id} className="p-4 border-b border-gray-200 cursor-pointer" onClick={() => viewDetails(anime.id)}>
                        <h2 className="text-lg font-bold">{anime.attributes.titles.en}</h2>
                        <img src={anime.attributes.posterImage.small} alt="Poster" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchPage;
