import GoogleButton from "../components/google.button"

function SignUp() {
    return (
        <div className="w-full h-screen p-10 flex justify-center items-center bg-gray-200">
            <form className="w-3xl h-auto shadow-3 bg-white rounded-md p-5 space-y-3 mt-10">
                <div>
                    <h1 className="text-xl"> Let's get started! </h1>
                    <p> <strong className="text-3xl text-blue-600">SignUp</strong> <br/>Let's find your perfect fragrance </p>
                </div>
                <div>
                    <p>Email or Phone Number</p>
                    <input type="email" id="email" placeholder="johndoe@example.com" required className="w-full h-12 rounded-md p-3 border-2 border-blue-600 outline-none" />
                </div>
                 <div>
                    <p>Password </p>
                    <input type="password" id="psw" placeholder="********" required className="w-full h-12 rounded-md p-3 border-2 border-blue-600 outline-none" />
                </div>
                <button type="submit" className="w-full h-14 bg-blue-600 text-white rounded-md text-md">Create Account</button>

                <GoogleButton/>
                <p> Already have an account? <a href="/login" className="text-blue-600 font-bold">Login</a></p>
            </form>
        </div>
    )
}

export default SignUp;
