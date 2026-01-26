import { InputText } from "../components/InputText"
import { ButtonClick } from "../components/ButtonClick"
import { SelectInput } from "../components/SelectInput"
import { Link } from "react-router-dom"

export const Register = () => {

    return (
        <section className="section p-2 flex items-center justify-center">
            <div className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-6 sm:p-8">

                {/* Header */}
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800">
                        Create Account
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                        Sign up to get started
                    </p>
                </div>

                {/* Form */}
                <form className="space-y-4">

                    {/* Full Name */}
                    <div>
                        <InputText label="your name" type="text" />
                    </div>

                    {/* Email */}
                    <div>
                        <InputText label="email" type="email" />
                    </div>

                    {/* Phone */}
                    <div>
                        <InputText label="phone number" type="number" />
                    </div>

                    {/* Gender + Birthday */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <SelectInput />
                        </div>

                        <div>
                            <InputText type="date" label="" />
                        </div>
                    </div>

                    {/* Password */}
                    <div>
                        <InputText label="password" type="password" />
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <InputText label="confirm password" type="password" />
                    </div>

                    {/* Submit Button */}
                    <ButtonClick text="Register" />

                </form>

                {/* Footer */}
                <p className="text-sm text-gray-500 text-center mt-5">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-600 hover:underline">
                        Login
                    </Link>
                </p>

            </div>
        </section>
    )
}
