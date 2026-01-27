import { useParams } from "react-router-dom"
import type { Doctor } from "../components/Card";
import { doctors } from "../assets/assets_frontend/assets";

const DoctorPage = () => {
    const { id } = useParams();
    const doc = doctors.find(
        (doctor: Doctor) => doctor.id == id
    );

    return (
        <section className="p-2 pt-12">
            <div className="container">
                <div className="md:grid grid-cols-3 gap-5">
                    <div className="text-center bg-blue-600 rounded-lg mb-5">
                        <img src={doc?.image} loading="lazy" className="block mx-auto rounded-md" alt={doc?.name} />
                    </div>
                    <div className="col-span-2">
                        <h2 className="flex items-center gap-2 text-3xl font-medium text-gray-700">{doc?.name}</h2>
                        <div className="flex items-center gap-2 mt-1 text-gray-600">
                            <span>{doc?.degree}</span>
                            <span>{doc?.speciality}</span>
                            <span className="inline-block border border-gray-300 text-gray-500 text-sm rounded-lg px-2">{doc?.experience}</span>
                        </div>
                        <div>
                            <h3 className="flex items-center gap-1 font-medium text-gray-700 mt-3">About</h3>
                            <p className="text-sm text-gray-600 mb-1">{doc?.about}</p>
                            <p className="font-medium text-gray-700">Appointment Fee: ${doc?.fees}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DoctorPage;