import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosClient from "../src/axiosClient";
import ErrorPage from "../PagesOutlet/ErrorPage";

export default function MovieDetails() {

    const navigate = useNavigate();
    const { id } = useParams();
    const [movie, setMovie] = useState(null); // stato iniziale null

    useEffect(() => {
        axiosClient.get(`/${id}`)
            .then(res => {
                setMovie(res.data); // se il film esiste - ok
            })
            .catch(err => {
                console.error(err);
                setMovie(false); // se NON esiste - pagina errore
            });
    }, [id]);

    // Film non trovato
    if (movie === false) {
        return <ErrorPage />;
    }

    // Caricamento
    if (movie === null) {
        return <h2>Loading movie...</h2>;
    }

    // FILM TROVATO - mostra dettagli
    return (
        <div>
            <h1>{movie.title}</h1>

            <p><strong>Director:</strong> {movie.director}</p>
            <p><strong>Genre:</strong> {movie.genre}</p>
            <p><strong>Year:</strong> {movie.release_year}</p>
            <p><strong>Abstract:</strong> {movie.abstract}</p>

            <img
                src={`http://localhost:3000/img/movies_cover/${movie.image}`}
                alt={movie.title}
                width="300"
                style={{ display: "block", margin: "20px 0" }}
            />


            <h2>Reviews</h2>

            {movie.reviews && movie.reviews.length > 0 ? (
                <ul>
                    {movie.reviews.map(review => (
                        <li key={review.id}>
                            <strong>Vote:</strong> {review.vote} ⭐
                            <br />
                            <em>{review.text}</em>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No reviews for this movie yet.</p>
            )}



            <button
                className="btn btn-secondary mt-3"
                onClick={() => navigate(-1)}
            >
                ← Back to Movies
            </button>

        </div>
    );
}
