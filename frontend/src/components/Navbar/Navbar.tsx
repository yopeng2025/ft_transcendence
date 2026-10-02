import './Navbar.css'
import { NavLink } from 'react-router-dom'
import Logo from '../Logo/Logo'


function Navbar() {
	return (
		<nav className="navbar">
			{/* RESERVE FOR LOGO */}
			<Logo />
			<div className="navbar-links">
				<NavLink to="/movies" className="navbar-links">
					Movies
				</NavLink>
				<NavLink to="/events" className="navbar-links">
					Events
				</NavLink>
				<NavLink to="/activity" className="navbar-links">
					Activity
				</NavLink>
			</div>

			<NavLink to="/signin" className="navbar-login">
				Login
			</NavLink>
		</nav>
	)
}

export default Navbar