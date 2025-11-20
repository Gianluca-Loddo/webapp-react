import { useEffect, useState } from "react";
import axiosClient from "../src/axiosClient";
import Card from "../Components/Card";

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
            <h1 className="mb-4">MOVIE LIST</h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                {movies.map(movie => (
                    <div key={movie.id} className="col">
                        <Card
                            id={movie.id}
                            title={movie.title}
                            director={movie.director}
                            image={movie.image}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
