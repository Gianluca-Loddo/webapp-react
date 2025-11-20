import { Link } from "react-router-dom";

export default function ErrorPage() {
    return (
        <div className="text-center mt-5">
            <h1 className="text-danger">🎞 404 - Movie Not Found 🎞</h1>
            <p className="text-muted">
                The movie you are looking for does not exist or has been removed. ☹
            </p>

            <Link to="/movies" className="btn btn-primary mt-3">
                ← Back to Movies
            </Link>
        </div>
    );
}
