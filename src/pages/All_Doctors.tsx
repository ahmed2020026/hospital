import { doctors } from "../assets/assets_frontend/assets"
import type { Doctor } from "../components/Card"
import ActionAreaCard from "../components/Card"

export const All_Doctors = () => {
  return (
    <section className="section p-2">
      <div className="container">
        <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {doctors.map((doctor: Doctor, index: number) => (
            <div key={index} className="p-3">
              <ActionAreaCard doc={doctor} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}