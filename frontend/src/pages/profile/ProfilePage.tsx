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
		<main>
			<div className="flex flex-col gap-3 max-w-[800px] mx-auto my-[100px]">
                <div className="flex items-center gap-5 p-5 bg-surface border border-border rounded-md shadow-card">
					<Avatar size={120} />
					<div>
						<h1 className="mb-1 font-serif text-2xl text-text">ExempleUsername</h1>
						<p className="text-text-muted">{user?.email}</p>
					</div>
                </div>
                <button className="self-end py-2 px-4 rounded-md bg-danger hover:bg-danger/90 text-white text-base font-bold cursor-pointer transition-colors" onClick={handleLogout}>Logout</button>
		    </div>
        </main>
	)
}

export default ProfilePage
