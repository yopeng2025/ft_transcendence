import './MovieCard.css'

type MovieCardProps = {
    title: string
    year: number
}

function MovieCard({
    title,
    year,
}: MovieCardProps) {
    return (
        <div className="movie-card">
            <div className="movie-poster>">
                {/* RESERVE FOR POSTER */}
            </div>

            <div className="movie-info">
                <h3>{title}</h3>
                <h3>{year}</h3>
            </div>
        </div>
    )
}

export default MovieCard