import { Button } from "@mui/material"
import { doctors } from "../../../assets/assets_frontend/assets"
import Head from "../component/Head"
import BasicTable from "../component/Table"
import { useNavigate } from "react-router-dom"
import AddIcon from '@mui/icons-material/Add';

const All_Doctors = () => {
    const nav = useNavigate();
    const GoTo = (e: string) => nav(`/${e}`)
    return (
        <section className="w-full relative">
            <div className="mb-5 pt-1">
                <div className="relative">
                    <Head title="doctors" />
                    <Button onClick={() => GoTo('dashboard/add_doctor')} variant="contained" size="small" color="info" sx={{ textTransform: 'capitalize', whiteSpace: 'nowrap', textAlign: 'left', justifyContent: 'flex-start' , position:'absolute' , right:0 , top:0 }} startIcon={<AddIcon />}>
                        Add Doctor
                    </Button>
                </div>
                <div className="grid grid-cols-1">
                    <div className="relative">
                        <BasicTable page="doctors" width={800} data={doctors} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default All_Doctors
