import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar/Navbar'
import EventsPage from './pages/events/EventPage'
import HomePage from './pages/home/HomePage'
import EventDetailPage from './pages/events/EventDetailPage'


function App() {
	return (
		<BrowserRouter>
		<Navbar title='CineClub'/>

		<Routes>
			<Route path="/" element={<HomePage />}/>
			<Route path="/events" element={<EventsPage />}/>

			<Route 
				path="/events/:id"
				element={<EventDetailPage />}
			/>
		</Routes>
		</BrowserRouter>
	)
}

export default App
