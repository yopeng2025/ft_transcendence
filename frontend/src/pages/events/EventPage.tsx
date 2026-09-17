import EventList from "../../components/events/EventList";
import './EventPage.css'

function EventsPage() {
    return (
        <main className="events-page">
			<section className="events-header">
				<h1>Upcoming Events</h1>
				<p>Discover movie events and connect with movie lovers.</p>
			</section>

			<section className="events-toolbar-section">
				<div className="events-toolbar">
					<input 
						type="text"
						placeholder="Search events..."
					/>


					<button className="creat-event-button">
						+ Create Event
					</button>
				</div>
			</section>

			<section className="events-list-section">
				<div className="events-filters">
					<button>All Events</button>
					<button>Online</button>
					<button>In person</button>
				</div>
				<EventList />
			</section>
        </main>
    )
}

export default EventsPage