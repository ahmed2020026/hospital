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
    const GoTo = (e:string) => nav(`/${e}`)

    const dataFromDB = [
        {
            name: "Ahmed Samir",
            action: "created new account"
        },
        {
            name: "Mohamed Ibrahiem",
            action: "added review"
        },
        {
            name: "Omar Salah",
            action: "added review"
        },
        {
            name: "Mustafa",
            action: "added review"
        }
    ];

    return (
        <section className="">
            <div className="mb-5">
                <Head title="Overview" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Kpi style="bg-blue-500" head="Total Doctors" result="120" image={assets.doctor_icon} />
                    <Kpi style="bg-emerald-500" head="Total Patients" result="120" image={assets.patients_icon} />
                    <Kpi style="bg-amber-500" head="Total Reviews" result="120" image={assets.reviews} status={true} />
                    <Kpi style="bg-purple-500" head="Total Specialties" result="120" status={true} image={assets.appointments_icon} />
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 items-start">
                <div className="shadow-lg p-3 bg-white rounded-lg">
                    <Head title="recent activities" />
                    <div className="">
                        <BasicTable page="overview" width={300} data={dataFromDB} />
                    </div>
                </div>
                <div className="lg:col-span-2 ">
                    <div className="shadow-lg p-3 bg-white rounded-lg">
                        <Head title="patient flow chart" />
                        <div>
                            <SimpleLineChart />
                        </div>
                    </div>
                    <div className="shadow-lg p-3 bg-white rounded-lg mt-3">
                        <Head title="Quick actions" />
                        <div className="grid grid-cols-2 justify-start items-center gap-3">
                            <Button onClick={() => GoTo('dashboard/add_doctor')} variant="contained" size="medium" color="info" sx={{ textTransform: 'capitalize' , whiteSpace:'nowrap' , textAlign:'left' , justifyContent:'flex-start' }} startIcon={<AddIcon />}>
                                Add Doctor
                            </Button>
                            <Button onClick={() => GoTo('dashboard/patients')} variant="contained" size="medium" sx={{ textTransform: 'capitalize' , backgroundColor:'#00bc7d' , whiteSpace:'nowrap' , textAlign:'left' , justifyContent:'flex-start' }} startIcon={<PeopleIcon />}>
                                view users
                            </Button>
                            <Button onClick={() => GoTo('dashboard/add_apecialty')} variant="contained" size="medium" sx={{ textTransform: 'capitalize' , backgroundColor:'#ad46ff' , whiteSpace:'nowrap' , textAlign:'left' , justifyContent:'flex-start' }} startIcon={<AddIcon />}>
                                Add Specialty
                            </Button>
                            <Button onClick={() => GoTo('dashboard/review')} variant="contained" size="medium" sx={{ textTransform: 'capitalize' , backgroundColor:'#fe9a00' , whiteSpace:'nowrap' , textAlign:'left' , justifyContent:'flex-start' }} startIcon={<ReviewsIcon />}>
                                manage reviews
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Overview;