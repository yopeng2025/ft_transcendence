import { NavLink } from 'react-router-dom'

const navClass = "fixed bottom-0 left-0 right-0 z-[100] flex justify-around py-3 border-t border-border"
const linkClass = "text-base text-text-muted transition-colors duration-300 [&.active]:text-brand [&.active]:font-bold"

function BottomNav() {
	return (
		<nav className={navClass}>
			<NavLink to="/privacypolicy" end className={linkClass}>Privacy Policy</NavLink>
			<NavLink to="/termsofservice" end className={linkClass}>Terms of Service</NavLink>
		</nav>
	)
}

export default BottomNav
