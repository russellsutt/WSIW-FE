
const Movie = (props) => {
    if (props) {
        const movie = props.movie
        return (
            <div>
                <h1>{movie.display_title}</h1>
            </div>

        )
    }
}

export default Movie;