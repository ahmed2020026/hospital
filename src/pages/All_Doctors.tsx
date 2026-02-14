import { Link } from "react-router-dom";
import { doctors } from "../assets/assets_frontend/assets";
import type { Doctor } from "../components/Card";
import ActionAreaCard from "../components/Card";

const All_Doctors = () => {
  if (doctors.length === 0) {
    return (
      <section className="section p-2">
        <div className="container text-center text-gray-500">
          No doctors available.
        </div>
      </section>
    );
  }

  return (
    <section className="section p-2">
      <main className="container">
        <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {doctors.map((doctor: Doctor) => (
            <div key={doctor.id} className="p-3">
              <Link to={`/doctor/${doctor.id}`} className="block">
                <ActionAreaCard doc={doctor} />
              </Link>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default All_Doctors;
