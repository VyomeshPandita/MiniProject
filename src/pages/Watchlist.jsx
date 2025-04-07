import { useMovieContext } from "../contexts/MovieContext"
import MovieCard from "../components/MovieCard"
import "../css/Watchlist.css"

function Watchlist() {
    const { watchlist } = useMovieContext()

    return (
        <div className="watchlist-page">
            <h1>My Watchlist</h1>
            {watchlist.length === 0 ? (
                <p className="no-movies">No movies in your watchlist yet.</p>
            ) : (
                <div className="movies-grid">
                    {watchlist.map(movie => (
                        <MovieCard key={movie.imdbID} movie={movie} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Watchlist 