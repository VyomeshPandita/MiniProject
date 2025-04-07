import {createContext, useState, useContext, useEffect} from "react"

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])
    const [watchlist, setWatchlist] = useState([])
    const [ratings, setRatings] = useState({})

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites")
        const storedWatchlist = localStorage.getItem("watchlist")
        const storedRatings = localStorage.getItem("ratings")
        if (storedFavs) setFavorites(JSON.parse(storedFavs))
        if (storedWatchlist) setWatchlist(JSON.parse(storedWatchlist))
        if (storedRatings) setRatings(JSON.parse(storedRatings))
    }, [])

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    useEffect(() => {
        localStorage.setItem('watchlist', JSON.stringify(watchlist))
    }, [watchlist])

    useEffect(() => {
        localStorage.setItem('ratings', JSON.stringify(ratings))
    }, [ratings])

    const addToFavorites = (movie) => {
        if (!isFavorite(movie.imdbID)) {
            setFavorites(prev => [...prev, movie])
        }
    }

    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.imdbID !== movieId))
    }
    
    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.imdbID === movieId)
    }

    const addToWatchlist = (movie) => {
        if (!isInWatchlist(movie.imdbID)) {
            setWatchlist(prev => [...prev, movie])
        }
    }

    const removeFromWatchlist = (movieId) => {
        setWatchlist(prev => prev.filter(movie => movie.imdbID !== movieId))
    }

    const isInWatchlist = (movieId) => {
        return watchlist.some(movie => movie.imdbID === movieId)
    }

    const getWatchlistCount = () => {
        return watchlist.length
    }

    const rateMovie = (movieId, rating) => {
        setRatings(prev => ({
            ...prev,
            [movieId]: rating
        }))
    }

    const getRating = (movieId) => {
        return ratings[movieId] || 0
    }

    const value = {
        favorites,
        watchlist,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
        addToWatchlist,
        removeFromWatchlist,
        isInWatchlist,
        getWatchlistCount,
        rateMovie,
        getRating
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}