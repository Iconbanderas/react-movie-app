import { useState, useEffect } from "react";
import './App.css';
import './search.svg';
import MovieCard from "./MovieCard";


// api string = http://www.omdbapi.com/?i=tt3896198&apikey=59461be7
const API_URL = 'http://www.omdbapi.com/?apikey=59461be7';


const App = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);
    

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
        console.log(data.Search);
    }


    const movie1 = {
        "Title": "Spiderman in Cannes",
        "Year": "2016",
        "imdbID": "tt5978586",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZDlmMGQwYmItNTNmOS00OTNkLTkxNTYtNDM3ZWVlMWUyZDIzXkEyXkFqcGdeQXVyMTA5Mzk5Mw@@._V1_SX300.jpg"
    }

    useEffect(() => {
        searchMovies('Spiderman');
    }, []);
    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input 
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <img 
                    src="{SearchIcon}"
                    alt="Search"
                    onClick={() => searchMovies(searchTerm)}
                 />
            </div>

            {
                movies?.length > 0 ? (
                    <div className="container">
                        {
                            movies.map((movie) => (
                                <MovieCard movie={movie}/>
                            ))
                        }
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )
            }
        </div>
    )
}

export default App;