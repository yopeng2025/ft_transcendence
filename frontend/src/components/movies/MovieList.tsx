import { useState, useEffect } from 'react'
import MovieCard from './MovieCard'
import './MovieList.css'

type Movie = {
    id: number
    title: string
    year: number
}

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
        <div className="movie-list">
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