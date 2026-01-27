import { Link } from "react-router-dom"
import { doctors } from "../assets/assets_frontend/assets"
import type { Doctor } from "../components/Card"
import ActionAreaCard from "../components/Card"


const All_Doctors = () => {
  return (
    <section className="section p-2">
      <div className="container">
        <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {doctors.map((doctor: Doctor, index: number) => (
            <div key={index} className="p-3">
              <Link to={`/doctor/${doctor.id}`} className="block">
                <ActionAreaCard doc={doctor} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default All_Doctors;