import './HomePage.css'

import EventList from '../../components/events/EventList'


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
						<h2>Upcoming Events</h2>
					</div>

					<EventList />
				</section>
			</main>
		</>
	)
}

export default HomePage
