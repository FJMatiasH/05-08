import withResults from '../mock/with-results.json'
import withoutResults from '../mock/no-results.json'

export function useMovies (){
    const movies = withResults.Search
  
    const mappedMovies = movies?.map(movie=>({
      id: movie.imdbID,
      title: movie.title,
      year: movie.year,
      poster: movie.poster
    }))

    return {movies: mappedMovies}
  }
  