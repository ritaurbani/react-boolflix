import { useState, useEffect } from 'react'
import axios from 'axios'
import MovieCard from './components/MovieCard';

const apiKey = "60b41ff0f572ed7fbac58d938e4544c2";
const apiUrl = "https://api.themoviedb.org/3";

function App() {

  //creo stato per ricerca movies and title
  const [movies, setMovies] = useState([])
  const [searchTitle, setSearchTitle] = useState("")

  //chiamata axios
  const getMovies = () => {
    axios.get(`${apiUrl}/search/movie`, {
      params: {
        api_key: apiKey,
        query: searchTitle
      },
    }).then((resp) => {
      console.log(resp)
      setMovies(resp.data.results)
    })
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <>
      <div className='App'>
        <h2>BoollFix</h2>
        <header className='d-flex justify-content-between'>
          <div>Logo</div>
          <div>
            <input 
            placeholder='search' 
            type="text"
            value={searchTitle}
            onChange={(e) => setSearchTitle(event.target.value)} /> 
            <button className='mx-2' onClick={getMovies}>Search</button>
          </div>
         
        </header>

        <div className='container'>
          {movies.map((movie) => (
            <MovieCard
            key={movie.id}
            movie={movie} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
