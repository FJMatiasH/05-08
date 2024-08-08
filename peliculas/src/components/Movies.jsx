  function ListOfMovies ({movies}){
  return (
    <ul>
    {
    movies.map(movie => (
      <li key={movie.imdbID}>
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
        <img src={movie.Poster} alt={movie.Title}></img>
      </li>
    ))
    }
    </ul>
  )
  }


  function NoMoviesResults (){
  return(
    <p>no se encontraron peliculas para esta busqueda</p>
  )
  }


export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0

  return (
    hasMovies
    ?  <ListOfMovies movies={movies}/>      
    :  <NoMoviesResults/>
  )
}
