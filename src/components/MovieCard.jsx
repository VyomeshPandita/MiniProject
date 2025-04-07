import "../css/MovieCard.css"
import { useMovieContext } from "../contexts/MovieContext"

function MovieCard({movie}) {
    const {isFavorite, addToFavorites, removeFromFavorites, isInWatchlist, addToWatchlist, removeFromWatchlist, rateMovie, getRating} = useMovieContext()
    const favorite = isFavorite(movie.imdbID)
    const inWatchlist = isInWatchlist(movie.imdbID)
    const rating = getRating(movie.imdbID)

    function onFavoriteClick(e) {
        e.preventDefault()
        if (favorite) removeFromFavorites(movie.imdbID)
        else addToFavorites(movie)
    }

    function onWatchlistClick(e) {
        e.preventDefault()
        if (inWatchlist) removeFromWatchlist(movie.imdbID)
        else addToWatchlist(movie)
    }

    function onRatingClick(e, value) {
        e.preventDefault()
        if (value === rating) {
            rateMovie(movie.imdbID, 0)
        } else {
            rateMovie(movie.imdbID, value)
        }
    }

    return <div className="movie-card">
        <div className="movie-poster">
            <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Poster"} alt={movie.Title}/>
            <div className="movie-overlay">
                <div className="action-buttons">
                    <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
                        ♥
                    </button>
                    <button className={`watchlist-btn ${inWatchlist ? "active" : ""}`} onClick={onWatchlistClick}>
                        +
                    </button>
                </div>
                <div className="rating-stars">
                    {[1, 2, 3, 4, 5].map((value) => (
                        <button
                            key={value}
                            className={`star-btn ${value <= rating ? "active" : ""}`}
                            onClick={(e) => onRatingClick(e, value)}
                        >
                            ★
                        </button>
                    ))}
                </div>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            {rating > 0 && <p className="user-rating">Your Rating: {rating}/5</p>}
        </div>
    </div>
}

export default MovieCard