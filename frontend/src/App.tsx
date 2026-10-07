import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar/Navbar'
import HomePage from './pages/home/HomePage'
import ActivityPage from './pages/activity/ActivityPage'
import SignInPage from './pages/sign-in/SignInPage'
import SignUpPage from './pages/sign-up/SignUpPage'
import MoviesPage from './pages/movies/MoviesPage'
import BottomNav from './components/BottomNav/BottomNav'
import PrivacyPolicyPage from './pages/privacy-policy/PrivacyPolicyPage'
import TermsOfServicePage from './pages/terms-of-service/TermsOfServicePage'
import EventsPage from './pages/events/EventsPage'
import { AuthProvider } from './context/AuthContext'



function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
			<Navbar />
			<BottomNav />
			<Routes>
				<Route path="/" element={<HomePage />}/>
				<Route path="/activity" element={<ActivityPage />}/>
				<Route path="/signin" element={<SignInPage />}/>
				<Route path="/signup" element={<SignUpPage />}/>
				<Route path="/movies" element={<MoviesPage />}/>
				<Route path="/privacypolicy" element={<PrivacyPolicyPage />}/>
				<Route path="/termsofservice" element={<TermsOfServicePage />}/>
				<Route path="/events" element={<EventsPage />}/>
				<Route path="*" element={<h1>404 Not Found</h1>} />
			</Routes>
			</BrowserRouter>
		</AuthProvider>
	)
}

export default App
