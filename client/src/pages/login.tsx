import { useState } from "react"
import { useNavigate } from "react-router"
import GoogleButton from "../components/google.button"
import { useAuthStore } from "../store/auth.store"

function Login() {
    const navigate = useNavigate()

    const { login, fetchUser, isLoading, error } = useAuthStore()
    const { isAuthenticated } = useAuthStore.getState()



    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        await login({ email, password })
        await fetchUser()

        if (isAuthenticated) navigate("/")

    }

    return (
        <div className="flex h-screen w-full items-center justify-center bg-gray-200 p-10">
            <form
                onSubmit={handleSubmit}
                className="mt-10 w-[420px] space-y-4 rounded-md bg-white p-6 shadow-lg"
            >
                <div>
                    <h1 className="text-2xl font-semibold">Welcome Back!</h1>
                    <p className="mt-1">
                        <strong className="text-3xl text-blue-600">
                            Login
                        </strong>
                        <br />
                        to start shopping
                    </p>
                </div>

                {error && (
                    <p className="text-sm text-red-500">{error}</p>
                )}

                <div>
                    <p>Email or Phone Number</p>
                    <input
                        type="email"
                        placeholder="johndoe@example.com"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-12 w-full rounded-md border-2 border-blue-600 p-3 outline-none"
                    />
                </div>

                <div>
                    <p>Password</p>
                    <input
                        type="password"
                        placeholder="********"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="h-12 w-full rounded-md border-2 border-blue-600 p-3 outline-none"
                    />
                </div>

                <a href="/" className="block text-sm text-blue-600">
                    Forgotten Password?
                </a>

                <button
                    type="submit"
                    disabled={isLoading}
                    className="h-14 w-full rounded-md bg-blue-600 text-md text-white disabled:opacity-60"
                >
                    {isLoading ? "Logging in..." : "Login"}
                </button>

                <GoogleButton />

                <p className="text-sm">
                    Don&apos;t have an account?{" "}
                    <a
                        href="/signup"
                        className="font-bold text-blue-600"
                    >
                        Signup now!
                    </a>
                </p>
            </form>
        </div>
    )
}

export default Login
