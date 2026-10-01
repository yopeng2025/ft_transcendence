import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar/Navbar'
import HomePage from './pages/home/HomePage'
import ActivityPage from './pages/activity/ActivityPage'


function App() {
	return (
		<BrowserRouter>
		<Navbar />

		<Routes>
			<Route path="/" element={<HomePage />}/>
			<Route path="/activity" element={<ActivityPage />}/>
		</Routes>
		</BrowserRouter>
	)
}

export default App
