import { useState } from 'react'
import './SignUpPage.css'
import { Link } from 'react-router-dom'

function SignUpPage() {
	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [error, setError] = useState('')
	const [acceptTerms, setAcceptTerms] = useState(false)



	function handleSubmit(e: React.FormEvent) 
	{
		e.preventDefault()
		if (password !== confirmPassword) 
		{
			setError('Passwords do not match')
			return
		}
		if (!acceptTerms)
		{
			setError('You must accept the terms and conditions')
			return
		}
		setError('')
		console.log(email, password)
	}

	return (
        
        <main className="signup-page">
			<form className="signup-form" onSubmit={handleSubmit}>
                <h1>Create an Account</h1>
                <div className="box">
                    <div className="signup-field">
							<input
									id="username"
									type="text"
									value={username}
									placeholder="your username"
								onChange={(e) => setUsername(e.target.value)}
								required
						/>

                            <input
                                id="email"
                                type="email"
                                value={email}
                                placeholder="Your email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <input
                            id="password"
                            type="password"
                            value={password}
                            placeholder="Your password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

						<input
                            id="confirm-password"
                            type="password"
                            value={confirmPassword}
                            placeholder="Confirm your password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />

						<label className="signup-terms">
							<input
								type="checkbox"
								checked={acceptTerms}
								onChange={(e) => setAcceptTerms(e.target.checked)}
							/>
							<span className="p">
								I accept the <Link to="/termsofservice" target="_blank">Terms of Service</Link> and the <Link to="/privacypolicy" target="_blank">Privacy Policy</Link>
							</span>
						</label>

						{error && <p className="signup-error">{error}</p>} 

                    <button type="submit">Sign Up</button>
                    </div>
                </div>
			</form>
		</main>
	)
}

export default SignUpPage