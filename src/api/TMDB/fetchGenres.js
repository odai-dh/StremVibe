import dotenv from 'dotenv';

dotenv.config();

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = process.env.REACT_APP_TMDB_BASE_URL;


const fetchGenres = async () => {
    try {
        const response = await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.genres;
    } catch (error) {
        console.error("Error fetching genres:", error);
        throw error;
    }
};

export default fetchGenres;
