import './EventCard.css'
import { Link } from 'react-router-dom'

type EventCardProps = {
	id: number
    title: string
	movie: string
    date: string
	time: string
    location: string
	participants: number
	maxParticipants: number
	organizer: string
}

function EventCard({ 
	id,
	title,
	movie,
    date,
	time,
    location,
	participants,
	maxParticipants,
	organizer,
}: EventCardProps) {
    return (
		<div className="event-card">
			<h3 className="event-title">{title}</h3>
			<p className="event-movie">{movie}</p>

			<div className="event-details">
			<p>📅 {date} · {time}</p>
			<p>📍{location}</p>
			<p>👥 {participants} / {maxParticipants} participants</p>
			</div>

	<div className="event-footer">
			<span>Hostes by {organizer}</span>
			<Link to={`/events/${id}`} className='view-event-button'>
				View Event
			</Link>
	</div>

		</div>
    )
}

export default EventCard