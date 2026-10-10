import { Link } from 'react-router-dom'
import ticket from '../../assets/ticket.svg'

const logoClass = "flex items-center gap-2 text-text"
const imageClass = "h-16"
const nameClass = "font-serif font-bold text-[44px]"

function Logo() {
	return (
		<Link to="/" className={logoClass}>
			<img src={ticket} alt="" className={imageClass} />
			<span className={nameClass}>CineClub</span>
		</Link>
	)
}

export default Logo
