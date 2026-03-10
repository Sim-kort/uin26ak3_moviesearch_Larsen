import { useEffect, useState} from 'react'
import MovieList from '../components/MovieList'

export default function Home() {

    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState("")
    function handlechange(e) {
        setSearch(e.target.value);
    }
    const apiKey = import.meta.env.VITE_APP_API_KEY

    const getAllMovies = async ()=> {
        const response = await fetch(`http://www.omdbapi.com/?s=James+Bond&apikey=${apiKey}` )
        const data = await response.json()

        setMovies(data.Search)

        console.log(data)
    }

   useEffect(() => {
        getAllMovies()
    }, [])

    useEffect(() => {
        if (search.length >= 3) {
            const searchMovies = async () => {
                const response = await fetch(`http://www.omdbapi.com/?s=${search}&apikey=${apiKey}`)
                const data = await response.json()

                setMovies(data.Search)
            }
            searchMovies()
        }
    }, [search])
    //hør om koden fra linje 26-36 er relevant også be om forklaring
        

    return (
        <main>
            <h1>Filmer</h1>
                <form>
                    <input type="text" id="text" placeholder="Søk etter film" value={search} onChange={handlechange} />
                </form>
            <section>
                <MovieList movies={movies} />
            </section>
        </main>
    )
} 