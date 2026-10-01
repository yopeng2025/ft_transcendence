import './Navbar.css'
import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo'


function Navbar() {
	return (
		<nav className="navbar">
			{/* RESERVE FOR LOGO */}
			<Logo />
			<div className="navbar-links">
				<Link to="/">Home</Link>
				<Link to="/movies">Movies</Link>
				<Link to="/activity">Activity</Link>
			</div>

			<a href="/login" className="navbar-login">
				Login
			</a>

		</nav>
	)
}

export default Navbar