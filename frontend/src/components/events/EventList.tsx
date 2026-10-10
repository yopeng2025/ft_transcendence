import EventCard from './EventCard'
import defaultMovie from '../../assets/default-movie.jpg'
import { useState, useEffect } from 'react'

type Event = {
	id: number,
	title: string,
	movie: string,
	type: string,
	date: string,
	time: string,
	locationType: string,
	city?: string,
	venue?: string,
	platform?: string,
	description: string,
	maxParticipants: number,
	participants: number,
	status: string,
	organizer: string,
	image?: string,
}

function EventList() {
	const [events, setEvents] = useState<Event[]>([])

	useEffect(() => {
		fetch('/api/events')
		.then((response) => response.json())
		.then((data) => {
			setEvents(data)
		})
	}, [])

	return (
		<>
			{events.map((event) => (
			<EventCard
				id={event.id}
				key={event.id}
				title={event.title}
				image={event.image || defaultMovie}
				movie={event.movie}
				date={event.date}
				time={event.time}
				location={event.locationType === 'IN_PERSON'
					? `${event.city} · ${event.venue}`
					: `ONLINE · ${event.platform}`
				}
				participants={event.participants}
				maxParticipants={event.maxParticipants}
				organizer={event.organizer}
			/>
			))}
		</>
	)
}

export default EventList