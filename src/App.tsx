import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import { NavBar } from './components/NavBar'
import { HomePage } from './pages/HomePage'
import { Footer } from './sections/Footer'

import { lazy, Suspense } from 'react'
import Loading from './pages/Loading'


const All_Doctors = lazy(() => import("./pages/All_Doctors"));
const DoctorPage = lazy(() => import("./pages/DoctorPage"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Profile = lazy(() => import("./pages/Profile"));
const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Login"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Dashboard pages
const ProfileAdmin = lazy(() => import("./pages/Dashboard/pages/Profile"));
const AllDoctors = lazy(() => import("./pages/Dashboard/pages/All_Doctors"));
const Dashboard = lazy(() => import('./pages/Dashboard/pages/Dashboard'));
const Overview = lazy(() => import('./pages/Dashboard/pages/Overview'));
const Add_doctor = lazy(() => import('./pages/Dashboard/pages/Add_doctor'));
const Specialities = lazy(() => import('./pages/Dashboard/pages/Specialities'));

function App() {
  const { pathname } = useLocation();

  const hideLayout = pathname.startsWith("/dashboard");
  return (
    <>
      {!hideLayout && <header className='bg-white shadow-md py-1 fixed top-0 left-0 w-full' style={{ zIndex: "1000" }}>
        <NavBar />
      </header>}
      <main className={`${!hideLayout ? 'mt-20 px-2 pb-10' : ''} `}>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/all_doctors' element={<All_Doctors />} />
            <Route path='/doctor/:id' element={<DoctorPage />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/Register' element={<Register />} />
            <Route path='/Login' element={<Login />} />

            <Route path='dashboard' element={<Dashboard />}>
              <Route index element={<Overview />} />
              <Route path='profile' element={<ProfileAdmin />} />
              <Route path='profile/:id' element={<ProfileAdmin />} />
              <Route path='all_doctors' element={<AllDoctors />} />
              <Route path='add_doctor' element={<Add_doctor />} />
              <Route path='edite/:id' element={<Add_doctor />} />
              <Route path='specialties' element={<Specialities />} />
              <Route path='*' element={<NotFound />} />
            </Route>

            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      {!hideLayout && <footer className='bg-white px-3'>
        <Footer />
      </footer>}
    </>
  )
}

export default App
