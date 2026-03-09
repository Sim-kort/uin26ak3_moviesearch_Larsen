import { useEffect, useState} from 'react'
import MovieList from "../components/MovieList"

export default function Home() {

    const [movies, setMovies] = useState([])
    const apiKey = import.meta.env.VITE_APP_API_KEY

    const getAllMovies = async ()=> {
        const response = await fetch('http://www.omdbapi.com/?s=James+Bond&apikey=66bd1482' )
        const data = await response.json()

        setMovies(data.Search)

        console.log(data)
    }

    useEffect(() => {
        getAllMovies()
    }, [])

    return (
        <main>
            <h1>Filmer</h1>
            <section>
                <MovieList movies={movies} />
            </section>
        </main>
    )
} 