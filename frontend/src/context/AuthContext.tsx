import { createContext, useContext, useState, type ReactNode } from 'react'

type User = { email: string }

type AuthContextType = {
	user: User | null
	login: (email: string) => void
	logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<User | null>(() => {
		const saved = localStorage.getItem('user')
		return saved ? JSON.parse(saved) : null
	})

	function login(email: string) {
		const u = { email }
		localStorage.setItem('user', JSON.stringify(u))
		setUser(u)
	}

	function logout() {
		localStorage.removeItem('user')
		setUser(null)
	}

	return (
		<AuthContext.Provider value={{ user, login, logout }}>
			{children}
		</AuthContext.Provider>
	)
}

export function useAuth() {
	const ctx = useContext(AuthContext)
	if (!ctx) throw new Error('useAuth must be used inside AuthProvider')
	return ctx
}
