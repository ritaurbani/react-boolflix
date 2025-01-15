function Header({ searchTitle, setSearchTitle, handleSearch }) {

    return (
        <header>
            <div className="title">BOOLFIX</div>
            <div className="searchBar">
                <input
                    placeholder='search'
                    type="text"
                    value={searchTitle}
                    onChange={(e) => setSearchTitle(event.target.value)} />
                <div>
                    <button className="mx-2" onClick={handleSearch}>Search</button>
                </div>
                {/* <button className='mx-2' onClick={getMovies}>Search</button> */}

            </div>
        </header>
    )
}

export default Header
