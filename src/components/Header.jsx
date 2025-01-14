function Header({ searchTitle, setSearchTitle, getMovies }) {

    return (
        <header>
            <div className="logo">Logo</div>
            <div className="searchBar">
                <input
                    placeholder='search'
                    type="text"
                    value={searchTitle}
                    onChange={(e) => setSearchTitle(event.target.value)} />
                
                    <button className='mx-2' onClick={getMovies}>Search</button>
            
            </div>
        </header>
    )
}

export default Header
