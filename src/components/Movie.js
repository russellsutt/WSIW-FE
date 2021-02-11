
const Movie = (props) => {
    if (props.movie) {
        const movie = props.movie.movie
        return (
            <div>
                <h1>{movie.display_title}</h1>
                <img src={movie.multimedia.src} alt='' />
                { movie.mpaa_rating ? <p>Rated: {movie.mpaa_rating} </p> : null }
                <p>{movie.summary_short}</p>
                <button onClick={() => window.open(movie.link.url, '_blank')}>NYT Review</button>
                <button onClick={() => props.deleteMovie(props.movie.id)}>I DON'T WANT TO WATCH THAT!</button>
            </div>

        )
    } else {
        return (
            <div>

            </div>
        )
    }
}

export default Movie;