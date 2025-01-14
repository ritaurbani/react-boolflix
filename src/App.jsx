import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import Card from './components/Card';
import Header from './components/Header';
import GlobalContext from './context/GlobalContext';

const apiKey = "60b41ff0f572ed7fbac58d938e4544c2";
const apiUrl = "https://api.themoviedb.org/3";

function App() {

  //creo stato per ricerca movies and title
  const [movies, setMovies] = useState([])
  const [series, setSeries] = useState([])
  const [searchTitle, setSearchTitle] = useState("")
  // const [searchType, setSearchType] = useState("movie"); // "movie" o "tv"

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

  const getSeries = () => {
    axios.get(`${apiUrl}/search/tv`, {
      params: {
        api_key: apiKey,
        query:searchTitle
      },
    }).then((resp) => {
      console.log(resp)
      setSeries(resp.data.results)
    })
  }

  const handleSearch = () => {
    getMovies();     
    getSeries();    
  };

  return (
    <>
      {/* <GlobalContext value = {globalProviderValue}> */}
      <div className='boolfix'>
        <Header
          searchTitle={searchTitle}
          setSearchTitle={setSearchTitle}
          getMovies={getMovies}
          // setSearchType={setSearchType}
          handleSearch={handleSearch}
        />
        {/* controllo */}
        {movies.length > 0 ? (
          <div className='container'>
            <div className='row'>
              {movies.map((movie) => (
                <div key={movie.id} className='col'>
                  <Card
                    content={movie} 
                    type = "movie"/>
                </div>
              ))}
            </div>
          </div>) : null}

        {series.length > 0 ? (
          <div className="container">
            <div className="row">
              {series.map((serie) => (
                <div key={serie.id} className="col">
                  <Card content={serie}
                  type = "serie" /> 
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {/* Se non ci sono risultati, mostra un messaggio */}
        {movies.length === 0 && series.length === 0 && searchTitle && (
          <p>No results found</p>
        )}

      </div>
      {/* </GlobalContext> */}
    </>
  )
}

export default App
