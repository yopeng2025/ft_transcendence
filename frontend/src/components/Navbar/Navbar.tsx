import './Navbar.css'
import { NavLink } from 'react-router-dom'
import Logo from '../Logo/Logo'
import { useAuth } from '../../context/AuthContext'
import Avatar from '../Avatar/Avatar'



function Navbar() {
	const { user, logout } = useAuth()
	
	return (
		<nav className="navbar">
			{/* RESERVE FOR LOGO */}
			<Logo/>
			{ user && (
				<div className="navbar-links">
					<NavLink to="/search-movies">
						Search movies
					</NavLink>
					<NavLink to="/calendar">
						Calendar
					</NavLink>
					<NavLink to="/activity">
						Activity
					</NavLink>
				</div>

			)}

			{user ? (
					<NavLink to="/profile" className="navbar-avatar"><Avatar size={80} /> </NavLink>
			) : (
					<NavLink to="/signin" className="navbar-login">Login</NavLink>
			)}
		</nav>
	)
}

export default Navbar