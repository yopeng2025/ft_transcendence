import EventList from '../../components/events/EventList'


function HomePage() {
	return (
		<>
			<main>
				<section className="py-20 px-10 text-center bg-bg">
					<h1 className="font-serif font-bold text-7xl text-text">Discover movies.<br />Meet people.</h1>
					<p className="my-8 font-serif font-light text-2xl text-text-muted"> Create movie events, join discussions, and connect with movie lovers. </p>
				</section>

				<section className="py-12 px-10">
					<div className="flex justify-between items-center mb-6">
						<h2 className="text-3xl text-text">Upcoming Events</h2>
					</div>

					<EventList />
				</section>
			</main>
		</>
	)
}

export default HomePage
