import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar/Navbar'
import HomePage from './pages/home/HomePage'
import ActivityPage from './pages/activity/ActivityPage'
import SignInPage from './pages/sign-in/SignInPage'
import SignUpPage from './pages/sign-up/SignUpPage'
import SearchMoviesPage from './pages/search-movies/SearchMoviesPage'
import BottomNav from './components/BottomNav/BottomNav'
import PrivacyPolicyPage from './pages/privacy-policy/PrivacyPolicyPage'
import TermsOfServicePage from './pages/terms-of-service/TermsOfServicePage'
import CalendarPage from './pages/calendar/CalendarPage'
import { AuthProvider } from './context/AuthContext'
import ProfilePage from './pages/profile/ProfilePage'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'


function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
			<Navbar />
			<BottomNav />
				<Routes>
				{/* Pages publiques */}
				<Route path="/" element={<HomePage />} />
				<Route path="/signin" element={<SignInPage />} />
				<Route path="/signup" element={<SignUpPage />} />
				<Route path="/privacypolicy" element={<PrivacyPolicyPage />} />
				<Route path="/termsofservice" element={<TermsOfServicePage />} />

				{/* Pages réservées aux utilisateurs connectés */}
				<Route element={<ProtectedRoute />}>
					<Route path="/profile" element={<ProfilePage />} />
					<Route path="/activity" element={<ActivityPage />} />
					<Route path="/calendar" element={<CalendarPage />} />
					<Route path="/search-movies" element={<SearchMoviesPage />} />
				</Route>

					<Route path="*" element={<h1>404 Not Found</h1>} />
			</Routes>
			</BrowserRouter>
		</AuthProvider>
	)
}

export default App
