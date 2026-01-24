import { Button } from "@mui/material"
import { assets } from "../assets/assets_frontend/assets"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export const Appointment = () => {
    return (
        <div className="container bg-blue-500 rounded text-white pt-17 mt-10">
            <div className="lg:grid grid-cols-2">
                <div className="p-6 md:p-10">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl text-white text-center md:text-left font-semibold leading-tight md:leading-tight lg:leading-tight">Book Appointment With 100+ Trusted Doctors</h2>
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
                            Create Account
                        </Button>
                    </div>
                </div>
                <div className="flex justify-center">
                    <img src={assets.appointment_img} className="w-96" alt="Appointment image" />
                </div>
            </div>
        </div>
    )
}