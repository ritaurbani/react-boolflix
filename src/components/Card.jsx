function Card({ content }) {
    const posterUrlPrefix = "https://image.tmdb.org/t/p/w342"

    const numbers = [1, 2, 3, 4, 5];

    const stars = []
    const getStars = () => {

    }

    return (
        <div className="card">

            <div className="card-poster">
                {/* //stringa */}
                <img src={content.poster_path ? `${posterUrlPrefix}/${content.poster_path}` : "https://picsum.photos/400/300"} alt={content.title} />

                <div className="card-content">
                    {/* //primo valore true */}
                    <h4>{content.title || content.name}</h4>

                    <div className="language-flag">
                        <span>{content.original_language}<img src={`/img/${content.original_language}.png`} alt="" /></span>

                    </div>
                    <div>
                        <span className=''>{Math.ceil(content.vote_average / 2)}
                            {
                                numbers.map((num, index) => (
                                    <i className={(Math.ceil(content.vote_average / 2) > index) ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
                                ))
                            }
                        </span>

                    </div>
                    <p>{content.overview.slice(0, 300) + "..."}</p>
                </div>
            </div>
        </div>
    )
}

export default Card


