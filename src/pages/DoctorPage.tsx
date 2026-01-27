import { useParams } from "react-router-dom"
import { doctors } from "../assets/assets_frontend/assets"

const DoctorPage = () => {
    const { id } = useParams<{ id: string }>()

    const doc = doctors.find((doctor) => doctor.id === id)

    if (!doc) {
        return (
            <section className="p-2 pt-12">
                <div className="container text-center">
                    <h1 className="text-2xl font-semibold text-gray-700">
                        Doctor not found
                    </h1>
                    <p className="text-gray-500 mt-2">
                        The doctor you are looking for does not exist.
                    </p>
                </div>
            </section>
        )
    }

    return (
        <section className="p-2 pt-12">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5">
                    <div className="text-center bg-blue-600 rounded-lg mb-5">
                        <img
                            src={doc.image}
                            loading="lazy"
                            decoding="async"
                            className="block mx-auto rounded-md"
                            alt={`Photo of Dr. ${doc.name}`}
                        />
                    </div>

                    <div className="col-span-2">
                        <h1 className="flex items-center gap-2 text-3xl font-medium text-gray-700">
                            {doc.name}
                        </h1>

                        <div className="flex items-center gap-2 mt-1 text-gray-600">
                            <span>{doc.degree}</span>
                            <span>{doc.speciality}</span>
                            <span className="inline-block border border-gray-300 text-gray-500 text-sm rounded-lg px-2">
                                {doc.experience}
                            </span>
                        </div>

                        <div>
                            <h2 className="flex items-center gap-1 font-medium text-gray-700 mt-3">
                                About
                            </h2>
                            <p className="text-sm text-gray-600 mb-1">{doc.about}</p>
                            <p className="font-medium text-gray-700">
                                Appointment Fee: ${doc.fees}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DoctorPage
