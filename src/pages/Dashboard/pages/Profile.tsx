import { Button } from "@mui/material";
import Head from "../component/Head";
import { useParams } from "react-router-dom";
import { doctors} from "../../../assets/assets_frontend/assets";

const Profile = () => {
    const { id } = useParams<{ id: string }>();
    const user = id ? doctors.find(doc => doc.id === id) : undefined;

    return (
        <section className="p-2">
            {/* Header */}
            <Head title="Profile" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Card (Image + Name) */}
                <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center">
                    <img
                        src={user?.image}
                        alt={`Profile photo of ${user?.name || 'User'}`}
                        role="img"
                        aria-label={`Profile photo of ${user?.name || 'User'}`}
                        loading="lazy"
                        decoding="async"
                        className="w-32 h-32 rounded-full object-cover border-4 border-gray-200 mb-4"
                    />

                    <h2 className="text-xl font-semibold text-gray-800">{user?.name || '-'}</h2>
                    <p className="text-sm text-gray-500 mt-1">
                        {user?.role || '-'} | {user?.speciality || '-'} | {user?.degree || '-'}
                    </p>
                    <p className="text-sm text-gray-500 mt-3 px-2">
                        Consultation Fee: ${user?.fees || 0}
                    </p>

                    <Button
                        aria-label={`Edit profile of ${user?.name || 'User'}`}
                        variant="contained"
                        sx={{ textTransform: 'lowercase', mt: 2.5 }}
                        color="info"
                        size="small"
                    >
                        Edit Profile
                    </Button>
                </div>

                {/* Right Card (Details) */}
                <div className="md:col-span-2 bg-white shadow-md rounded-2xl p-6">
                    {/* Contact Info */}
                    <h3 className="text-lg font-medium text-gray-700 mb-4">Contact Information</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        <div>
                            <p className="text-xs text-gray-400">Phone</p>
                            <p className="text-sm text-gray-800 font-medium">{user?.phone || '-'}</p>

                            <p className="text-xs text-gray-400 mt-3">Email</p>
                            <p className="text-sm text-gray-800 font-medium">{user?.email || '-'}</p>
                        </div>

                        <div>
                            <p className="text-xs text-gray-400">Address</p>
                            <p className="text-sm text-gray-800 font-medium">
                                - {user?.address?.line1 || '-'} <br /> - {user?.address?.line2 || '-'}
                            </p>
                        </div>
                    </div>

                    <div className="h-px bg-gray-200 my-6"></div>

                    {/* Basic Info */}
                    <h3 className="text-lg font-medium text-gray-700 mb-4">Basic Information</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-xs text-gray-400">Gender</p>
                            <p className="text-sm text-gray-800 font-medium">{user?.gender || '-'}</p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-400">Experience</p>
                            <p className="text-sm text-gray-800 font-medium">{user?.experience || '-'}</p>
                        </div>
                    </div>

                    <div className="mt-3">
                        <p className="text-xs text-gray-400">About</p>
                        <p className="text-sm text-gray-800 font-medium">{user?.about || '-'}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;
