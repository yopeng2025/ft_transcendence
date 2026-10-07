import './Navbar.css'
import { NavLink } from 'react-router-dom'
import Logo from '../Logo/Logo'
import { useAuth } from '../../context/AuthContext'



function Navbar() {
	const { user, logout } = useAuth()
	
	return (
		<nav className="navbar">
			{/* RESERVE FOR LOGO */}
			<Logo />
			<div className="navbar-links">
				<NavLink to="/movies">
					Movies
				</NavLink>
				<NavLink to="/events">
					Events
				</NavLink>
				<NavLink to="/activity">
					Activity
				</NavLink>
			</div>

			{user ? (
					<button className="navbar-login" onClick={logout}>Logout</button>
			) : (
					<NavLink to="/signin" className="navbar-login">Login</NavLink>
			)}
		</nav>
	)
}

export default Navbar