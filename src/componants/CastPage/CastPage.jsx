import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { fetchActorDetails } from "../../api/TMDB/fetchActorDetails";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "../../css/castPage.css";

export default function CastPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [actor, setActor] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showFullBio, setShowFullBio] = useState(false);
    const visibleMoviesCount = 5;

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const data = await fetchActorDetails(id);
                setActor(data);
                setError(null);
            } catch (err) {
                setError("Error fetching actor details");
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) =>
            Math.min(prevIndex + 1, actor.known_for.length - visibleMoviesCount)
        );
    };

    const generateSlug = (title) => {
        return title
            .toLowerCase()
            .replace(/ /g, "-")
            .replace(/[^\w-]+/g, "");
    };

    const visibleMovies = actor.known_for.slice(currentIndex, currentIndex + visibleMoviesCount);

    const toggleBio = () => {
        setShowFullBio(!showFullBio);
    };

    const shortBio = actor.biography.split(" ").slice(0, 50).join(" ") + "...";


    return (
        <>
            <div className="castPage">

                <img
                    src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
                    alt={actor.name}
                />
                <div className="castPage-info">
                    <h1>{actor.name}</h1>
                    <p>{showFullBio ? actor.biography : shortBio}</p>
                    {actor.biography.split(" ").length > 50 && (
                        <span onClick={toggleBio} className="toggleBio">
                            {showFullBio ? "Read Less" : "Read More"}
                        </span>
                    )}
                    <p>Birthdate: {actor.birthday}</p>
                    <p>Place of Birth: {actor.place_of_birth}</p>
                    <p>Popularity: {actor.popularity}</p>
                    <p>Known For: {actor.known_for_department}</p>
                    <p>Also Known As: {actor.also_known_as.join(", ")}</p>
                    <div className="movieCredits">
                        <div className="movieCredits-header">
                            <h2>Known For: </h2>
                            <div className="movieCredits-navigation">
                                <FaArrowLeft onClick={handlePrevClick} className="arrow" />
                                <FaArrowRight onClick={handleNextClick} className="arrow" />
                            </div>
                        </div>
                        <ul>
                            {visibleMovies.map((movie) => (
                                <li key={movie.id} onClick={() => navigate(`/movies/${generateSlug(movie.title)}`, { state: { item: movie } })}>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                                        alt={movie.title}
                                    />
                                    <p>{movie.title}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}