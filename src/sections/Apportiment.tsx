import { Button } from "@mui/material";
import { assets } from "../assets/assets_frontend/assets";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export const Appointment = () => {
    return (
        <section className="container bg-blue-500 rounded-xl text-white mt-10 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">

                {/* Left: Text + Button */}
                <div className="p-6 md:p-10">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug md:leading-tight text-center md:text-left">
                        Book Appointment With 100+ Trusted Doctors
                    </h2>

                    <p className="mt-4 text-center md:text-left text-white/90 text-sm md:text-base">
                        Join thousands of patients who trust us to manage their healthcare efficiently.
                    </p>

                    <div className="mt-8 flex justify-center md:justify-start">
                        <Button
                            aria-label="Create an account to book a doctor appointment"
                            variant="contained"
                            endIcon={<ArrowRightAltIcon />}
                            sx={{
                                backgroundColor: "#fff",
                                color: "#333",
                                borderRadius: "25px",
                                textTransform: "none",
                                paddingY: "10px",
                                paddingX: "20px",
                                fontWeight: 600,
                                "&:hover": { backgroundColor: "#f5f5f5" },
                                "&:focus": { outline: "2px solid #fff", outlineOffset: "2px" },
                            }}
                        >
                            Create Account
                        </Button>
                    </div>
                </div>

                {/* Right: Image */}
                <div className="flex justify-center mt-6 lg:mt-0">
                    <img
                        src={assets.appointment_img}
                        loading="lazy"
                        decoding="async"
                        className="w-full max-w-md lg:max-w-lg"
                        alt="Doctor appointment illustration"
                    />
                </div>

            </div>
        </section>
    );
};
