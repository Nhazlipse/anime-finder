import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DetailsPage: React.FC = () => {
    const { animeId } = useParams();
    const [animeDetails, setAnimeDetails] = useState<any>(null);

    useEffect(() => {
        const fetchAnimeDetails = async () => {
            try {
                const response = await axios.get(`https://kitsu.io/api/edge/anime/${animeId}`);
                setAnimeDetails(response.data);
            } catch (error) {
                console.error("Error fetching anime details: ", error);
            }
        };

        fetchAnimeDetails();
    }, [animeId]);

    if (!animeDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            
        </div>
    );
};

export default DetailsPage;
