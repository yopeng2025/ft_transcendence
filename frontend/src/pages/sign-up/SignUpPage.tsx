import { useState } from 'react'
import { Link } from 'react-router-dom'

const inputClass = "py-2.5 px-3 border border-border rounded-md text-base"
const linkClass = "text-brand hover:text-brand-hover"

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
        
        <main>
			<form className="flex flex-col gap-2 max-w-[320px] mx-auto my-[320px]" onSubmit={handleSubmit}>
                <h1 className="text-center font-serif text-5xl font-bold">Create an Account</h1>
                <div className="relative p-5 bg-surface border border-border rounded-md shadow-card">
                    <div className="flex flex-col gap-2">
							<input
									id="username"
									type="text"
									value={username}
									placeholder="your username"
								onChange={(e) => setUsername(e.target.value)}
								required
								className={inputClass}
						/>

                            <input
                                id="email"
                                type="email"
                                value={email}
                                placeholder="Your email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className={inputClass}
                        />

                        <input
                            id="password"
                            type="password"
                            value={password}
                            placeholder="Your password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className={inputClass}
                        />

						<input
                            id="confirm-password"
                            type="password"
                            value={confirmPassword}
                            placeholder="Confirm your password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            className={inputClass}
                        />

						<label className="mt-3 pb-2 text-base text-text-light">
							<input
								type="checkbox"
								checked={acceptTerms}
								onChange={(e) => setAcceptTerms(e.target.checked)}
							/>
							<span>
								I accept the <Link to="/termsofservice" target="_blank" className={linkClass}>Terms of Service</Link> and the <Link to="/privacypolicy" target="_blank" className={linkClass}>Privacy Policy</Link>
							</span>
						</label>

						{error && <p className="py-2 px-3 rounded-md bg-danger/10 text-danger text-base font-bold text-center">{error}</p>} 

                    <button type="submit" className="py-2.5 px-3 rounded-md bg-brand hover:bg-brand-hover text-white text-base cursor-pointer">Sign Up</button>
					<p className="text-text-light">Already have an account? <a href="/signin" className={linkClass}>Sign in</a> </p>
                    </div>
                </div>
			</form>
		</main>
	)
}

export default SignUpPage
