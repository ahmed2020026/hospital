import { doctors } from "../assets/assets_frontend/assets"
import ActionAreaCard from "../components/Card"
import { HeadSection } from "../components/headSection"
import type { Doctor } from "../components/Card"
import { Link } from "react-router-dom"

export const TopDoctors = () => {
    
    return (
        <div className="container py-10">
            <div>
                <HeadSection head="Top Doctors to Book" discripion="Simply browse through our extensive list of trusted doctors." />
            </div>
            <div className="sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {doctors.slice(0, 4).map((doctor: Doctor, index: number) => (
                    <div key={index} className="p-5">
                        <Link to={`doctor/${doctor.id}`} className="block">
                            <ActionAreaCard doc={doctor} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}