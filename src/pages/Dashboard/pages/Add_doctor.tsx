import { useNavigate, useParams } from "react-router-dom";
import { InputText } from "../../../components/InputText";
import { SelectInput } from "../../../components/SelectInput";
import TextArea from "../../../components/TextArea";
import { Button } from "@mui/material";
import { assets, doctors } from "../../../assets/assets_frontend/assets";
import { useEffect, useState } from "react";

const Add_doctor = () => {
    const nav = useNavigate();
    // ================= IMAGE =================
    const [image, setImage] = useState<string | null>(null);

    useEffect(() => {
        return () => {
            if (image) URL.revokeObjectURL(image);
        };
    }, [image]);

    // ================= STATES =================
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [degree, setDegree] = useState('');
    const [experience, setExperience] = useState('');
    const [about, setAbout] = useState('');
    const [fees, setFees] = useState(0);
    const [address, setAdress] = useState('');
    const [number, setNumber] = useState('');

    const [gender, setGender] = useState("");
    const [speciality, setSpeciality] = useState("");


    // ================= Edite Page =============
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        if (!id) return;

        const doctor = doctors.find((doctor) => doctor.id === id);

        if (doctor) {
            setName(doctor.name);
            setEmail(doctor.email);
            setNumber(doctor.phone);
            setDegree(doctor.degree);
            setFees(doctor.fees);
            setAdress(doctor.address.line1);
            setSpeciality(doctor.speciality);
            setAbout(doctor.about);
            setGender(doctor.gender);
            setExperience(doctor.experience);
            setImage(doctor.image);
        }
    }, [id]);
    // ================= SUBMIT =================
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        console.log({
            "image": image,
            "name": name,
            "email": email,
            "number": number,
            "speciali": speciality,
            "gender": gender,
            "exper": experience,
            "fees": fees,
            "degree": degree,
            "address": address,
            "about": about
        })
        nav('/dashboard/all_doctors')
    };

    // ================= UI =================
    return (
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-2xl p-6 mt-6">
            <form onSubmit={handleSubmit}>
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                    {id ? "Edit Doctor Information": "New Doctor Registration"}
                </h2>

                <div className="space-y-5">
                    {/* ================= IMAGE ================= */}
                    <div className="relative w-32 h-32 mx-auto group">
                        <div className="w-full h-full rounded-full border-2 border-dashed border-gray-400 overflow-hidden transition group-hover:border-blue-500">
                            <img
                                src={image || assets.upload_area}
                                alt="profile"
                                className="w-full h-full object-cover"
                            />

                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center rounded-full">
                                <span className="text-white text-sm font-medium">
                                    Upload
                                </span>
                            </div>
                        </div>

                        <input
                            type="file"
                            accept="image/*"
                            name="image"
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) setImage(URL.createObjectURL(file));
                            }}
                        />
                    </div>

                    {/* ================= BASIC ================= */}
                    <div>
                        <InputText type="text" label="Full Name" value={name} func={(e: any) => setName(e.target.value)} />
                    </div>
                    <div>
                        <InputText type="email" label="Email" value={email} func={(e: any) => setEmail(e.target.value)} />
                    </div>

                    {/* ================= GRID ================= */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <InputText type="text" label="Degree" value={degree} func={(e) => setDegree(e.target.value)} />
                        <InputText type="number" label="Fees" value={fees.toString()} func={(e) => setFees(e.target.value)} />
                        <InputText type="string" label="Experience (Years)" value={experience} func={(e) => setExperience(e.target.value)} />

                        <SelectInput
                            label="Speciality"
                            value={speciality}
                            func={(e: any) => setSpeciality(e.target.value)}
                            values={[
                                "General physician",
                                "Gynecologist",
                                "Dermatologist",
                                "Pediatrician",
                                "Neurologist",
                            ]}
                        />
                    </div>

                    <div>
                        <InputText type="string" label="Phone Number" value={number.toString()} func={(e) => setNumber(e.target.value)} />
                    </div>
                    <div>
                        <InputText type="text" label="Address" value={address} func={(e) => setAdress(e.target.value)} />
                    </div>

                    <div>
                        <SelectInput
                            label="Gender"
                            value={gender}
                            func={(e: any) => setGender(e.target.value)}
                            values={["Male", "Female"]}
                        />
                    </div>

                    <div>
                        <TextArea value={about} func={(e) => setAbout(e.target.value)} />
                    </div>

                    <Button
                        type="submit"
                        fullWidth
                        size="medium"
                        variant="contained"
                        color="info"
                    >
                        {id? "Update Doctor": "Add Doctor"}
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default Add_doctor;
