import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
export default function Movie() {

    const { movie } = useParams()
    const [ movieData, setMovieData] = useState(null)
    
    const apiKey = import.meta.env.VITE_APP_API_KEY

    const getMovie = async ()=> {
        const response = await fetch (`https://www.omdbapi.com/?t=${movie}&apikey=${apiKey}`)
        const data = await response.json()
        setMovieData(data)

        console.log(data)
    }

    console.log(movie)


    useEffect(() => {
        getMovie()
    }, [])

    return (
        <main>
            <h1>Movie</h1>
            <section>
                <article>
                    <h2>{movieData?.Title}</h2>
                    <p>{movieData?.Year}</p>
                    <img src={movieData?.Poster} alt={movieData?.Title} />
                </article>
            </section>
        </main>
    )
}
