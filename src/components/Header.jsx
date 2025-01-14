function Header({ searchTitle, setSearchTitle, getMovies, setSearchType, handleSearch }) {

    return (
        <header>
            <div className="logo">Logo</div>
            <div className="searchBar">
                <input
                    placeholder='search'
                    type="text"
                    value={searchTitle}
                    onChange={(e) => setSearchTitle(event.target.value)} />
                <div>
                    {/* Aggiungi un dropdown o dei pulsanti per scegliere il tipo di ricerca */}
                    {/* <select onChange={(e) => setSearchType(e.target.value)}>
                        <option value="movie">Movies</option>
                        <option value="tv">TV Shows</option>
                    </select> */}
                    <button className="mx-2" onClick={handleSearch}>Search</button>
                </div>
                {/* <button className='mx-2' onClick={getMovies}>Search</button> */}

            </div>
        </header>
    )
}

export default Header
