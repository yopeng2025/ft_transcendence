import './HomePage.css'
import { Link } from 'react-router-dom'

import EventList from '../../components/events/EventList'
import MovieList from '../../components/movies/MovieList'


function HomePage() {
	return (
		<>
			<main>
				<section className="hero">
					<h1>Discover movies.<br />Meet people.</h1>
					<p> Create movie events, join discussions, and connect with movie lovers. </p>
				</section>

				<section className="homepage-section">
					<div className="section-header">
						<h2>Popular Movies</h2>
						<a href="#">View all</a>
					</div>

					<MovieList />
				</section>

				<section className="homepage-section">
					<div className="section-header">
						<h2>Upcoming Events</h2>
						<Link to="/events">View all</Link>
					</div>

					<EventList />
				</section>
			</main>
		</>
	)
}

export default HomePage
