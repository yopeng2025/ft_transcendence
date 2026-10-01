import './Logo.css'
import { Link } from 'react-router-dom'
import ticket from '../../assets/ticket.svg'

function Logo() {
	return (
		<Link to="/" className="logo">
			<img src={ticket} alt="" />
			<span>CineClub</span>
		</Link>
	)
}

export default Logo
