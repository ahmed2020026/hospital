import { useState } from "react";
import { InputText } from "../components/InputText";
import { ButtonClick } from "../components/ButtonClick";
import { Link } from "react-router-dom";

const Register = () => {
    // =========================
    // State للحفاظ على قيم الحقول
    // =========================
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        age: "",
        birthday: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        phone: "",
        age: "",
        birthday: "",
        password: "",
        confirmPassword: "",
    });

    // =========================
    // Update state عند كتابة المستخدم
    // =========================
    const handleChange = (field: string, value: string) => {
        setForm(prev => ({ ...prev, [field]: value }));
        setErrors(prev => ({ ...prev, [field]: "" })); // يمسح الخطأ أثناء الكتابة
    };

    // =========================
    // Validation
    // =========================
    const validate = () => {
        let valid = true;
        const newErrors: any = {};

        if (!form.name.trim()) {
            newErrors.name = "Name is required";
            valid = false;
        }

        if (!form.email.trim()) {
            newErrors.email = "Email is required";
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            newErrors.email = "Email is invalid";
            valid = false;
        }

        if (!form.phone.trim()) {
            newErrors.phone = "Phone number is required";
            valid = false;
        }

        if (!form.age.trim()) {
            newErrors.age = "Age is required";
            valid = false;
        }

        if (!form.birthday.trim()) {
            newErrors.birthday = "Birthday is required";
            valid = false;
        }

        if (!form.password.trim()) {
            newErrors.password = "Password is required";
            valid = false;
        }

        if (form.password !== form.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    // =========================
    // Submit handler
    // =========================
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            console.log("Form Data:", form);
            alert("Registered successfully!");
            setForm({
                name: "",
                email: "",
                phone: "",
                age: "",
                birthday: "",
                password: "",
                confirmPassword: "",
            });
        }
    };

    return (
        <section className="section p-2 flex items-center justify-center">
            <div className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-6 sm:p-8">

                {/* Header */}
                <div className="text-center mb-6">
                    <h1 className="text-2xl font-semibold text-gray-800">
                        Create Account
                    </h1>
                    <p className="text-sm text-gray-500 mt-1">
                        Sign up to get started
                    </p>
                </div>

                {/* Form */}
                <form className="space-y-4" onSubmit={handleSubmit}>

                    <div>
                        <InputText
                            label="Your Name"
                            type="text"
                            value={form.name}
                            onChange={e => handleChange("name", e.target.value)}
                        />
                        {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                        <InputText
                            label="Email"
                            type="email"
                            value={form.email}
                            onChange={e => handleChange("email", e.target.value)}
                        />
                        {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                        <InputText
                            label="Phone Number"
                            type="number"
                            value={form.phone}
                            onChange={e => handleChange("phone", e.target.value)}
                        />
                        {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <InputText
                                label="Age"
                                type="number"
                                value={form.age}
                                onChange={e => handleChange("age", e.target.value)}
                            />
                            {errors.age && <p className="text-xs text-red-500 mt-1">{errors.age}</p>}
                        </div>
                        <div>
                            <InputText
                                label="Birthday"
                                type="date"
                                value={form.birthday}
                                onChange={e => handleChange("birthday", e.target.value)}
                            />
                            {errors.birthday && <p className="text-xs text-red-500 mt-1">{errors.birthday}</p>}
                        </div>
                    </div>

                    <div>
                        <InputText
                            label="Password"
                            type="password"
                            value={form.password}
                            onChange={e => handleChange("password", e.target.value)}
                        />
                        {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password}</p>}
                    </div>

                    <div>
                        <InputText
                            label="Confirm Password"
                            type="password"
                            value={form.confirmPassword}
                            onChange={e => handleChange("confirmPassword", e.target.value)}
                        />
                        {errors.confirmPassword && <p className="text-xs text-red-500 mt-1">{errors.confirmPassword}</p>}
                    </div>

                    <ButtonClick text="Register" type="submit" />

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
    );
};

export default Register;
