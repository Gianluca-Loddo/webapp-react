import { useEffect, useState } from "react";
import axiosClient from "../src/axiosClient";

export default function MovieList() {
    console.log("MOVIELIST CARICATA!")

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axiosClient.get("/")
            .then(res => {
                console.log("FILM FROM BACKEND:", res.data);
                setMovies(res.data);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h1>MOVIE LIST</h1>

            {movies.map(movie => (
                <div key={movie.id}>
                    <h3>{movie.title}</h3>
                    <p>{movie.director}</p>
                </div>
            ))}
        </div>
    );
}
