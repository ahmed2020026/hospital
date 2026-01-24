import { assets } from "../assets/assets_frontend/assets"

export const Footer = () => {
    return (
        <div className="container">
            <div className="grid md:grid-cols-2 py-10 gap-5">
                <div className="">
                    <img src={assets.logo} alt="logo" className="block w-44 mb-5" />
                    <p className="text-sm text-gray-600 pr-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className="grid grid-cols-2 gap-2.5 mt-5 md:mt-0">
                    <div>
                        <h2 className="font-medium mb-2">COMPANY</h2>
                        <ul className="text-sm text-gray-600">
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Delivery</li>
                            <li>Privacy policy</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-medium mb-2">GET IN TOUCH</h2>
                        <ul className="text-sm text-gray-600">
                            <li>+0-000-000-000</li>
                            <li>greatstackdev@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="py-5 border-t border-t-gray-200">
                <p className="text-sm text-center text-gray-600">Copyright 2024 @ Greatstack.dev - All Right Reserved.</p>
            </div>
        </div>
    )
}