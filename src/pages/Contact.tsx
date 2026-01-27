import { assets } from "../assets/assets_frontend/assets"
import { ButtonClick } from "../components/ButtonClick"

const Contact = () => {
    return (
        <section className="p-2 pt-12">
            <div className="container">
                <div className="md:grid grid-cols-3 gap-5">
                    <div className="text-center rounded-lg mb-5">
                        <img src={assets.contact_image} loading="lazy" className="block mx-auto rounded-md" alt='About image' />
                    </div>
                    <div className="col-span-2 md:pr-15">
                        <h2 className="font-semibold text-gray-800 py-2 text-2xl mb-3 relative fter:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-6 after:bg-blue-600">Contact <span className="text-blue-600">US</span></h2>
                        
                        <h3 className="mt-5 text-gray-700 mb-3 font-medium text-xl uppercase">our office</h3>
                        <p className="text-sm text-gray-500">00000 Willms Station</p>
                        <p className="text-sm text-gray-500">Suite 000, Washington, USA</p>
                        <p className="text-sm text-gray-500 mt-2">Tel: (000) 000-0000</p>
                        <p className="text-sm text-gray-500">Email: greatstackdev@gmail.com</p>

                        <h3 className="mt-5 text-gray-700 mb-3 font-medium text-xl">CAREERS AT PRESCRIPTO</h3>
                        <p className="text-sm text-gray-500 mb-5">Learn more about our teams and job openings.</p>

                        <ButtonClick text = {'Explore Job'} color="info" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact;