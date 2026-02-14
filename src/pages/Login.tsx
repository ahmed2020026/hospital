import { useState } from "react";
import { InputText } from "../components/InputText";
import { ButtonClick } from "../components/ButtonClick";
import { Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ email, password });
        // هنا ممكن تعمل login API call
    };

    return (
        <section className="section p-2 flex items-center justify-center min-h-screen">
            <div className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-6 sm:p-8">

                {/* Header */}
                <div className="text-center mb-6">
                    <h1 className="text-2xl font-semibold text-gray-800">
                        Login
                    </h1>
                </div>

                {/* Form */}
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <InputText
                            label="Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-5">
                        <InputText
                            label="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <ButtonClick text="Login" type="submit" />
                </form>

                {/* Footer */}
                <p className="text-sm text-gray-500 text-center mt-5">
                    I don’t have an account?{" "}
                    <Link to="/Register" className="text-blue-600 hover:underline">
                        Register
                    </Link>
                </p>

            </div>
        </section>
    );
};

export default Login;
