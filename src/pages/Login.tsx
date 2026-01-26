import { InputText } from "../components/InputText"
import { ButtonClick } from "../components/ButtonClick"
import { Link } from "react-router-dom"

export const Login = () => {

    return (
        <section className="section p-2 flex items-center justify-center">
            <div className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-6 sm:p-8">

                {/* Header */}
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800">
                        Login
                    </h2>
                </div>

                {/* Form */}
                <form className="space-y-4">

                    <div>
                        <InputText label="email" type="email" />
                    </div>

                    {/* Password */}
                    <div>
                        <InputText label="password" type="password" />
                    </div>

                    {/* Submit Button */}
                    <ButtonClick text="Login" />

                </form>

                {/* Footer */}
                <p className="text-sm text-gray-500 text-center mt-5">
                    I don’t have an account.
                    <Link to="/Register" className="text-blue-600 hover:underline">
                        register
                    </Link>
                </p>

            </div>
        </section>
    )
}
