import React, { useState } from 'react';
import axios from 'axios';

const SearchPage: React.FC = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<any[]>([]);

    const searchAnime = async () => {
        try {
            const response = await axios.get(`https://kitsu.io/api/edge/anime?filter[text]=${query}`);
            setResults(response.data.data);
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for an anime..."
            />
            <button onClick={searchAnime}>Search</button>
            <div>
                {results.map(anime => (
                    <div key={anime.id}>
                        <h2>{anime.attributes.titles.en}</h2>
                        <img src={anime.attributes.posterImage.small} alt="Poster" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchPage;
