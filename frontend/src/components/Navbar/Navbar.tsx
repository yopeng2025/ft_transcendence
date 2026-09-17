import './Navbar.css'
import { Link } from 'react-router-dom'

type NavbarProps = {
	title: string
}

function Navbar({ title }: NavbarProps) {
	return (
		<nav className="navbar">
			{/* RESERVE FOR LOGO */}
				{title}
			<a href="/" className="navbar-logo"></a>

			<div className="navbar-links">
				<Link to="/">Home</Link>
				<Link to="/movies">Movies</Link>
				<Link to="/events">Events</Link>
			</div>

			<a href="/login" className="navbar-login">
				Login
			</a>

		</nav>
	)
}

export default Navbar