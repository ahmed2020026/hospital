import { Button } from "@mui/material"
import { assets } from "../assets/assets_frontend/assets"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export const Hero = () => {
    return (
        <div className="container bg-blue-500 rounded text-white pt-10 md:pt-17">
            <div className="lg:grid grid-cols-2">
                <div className="p-6 md:p-10">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl text-white text-center md:text-left font-semibold leading-tight md:leading-tight lg:leading-tight">Book Appointment With Trusted Doctors</h2>
                    <div className="md:flex gap-5 mt-10 items-center text-center md:text-left">
                        <img src={assets.group_profiles} loading="eager" alt="avater" className="mb-3 md:mb-0 w-28 shrink-0 block mx-auto md:mx-0" />
                        <p>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
                    </div>
                    <div className="my-10 text-center md:text-left">
                        <Button
                            variant="contained"
                            endIcon={<ArrowRightAltIcon />}
                            sx={{
                                backgroundColor: "#fff",
                                color: "#333",
                                borderRadius:"25px",
                                textTransform: "lowercase",
                                paddingY:"10px",
                                
                                "&:hover": {
                                    backgroundColor: "#f5f5f5",
                                },
                            }}
                        >
                            Book appointment
                        </Button>
                    </div>
                </div>
                <div className="flex justify-center">
                    <img src={assets.header_img} loading="eager" className="w-96" alt="Hero image" />
                </div>
            </div>
        </div>
    )
}