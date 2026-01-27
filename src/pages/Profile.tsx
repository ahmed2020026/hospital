import { assets } from "../assets/assets_admin/assets"
import { ButtonClick } from "../components/ButtonClick"

const Profile = () => {
    const user = {
        name: "Ahmed Samir",
        email: "asm@gmail.com",
        role: "User",
        phone: "000 000 000 00",
        address: "Tala",
        gender: "Male",
        birthday: "1/11/2001",
        image: assets.upload_area,
    }

    return (
        <section className="section p-2 sm:p-10">
            <div className="container mx-auto max-w-5xl">

                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-semibold text-gray-800">
                        Profile
                    </h1>

                    <ButtonClick
                        text="Edit Profile"
                        color="info"
                        aria-label="Edit your profile information"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Left Card (Image + Name) */}
                    <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center">
                        <img
                            src={user.image}
                            alt={`Profile photo of ${user.name}`}
                            loading="lazy"
                            decoding="async"
                            className="w-32 h-32 rounded-full object-cover border-4 border-gray-200 mb-4"
                        />

                        <h2 className="text-xl font-semibold text-gray-800">
                            {user.name}
                        </h2>

                        <p className="text-sm text-gray-500 mt-1">
                            {user.role}
                        </p>
                    </div>

                    {/* Right Card (Details) */}
                    <div className="md:col-span-2 bg-white shadow-md rounded-2xl p-6">

                        {/* Section: Contact Info */}
                        <h3 className="text-lg font-medium text-gray-700 mb-4">
                            Contact Information
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                            <div>
                                <p className="text-xs text-gray-400">Email</p>
                                <p className="text-sm text-gray-800 font-medium">
                                    {user.email}
                                </p>
                            </div>

                            <div>
                                <p className="text-xs text-gray-400">Phone</p>
                                <p className="text-sm text-gray-800 font-medium">
                                    {user.phone}
                                </p>
                            </div>

                            <div>
                                <p className="text-xs text-gray-400">Address</p>
                                <p className="text-sm text-gray-800 font-medium">
                                    {user.address}
                                </p>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="h-px bg-gray-200 my-6"></div>

                        {/* Section: Basic Info */}
                        <h3 className="text-lg font-medium text-gray-700 mb-4">
                            Basic Information
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <p className="text-xs text-gray-400">Gender</p>
                                <p className="text-sm text-gray-800 font-medium">
                                    {user.gender}
                                </p>
                            </div>

                            <div>
                                <p className="text-xs text-gray-400">Birthday</p>
                                <p className="text-sm text-gray-800 font-medium">
                                    {user.birthday}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile
