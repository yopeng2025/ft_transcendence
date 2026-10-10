import { useState, useEffect } from 'react'
import MovieCard from './MovieCard'

type Movie = {
    id: number
    title: string
    year: number
}

const listClass = "flex flex-wrap gap-5"

function MovieList() {
	const [movies, setMovies] = useState<Movie[]>([])

	useEffect(() => {
		fetch('/api/movies')
		.then((response) => response.json())
		.then((data) => {
			setMovies(data)
		})
	}, [])

	return (
		<>
        <div className={listClass}>
        {movies.map((movie) => (
            <MovieCard
                key={movie.id}
                title={movie.title}
                year={movie.year}
            />
        ))}
        </div>
		</>
	)
}

export default MovieList
