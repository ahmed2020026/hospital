import { doctors } from "../assets/assets_frontend/assets"
import ActionAreaCard from "../components/Card"
import { HeadSection } from "../components/headSection"
import type { Doctor } from "../components/Card"

export const TopDoctors = () => {
    return (
        <div className="container py-10">
            <div>
                <HeadSection head="Top Doctors to Book" discripion="Simply browse through our extensive list of trusted doctors." />
            </div>
            <div className="sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {doctors.slice(0, 4).map((doctor: Doctor, index: number) => (
                    <div key={index} className="p-5">
                        <ActionAreaCard doc={doctor} />
                    </div>
                ))}
            </div>
        </div>
    )
}