import { useState } from 'react'
import './signinPage.css'

function SigninPage() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault()
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

export default SigninPage
