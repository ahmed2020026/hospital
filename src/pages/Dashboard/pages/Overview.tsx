import { Button } from "@mui/material";
import { assets } from "../../../assets/assets_admin/assets";
import SimpleLineChart from "../component/Chart";
import Head from "../component/Head";
import Kpi from "../component/Kpi";
import BasicTable from "../component/Table";
import AddIcon from '@mui/icons-material/Add';
import PeopleIcon from '@mui/icons-material/People';
import ReviewsIcon from '@mui/icons-material/Reviews';
import { useNavigate } from "react-router-dom";

const Overview = () => {
    const nav = useNavigate();
    const goTo = (path: string) => nav(path);

    const dataFromDB = [
        { name: "Ahmed Samir", action: "created new account" },
        { name: "Mohamed Ibrahiem", action: "added review" },
        { name: "Omar Salah", action: "added review" },
        { name: "Mustafa", action: "added review" }
    ];

    return (
        <section className="px-4 md:px-6 lg:px-8">
            <div className="mb-5">
                <Head title="Overview" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Kpi style="bg-blue-500" head="Total Doctors" result="120" image={assets.doctor_icon} />
                    <Kpi style="bg-emerald-500" head="Total Patients" result="120" image={assets.patients_icon} />
                    <Kpi style="bg-amber-500" head="Total Reviews" result="120" status={true} image={assets.reviews}/>
                    <Kpi style="bg-purple-500" head="Total Specialties" result="120" status={true} image={assets.appointments_icon}/>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 items-start">
                <div className="shadow-lg p-3 bg-white rounded-lg">
                    <Head title="Recent Activities" />
                    <BasicTable page="overview" width={300} data={dataFromDB} />
                </div>

                <div className="lg:col-span-2 space-y-3">
                    <div className="shadow-lg p-3 bg-white rounded-lg">
                        <Head title="Patient Flow Chart" />
                        <div role="img" aria-label="Patient flow chart">
                            <SimpleLineChart />
                        </div>
                    </div>

                    <div className="shadow-lg p-3 bg-white rounded-lg">
                        <Head title="Quick Actions" />
                        <div className="grid grid-cols-2 gap-3">
                            <Button aria-label="Add new doctor" onClick={() => goTo('dashboard/add_doctor')} variant="contained" size="medium" color="info" startIcon={<AddIcon />}>
                                Add Doctor
                            </Button>
                            <Button aria-label="View users" onClick={() => goTo('dashboard/patients')} variant="contained" size="medium" sx={{ backgroundColor: '#00bc7d' }} startIcon={<PeopleIcon />}>
                                View Users
                            </Button>
                            <Button aria-label="Add new specialty" onClick={() => goTo('dashboard/add_specialty')} variant="contained" size="medium" sx={{ backgroundColor: '#ad46ff' }} startIcon={<AddIcon />}>
                                Add Specialty
                            </Button>
                            <Button aria-label="Manage reviews" onClick={() => goTo('dashboard/review')} variant="contained" size="medium" sx={{ backgroundColor: '#fe9a00' }} startIcon={<ReviewsIcon />}>
                                Manage Reviews
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Overview;
