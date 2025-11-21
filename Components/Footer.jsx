export default function Footer() {
    return (
        <footer className="bg-dark text-white text-center py-3 mt-5">
            <div className="container">

                <p className="mb-1">
                    🎬 <strong>Movie Cinema</strong> — WebApp by Gianluca
                </p>

                <p className="mb-1" style={{ fontSize: "0.9rem" }}>
                    Powered by React • Bootstrap • Express • MySQL
                </p>

                <p className="mb-0" style={{ fontSize: "0.85rem", opacity: 0.8 }}>
                    © {new Date().getFullYear()} All rights reserved.
                </p>

            </div>
        </footer>
    );
}
