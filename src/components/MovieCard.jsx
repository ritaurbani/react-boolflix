function MovieCard({ movie }) {
    

    return (
        <div className="card mb-3">

            <div>
                {/* <img src={movie.poster_path !== null ? movie.poster_path : "https://picsum.photos/400/300"} alt={movie.title} /> */}
            </div>
            <div>
                <h4>{movie.title}</h4>
            </div>
            <div className="language-flag">
                <img src={`/img/${movie.original_language}.png`} alt="" />
                <span>{movie.original_language}</span>
            </div>
            <div>
                {movie.vote_average}
            </div>
            <div>
                {movie.overview.slice(0,50)+"..."}
            </div>
        </div>
    )
}

export default MovieCard


