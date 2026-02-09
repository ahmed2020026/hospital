import add_icon from './add_icon.svg'
import admin_logo from './admin_logo.svg'
import appointment_icon from './appointment_icon.svg'
import cancel_icon from './cancel_icon.svg'
import doctor_icon from './doctor_icon.svg'
import home_icon from './home_icon.svg'
import people_icon from './people_icon.svg'
import upload_area from './upload_area.svg'
import list_icon from './list_icon.svg'
import tick_icon from './tick_icon.svg'
import appointments_icon from './special.png'
import reviews from './rating.png'
import earning_icon from './earning_icon.svg'
import patients_icon from './patients_icon.svg'
import profile from './profile.png'

/* icons */
import DashboardIcon from '@mui/icons-material/Dashboard';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import ReviewsIcon from '@mui/icons-material/Reviews';
import SettingsIcon from '@mui/icons-material/Settings';
import WebIcon from '@mui/icons-material/Web';
import CategoryIcon from '@mui/icons-material/Category';
import PeopleIcon from '@mui/icons-material/People';
import FaceIcon from '@mui/icons-material/Face';


export const assets = {
    add_icon,
    admin_logo,
    appointment_icon,
    cancel_icon,
    doctor_icon,
    upload_area,
    reviews,
    home_icon,
    patients_icon,
    people_icon,
    list_icon,
    tick_icon,
    appointments_icon,
    earning_icon,
    profile
}

export const AsideLinks = [
    { text: 'Overview', route: '/dashboard' , icon: <DashboardIcon fontSize='small' /> },
    { text: 'All Doctors', route: '/dashboard/all_doctors' , icon: <MedicalInformationIcon fontSize='small' /> },
    { text: 'Specialties', route: '/dashboard/specialties' , icon: <CategoryIcon fontSize='small' /> },
    { text: 'Patients', route: '/dashboard/patients' , icon: <PeopleIcon fontSize='small' /> },
    { text: 'Review', route: '/dashboard/review' , icon: <ReviewsIcon fontSize='small' /> },
    { text: 'Profile', route: '/dashboard/profile' , icon: <FaceIcon fontSize='small' /> },
    { text: 'Settings', route: '/dashboard/settings' , icon: <SettingsIcon fontSize='small' /> },
    {text:'Website' , route:'/' , icon: <WebIcon fontSize='small' />}
]
