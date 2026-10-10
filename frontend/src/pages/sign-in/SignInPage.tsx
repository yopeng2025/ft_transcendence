import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const inputClass = "py-2.5 px-3 border border-border rounded-md text-base"

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
        
        <main>
			<form className="flex flex-col gap-2 max-w-[320px] mx-auto my-[320px]" onSubmit={handleSubmit}>
                <h1 className="text-center text-5xl font-serif font-bold">Welcome Back !</h1>
                <div className="relative p-5 bg-surface border border-border rounded-md shadow-card">
                    <div className="flex flex-col gap-2">
                            <input
                                id="email"
                                type="email"
                                value={email}
                                placeholder="email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className={inputClass}
                        />

                        <input
                            id="password"
                            type="password"
                            value={password}
                            placeholder="password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className={inputClass}
                        />
                    <button type="submit" className="py-2.5 px-3 rounded-md bg-brand hover:bg-brand-hover text-white text-base cursor-pointer">Sign In</button>
                    </div>
                    <p className="text-text-light">New ? <a href="/signup" className="text-brand hover:text-brand-hover">Create an account</a> </p>
                </div>
			</form>
		</main>
	)
}

export default SignInPage
