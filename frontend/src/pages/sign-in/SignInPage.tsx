import { useState } from 'react'
import './SignInPage.css'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

function SignInPage() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const { login } = useAuth()
	const navigate = useNavigate()
    
	function handleSubmit(e: React.FormEvent) {
		e.preventDefault()
        login(email)
        navigate('/')
		console.log(email, password)
	}

	return (
        
        <main className="signin-page">
			<form className="signin-form" onSubmit={handleSubmit}>
                <h1>Welcome Back !</h1>
                <div className="box">
                    <div className="signin-field">
                            <input
                                id="email"
                                type="email"
                                value={email}
                                placeholder="email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <input
                            id="password"
                            type="password"
                            value={password}
                            placeholder="password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    <button type="submit">Sign In</button>
                    </div>
                    <p className="p">New ? <a href="/signup">Create an account</a> </p>
                </div>
			</form>
		</main>
	)
}

export default SignInPage
