import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import MovieCard from './components/MovieCard';
import Header from './components/Header';
import GlobalContext from './context/GlobalContext';

const apiKey = "60b41ff0f572ed7fbac58d938e4544c2";
const apiUrl = "https://api.themoviedb.org/3";

function App() {

  //creo stato per ricerca movies and title
  const [movies, setMovies] = useState([])
  const [series, setSeries] = useState([])
  const [searchTitle, setSearchTitle] = useState("")

  // const globalProviderValue = {movies,setMovies,searchTitle,setSearchTitle } 

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
      {/* <GlobalContext value = {globalProviderValue}> */}
      <div className='boolfix'>
        <h2>BoolFix</h2>
        <Header
          searchTitle={searchTitle}
          setSearchTitle={setSearchTitle}
          getMovies={getMovies}
        />
        {/* controllo */}
        {movies.length > 0 ? (
          <div className='container'>
            <div className='row'>
              {movies.map((movie) => (
                <div key={movie.id} className='col'>
                  <MovieCard
                    movie={movie} />
                </div>
              ))}
            </div>
          </div>) : (<p>Movie not found</p>)}
      </div>
      {/* </GlobalContext> */}
    </>
  )
}

export default App
