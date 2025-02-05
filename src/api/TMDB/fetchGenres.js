const API_KEY = '5d591122225247f2e5080c55b838dad4';
const BASE_URL = "https://api.themoviedb.org/3";

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
