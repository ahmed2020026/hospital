import { assets } from "../assets/assets_frontend/assets"

const About = () => {
    return (
        <section className="p-2 pt-12">
            <div className="container mx-auto">
                <div className="md:grid grid-cols-3 gap-5">
                    <div className="text-center rounded-lg mb-5">
                        <img
                            loading="lazy"
                            decoding="async"
                            src={assets.about_image}
                            className="block mx-auto rounded-md"
                            alt="Illustration of a doctor consulting a patient"
                        />
                    </div>

                    <div className="col-span-2 md:pr-16">
                        <h1 className="font-semibold text-gray-800 py-2 text-2xl mb-3 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-6 after:bg-blue-600">
                            About <span className="text-blue-600">Us</span>
                        </h1>

                        <p className="text-sm text-gray-600 mb-2 leading-relaxed">
                            Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently...
                        </p>

                        <p className="text-sm text-gray-600 mb-2 leading-relaxed">
                            Prescripto is committed to excellence in healthcare technology...
                        </p>

                        <h2 className="flex items-center gap-1 font-medium text-gray-700 mt-3">
                            Our Vision
                        </h2>

                        <p className="text-sm text-gray-600 mb-2 leading-relaxed">
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
                        {[
                            {
                                title: "Efficiency",
                                desc: "Streamlined appointment scheduling that fits into your busy lifestyle.",
                            },
                            {
                                title: "Convenience",
                                desc: "Access to a network of trusted healthcare professionals in your area.",
                            },
                            {
                                title: "Personalization",
                                desc: "Tailored recommendations and reminders to help you stay on top of your health.",
                            },
                        ].map((item) => (
                            <article
                                key={item.title}
                                className="border border-gray-300 rounded-md p-5 hover:shadow-lg transition-shadow duration-300"
                            >
                                <h3 className="font-medium mb-2 text-gray-700">{item.title}</h3>
                                <p className="text-sm text-gray-500">{item.desc}</p>
                            </article>
                        ))}
                    </div>
                </section>
            </div>
        </section>
    )
}

export default About;