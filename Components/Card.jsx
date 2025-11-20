import { Link } from "react-router-dom";

export default function Card({ id, title, director, image }) {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img
                className="card-img-top"
                src={`http://localhost:3000/img/movies_cover/${image}`}
                alt={title}
            />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text text-muted">
                    {director}
                </p>
                <Link to={`/movies/${id}`} className="btn btn-primary">
                    Details
                </Link>
            </div>
        </div>
    );
}
