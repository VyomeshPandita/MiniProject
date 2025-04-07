const API_KEY = "4db76c37";
const BASE_URL = "http://www.omdbapi.com/";

export const getPopularMovies = async () => {
  // OMDB doesn't have a direct popular movies endpoint, so we'll fetch some popular movies by search
  const popularTitles = [
    "The Dark Knight",
    "Inception",
    "The Matrix",
    "Forrest Gump",
    "The Godfather",
    "The Shawshank Redemption",
    "Fight Club",
    "Goodfellas",
    "The Lord of the Rings",
    "The Avengers",
    "Spider-Man",
    "Batman Begins",
    "Interstellar",
    "The Departed",
    "Gladiator",
    "The Silence of the Lambs",
    "The Green Mile",
    "The Prestige",
    "Django Unchained",
    "The Wolf of Wall Street",
    "Inglourious Basterds",
    "The Pianist",
    "Memento",
    "The Usual Suspects",
    "Se7en",
    "The Lion King",
    "Titanic",
    "Jurassic Park",
    "Back to the Future"
  ];

  try {
    const movies = await Promise.all(
      popularTitles.map(title =>
        fetch(`${BASE_URL}?apikey=${API_KEY}&t=${encodeURIComponent(title)}`)
          .then(res => res.json())
      )
    );
    return movies.filter(movie => movie.Response !== "False");
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    throw error;
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await fetch(
      `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}`
    );
    const data = await response.json();
    if (data.Response === "False") {
      return [];
    }
    return data.Search;
  } catch (error) {
    console.error("Error searching movies:", error);
    throw error;
  }
};
