import { Route, Routes } from 'react-router-dom'
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
const NotFound = lazy(() => import("./pages/NotFound"))

function App() {
  return (
    <>
      <header className='bg-white shadow-md py-1 fixed top-0 left-0 w-full' style={{ zIndex: "1000" }}>
        <NavBar />
      </header>
      <main className='mt-20 px-2 pb-10'>
        <Suspense fallback = {<Loading />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/all_doctors' element={<All_Doctors />} />
            <Route path='/doctor/:id' element={<DoctorPage />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/Register' element={<Register />} />
            <Route path='/Login' element={<Login />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <footer className='bg-gray-50 px-3'>
        <Footer />
      </footer>
    </>
  )
}

export default App
