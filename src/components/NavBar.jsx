import { Link } from "react-router-dom";
import { useMovieContext } from "../contexts/MovieContext";
import "../css/Navbar.css"

function NavBar() {
    const { getWatchlistCount } = useMovieContext();
    const watchlistCount = getWatchlistCount();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return <nav className="navbar">
        <Link to="/" className="navbar-brand" onClick={scrollToTop}>
            ROTTEN POTATOES
        </Link>
        <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/favorites" className="nav-link">Favorites</Link>
            <Link to="/watchlist" className="nav-link">
                Watchlist
                {watchlistCount > 0 && <span className="watchlist-count">{watchlistCount}</span>}
            </Link>
            <Link to="/about" className="nav-link">About</Link>
            <a 
                href="https://drive.google.com/file/d/1TvPiPGi009MP9OoxN72klJq54c6kSkAo/view?usp=sharing" 
                className="nav-link portfolio-link" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                Portfolio
            </a>
        </div>
    </nav>
}

export default NavBar