import { useState } from "react"
import { useNavigate } from "react-router"
import GoogleButton from "../components/google.button"
import { useAuthStore } from "../store/auth.store"

function SignUp() {
    const navigate = useNavigate()
    const { createAccount, fetchUser, isLoading, error } = useAuthStore()
    const { isAuthenticated } = useAuthStore.getState()

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        address: "",
        password: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        await createAccount(form)
        await fetchUser()

        if (isAuthenticated) navigate("/")
    }

    return (
        <div className="flex h-auto w-full items-center justify-center bg-gray-200 p-10">
            <form
                onSubmit={handleSubmit}
                className="mt-10 w-full max-w-xl space-y-4 rounded-md bg-white p-6 shadow-lg"
            >
                <div>
                    <h1 className="text-xl font-semibold">
                        Let&apos;s get started!
                    </h1>
                    <p className="mt-1">
                        <strong className="text-3xl text-blue-600">
                            Sign Up
                        </strong>
                        <br />
                        Let&apos;s find your perfect fragrance
                    </p>
                </div>

                {error && (
                    <p className="text-sm text-red-500">{error}</p>
                )}

                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p>First Name</p>
                        <input
                            type="text"
                            name="firstName"
                            required
                            value={form.firstName}
                            onChange={handleChange}
                            className="h-12 w-full rounded-md border-2 border-blue-600 p-3 outline-none"
                        />
                    </div>

                    <div>
                        <p>Last Name</p>
                        <input
                            type="text"
                            name="lastName"
                            required
                            value={form.lastName}
                            onChange={handleChange}
                            className="h-12 w-full rounded-md border-2 border-blue-600 p-3 outline-none"
                        />
                    </div>
                </div>

                {/* Email */}
                <div>
                    <p>Email Address</p>
                    <input
                        type="email"
                        name="email"
                        placeholder="johndoe@example.com"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="h-12 w-full rounded-md border-2 border-blue-600 p-3 outline-none"
                    />
                </div>

                {/* Phone */}
                <div>
                    <p>Phone Number</p>
                    <input
                        type="tel"
                        name="phoneNumber"
                        placeholder="08012345678"
                        required
                        value={form.phoneNumber}
                        onChange={handleChange}
                        className="h-12 w-full rounded-md border-2 border-blue-600 p-3 outline-none"
                    />
                </div>

                {/* Address */}
                <div>
                    <p>Address</p>
                    <input
                        type="text"
                        name="address"
                        required
                        value={form.address}
                        onChange={handleChange}
                        className="h-12 w-full rounded-md border-2 border-blue-600 p-3 outline-none"
                    />
                </div>

                {/* Password */}
                <div>
                    <p>Password</p>
                    <input
                        type="password"
                        name="password"
                        placeholder="********"
                        required
                        value={form.password}
                        onChange={handleChange}
                        className="h-12 w-full rounded-md border-2 border-blue-600 p-3 outline-none"
                    />
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className="h-14 w-full rounded-md bg-blue-600 text-md text-white disabled:opacity-60"
                >
                    {isLoading ? "Creating account..." : "Create Account"}
                </button>

                <GoogleButton />

                <p className="text-sm text-center">
                    Already have an account?{" "}
                    <a href="/login" className="font-bold text-blue-600">
                        Login
                    </a>
                </p>
            </form>
        </div>
    )
}

export default SignUp
