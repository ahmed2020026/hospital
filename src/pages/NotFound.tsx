import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <section className="section p-2 flex items-center justify-center">
            <div className="px-4">
                <div className="max-w-md w-full bg-white rounded-2xl p-8 text-center">
                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">
                            <span className="text-4xl">🏥</span>
                        </div>
                    </div>

                    {/* 404 */}
                    <h1 className="text-5xl font-extrabold text-blue-600 mb-2">
                        404
                    </h1>

                    {/* Title */}
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">
                        Page Not Found
                    </h2>

                    {/* Description */}
                    <p className="text-gray-500 mb-6">
                        Sorry, the page you are looking for does not exist or has been moved.
                        <br />
                        Please check the URL or go back to the homepage.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link
                            to="/"
                            className="px-6 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
                        >
                            Go Home
                        </Link>

                        <Link
                            to="/all_doctors"
                            className="px-6 py-2 rounded-lg border border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition"
                        >
                            View Doctors
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NotFound;
