import { Link } from 'react-router-dom'
export default function MovieCard({movie}) {
      return(
            <article key={movie.imdbID}>
                <Link to={`/${movie.Title}`} > 
                <h2>{movie.Title}</h2>
                </Link> 
                <p>{movie.Year}</p>
                <img src={movie.Poster} alt={movie.Title} />
            </article>
        )      
}
//spør om linje 5 om den er relevant eller forklaring på den siden jeg ikke forstår den helt
