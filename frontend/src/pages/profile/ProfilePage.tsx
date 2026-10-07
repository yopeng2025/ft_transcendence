import './ProfilePage.css'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import Avatar from '../../components/Avatar/Avatar'


function ProfilePage() {
    const { user, logout } = useAuth()
    const navigate = useNavigate()

	function handleLogout() {
		logout()
		navigate('/signin')
	}

	return (
		<main className="Profile-page">
			<div className="profile-container">
                <div className="box-name">
					<Avatar size={120} />
					<div className="profile-info">
						<h1>ExempleUsername</h1>
						<p>{user?.email}</p>
					</div>
                </div>
                <button className="bouton-logout" onClick={handleLogout}>Logout</button>
		    </div>
        </main>
	)
}

export default ProfilePage
