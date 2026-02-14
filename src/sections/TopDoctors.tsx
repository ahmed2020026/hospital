import { doctors } from "../assets/assets_frontend/assets"
import ActionAreaCard from "../components/Card"
import { HeadSection } from "../components/headSection"
//import type { Doctor } from "../components/Card"
import { Link } from "react-router-dom"

export const TopDoctors = () => {
    const topDoctors = doctors.slice(0, 4)

    return (
        <div className="container py-10">
            <HeadSection
                head="Top Doctors to Book"
                description="Simply browse through our extensive list of trusted doctors."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {topDoctors.map((doctor) => (
                    <div key={doctor.id} className="p-5">
                        <Link
                            to={`/doctor/${doctor.id}`}
                            className="block"
                            aria-label={`View profile of Dr. ${doctor.name}`}
                        >
                            <ActionAreaCard doc={doctor} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
