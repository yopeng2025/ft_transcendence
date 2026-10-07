import './BottomNav.css'
import { NavLink } from 'react-router-dom'

function BottomNav() {
	return (
		<nav className="bottom-nav">
			<NavLink to="/privacypolicy" end>Privacy Policy</NavLink>
			<NavLink to="/termsofservice" end>Terms of Service</NavLink>
		</nav>
	)
}

export default BottomNav
