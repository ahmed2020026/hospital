import { assets } from "../assets/assets_frontend/assets"

const About = () => {
    return (
        <section className="p-2 pt-12">
            <div className="container">
                <div className="md:grid grid-cols-3 gap-5">
                    <div className="text-center rounded-lg mb-5">
                        <img
                            loading="lazy"
                            decoding="async"
                            src={assets.about_image}
                            className="block mx-auto rounded-md"
                            alt="Doctor and patient illustration"
                        />
                    </div>

                    <div className="col-span-2 md:pr-15">
                        <h1 className="font-semibold text-gray-800 py-2 text-2xl mb-3 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-6 after:bg-blue-600">
                            About <span className="text-blue-600">Us</span>
                        </h1>

                        <p className="text-sm text-gray-600 mb-1">
                            Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently...
                        </p>

                        <p className="text-sm text-gray-600 mb-1">
                            Prescripto is committed to excellence in healthcare technology...
                        </p>

                        <h2 className="flex items-center gap-1 font-medium text-gray-700 mt-3">
                            Our Vision
                        </h2>

                        <p className="text-sm text-gray-600 mb-1">
                            Our vision at Prescripto is to create a seamless healthcare experience...
                        </p>
                    </div>
                </div>

                <section className="mt-5" aria-labelledby="why-choose-us">
                    <h2
                        id="why-choose-us"
                        className="font-semibold py-2 text-gray-800 text-2xl mb-3"
                    >
                        Why Choose Us
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                        <div className="border border-gray-300 rounded-md p-5">
                            <h3 className="font-medium mb-2 text-gray-700">Efficiency</h3>
                            <p className="text-sm text-gray-500">
                                Streamlined appointment scheduling that fits into your busy lifestyle.
                            </p>
                        </div>

                        <div className="border border-gray-300 rounded-md p-5">
                            <h3 className="font-medium mb-2 text-gray-700">Convenience</h3>
                            <p className="text-sm text-gray-500">
                                Access to a network of trusted healthcare professionals in your area.
                            </p>
                        </div>

                        <div className="border border-gray-300 rounded-md p-5">
                            <h3 className="font-medium mb-2 text-gray-700">Personalization</h3>
                            <p className="text-sm text-gray-500">
                                Tailored recommendations and reminders to help you stay on top of your health.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default About;