import { specialityData } from "../assets/assets_frontend/assets"
import { HeadSection } from "../components/headSection"


export const Special = () => {
    return (
        <div className="container py-10">
            <HeadSection
                head="Find by Speciality"
                discripion="Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free."
            />

            <div className="hide-scrollbar px-5 grid grid-flow-col auto-cols-max gap-4 justify-start lg:justify-center overflow-x-auto py-4 snap-x snap-mandatory">
                {specialityData.map((item) => (
                    <div key={item.speciality} className="md:p-5 text-center snap-start">
                        <img
                            src={item.image}
                            loading="lazy"
                            decoding="async"
                            alt={item.speciality}
                            className="w-20 sm:w-28 block mx-auto mb-5"
                        />
                        <p className="text-sm">{item.speciality}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
