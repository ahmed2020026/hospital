import { specialityData } from "../assets/assets_frontend/assets"
import { HeadSection } from "../components/headSection"


export const Special = () => {
    return (
        <div className="container py-10">
            <HeadSection head="Find by Speciality" discripion="Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free." />
            <div className={`hide-scrollbar grid grid-flow-col gap-4 justify-center auto-cols-max overflow-x-auto py-4`}>
                {
                    specialityData.map((item , index) => (
                        <div key={index} className="md:p-5 text-center">
                            <img src={item.image} alt={item.speciality} className="w-20 sm:w-28 block mx-auto mb-5" />
                            <p className="text-sm">{item.speciality}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}