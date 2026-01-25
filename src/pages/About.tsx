import { assets } from "../assets/assets_frontend/assets"

export const About = () => {
    return (
        <section className="p-2 pt-12">
            <div className="container">
                <div className="md:grid grid-cols-3 gap-5">
                    <div className="text-center rounded-lg mb-5">
                        <img src={assets.about_image} className="block mx-auto rounded-md" alt='About image' />
                    </div>
                    <div className="col-span-2 md:pr-15">
                        <h2 className="font-semibold text-gray-800 py-2 text-2xl mb-3 relative fter:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-6 after:bg-blue-600">About <span className="text-blue-600">US</span></h2>
                        <p className="text-sm text-gray-600 mb-3">Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
                        <p className="text-sm text-gray-600 mb-1">Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
                        <h3 className="flex items-center gap-1 font-medium text-gray-700 mt-3">Our Vision</h3>
                        <p className="text-sm text-gray-600 mb-1">Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
                    </div>
                </div>
                <div className="mt-5">
                    <h2 className="font-semibold py-2 text-gray-800 text-2xl mb-3">WHY CHOOSE US</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                        <div className="border border-gray-300 rounded-md p-5">
                            <h3 className="font-medium mb-2 text-gray-700">EFFICIENCY:</h3>
                            <p className="text-sm text-gray-500">Streamlined appointment scheduling that fits into your busy lifestyle.</p>
                        </div>
                        <div className="border border-gray-300 rounded-md p-5">
                            <h3 className="font-medium mb-2 text-gray-700">CONVENIENCE:</h3>
                            <p className="text-sm text-gray-500">Access to a network of trusted healthcare professionals in your area.</p>
                        </div>
                        <div className="border border-gray-300 rounded-md p-5">
                            <h3 className="font-medium mb-2 text-gray-700">PERSONALIZATION:</h3>
                            <p className="text-sm text-gray-500">Tailored recommendations and reminders to help you stay on top of your health.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}