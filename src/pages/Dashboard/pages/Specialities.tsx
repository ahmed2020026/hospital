import { Button } from "@mui/material";
import Head from "../component/Head";
import BasicTable from "../component/Table";
import { assets, specialityData } from "../../../assets/assets_frontend/assets";
import AddIcon from "@mui/icons-material/Add";
import { InputText } from "../../../components/InputText";
import { useEffect, useRef, useState } from "react";
import { useOutClick } from "../../../hooks/useOutClick";

type SpecialityType = {
    id: number;
    speciality: string;
    image: string;
};

const Specialities = () => {
    const [image, setImage] = useState<string | null>(null);
    const [speciality, setSpeciality] = useState("");
    const [open, setOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const BoxRef = useRef<HTMLDivElement | null>(null);
    const BtnRef = useRef<HTMLButtonElement | null>(null);

    // Cleanup Object URL
    useEffect(() => {
        return () => {
            if (previewUrl) URL.revokeObjectURL(previewUrl);
        };
    }, [previewUrl]);

    // Toggle popup
    const toggleOpen = () => {
        setOpen(prev => !prev);
        if (!open) resetForm();
    };

    // Outside click handler
    useOutClick({
        ref: BtnRef,
        menu: BoxRef,
        func: () => setOpen(false),
    });

    // Reset form
    const resetForm = () => {
        setImage(null);
        setSpeciality("");
        setIsEdit(false);
    };

    // Handle form submit
    const handleSpeciality = () => {
        if (!speciality.trim()) return;

        console.log({
            image,
            speciality,
            mode: isEdit ? "edit" : "create",
        });

        resetForm();
        setOpen(false);
    };

    // Edit speciality
    const editSpeciality = (id: number) => {
        const selected:SpecialityType | undefined = specialityData.find(item => item.id === id);
        if (!selected) return;

        setImage(selected.image);
        setSpeciality(selected.speciality);
        setIsEdit(true);
        setOpen(true);
    };

    // Handle image upload
    const handleImageUpload = (file: File) => {
        if (previewUrl) URL.revokeObjectURL(previewUrl);

        const url = URL.createObjectURL(file);
        setPreviewUrl(url);
        setImage(url);
    };

    return (
        <section className="w-full relative">
            <div className="mb-5 pt-1">
                <div className="relative">
                    <Head title="Specialities" />

                    <Button
                        ref={BtnRef}
                        onClick={toggleOpen}
                        variant="contained"
                        size="small"
                        color="info"
                        sx={{
                            textTransform: "capitalize",
                            whiteSpace: "nowrap",
                            textAlign: "left",
                            justifyContent: "flex-start",
                            position: "absolute",
                            right: 0,
                            top: 0,
                        }}
                        startIcon={<AddIcon />}
                    >
                        Add Speciality
                    </Button>

                    {/* Popup Form */}
                    <div
                        ref={BoxRef}
                        className={`bg-white p-4 shadow-lg border border-gray-200 absolute left-0 top-full z-40 w-full transition-all duration-200 ease-out ${open
                                ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                                : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
                            }`}
                    >
                        <div className="flex gap-5">
                            {/* Image Upload */}
                            <div className="relative w-32 h-32 shrink-0 group">
                                <div className="w-full h-full rounded-full border-2 border-dashed border-gray-400 overflow-hidden group-hover:border-blue-500">
                                    <img
                                        src={image || assets.upload_area}
                                        alt="Speciality preview"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 rounded-full group-hover:opacity-100 flex items-center justify-center text-white text-sm">
                                        Upload
                                    </div>
                                </div>
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="absolute inset-0 opacity-0 cursor-pointer"
                                    onChange={(e) => {
                                        const file = e.target.files?.[0];
                                        if (file) handleImageUpload(file);
                                    }}
                                />
                            </div>

                            {/* Form */}
                            <div className="flex-1">
                                <h3 className="mb-2.5 text-lg font-semibold text-gray-800">
                                    {isEdit ? "Edit Speciality" : "Create Speciality"}
                                </h3>

                                <InputText
                                    type="text"
                                    label="Speciality"
                                    value={speciality}
                                    onChange={(e) => setSpeciality(e.target.value)}
                                />

                                <div className="mt-3 flex gap-3">
                                    <Button
                                        type="button"
                                        onClick={handleSpeciality}
                                        color="info"
                                        variant="contained"
                                        size="small"
                                    >
                                        {isEdit ? "Update" : "Submit"}
                                    </Button>

                                    <Button
                                        type="button"
                                        onClick={() => {
                                            resetForm();
                                            setOpen(false);
                                        }}
                                        color="error"
                                        variant="outlined"
                                        size="small"
                                    >
                                        Cancel
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Table */}
                <BasicTable page="speciality" data={specialityData} onEdit={editSpeciality} />
            </div>
        </section>
    );
};

export default Specialities;
