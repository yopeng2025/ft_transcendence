import { useParams } from "react-router-dom";

function EventDetailPage() {
    const { id } = useParams()
    
    return (
        <main>
            <h1>Event Detail</h1>
            <p>Event ID: {id}</p>
        </main>
    )
}

export default EventDetailPage