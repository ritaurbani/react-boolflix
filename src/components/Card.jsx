function Card({content}) {
    const posterUrlPrefix = "https://image.tmdb.org/t/p/w342"

    return (
        <div className="card">

            <div>
                {/* //stringa */}
                <img src={content.poster_path ? `${posterUrlPrefix}/${content.poster_path}` : "https://picsum.photos/400/300"} alt={content.title} />
            </div>
            <div>
                {/* //primo valore true */}
                <h4>{content.title || content.name}</h4> 
            </div>
            <div className="language-flag">
                <img src={`/img/${content.original_language}.png`} alt="" />
                <span>{content.original_language}</span>
            </div>
            <div>
                {content.vote_average}
            </div>
            <div>
                {content.overview.slice(0,50)+"..."}
            </div>
        </div>
    )
}

export default Card


