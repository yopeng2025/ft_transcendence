import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar/Navbar'
import HomePage from './pages/home/HomePage'
import ActivityPage from './pages/activity/ActivityPage'
import SigninPage from './pages/signin/signinPage'
import SignupPage from './pages/signup/signupPage'
import MoviesPage from './pages/movies/moviesPage'


function App() {
	return (
		<BrowserRouter>
		<Navbar />

		<Routes>
			<Route path="/" element={<HomePage />}/>
			<Route path="/activity" element={<ActivityPage />}/>
			<Route path="/signin" element={<SigninPage />}/>
			<Route path="/signup" element={<SignupPage />}/>
			<Route path="/movies" element={<MoviesPage />}/>
		</Routes>
		</BrowserRouter>
	)
}

export default App
