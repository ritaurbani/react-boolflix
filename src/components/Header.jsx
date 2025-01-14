function Header({ searchTitle, setSearchTitle, getMovies }) {

    return (
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
    )
}

export default Header
