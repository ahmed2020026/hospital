import { Route, Routes } from 'react-router-dom'
import './App.css'
import { NavBar } from './components/NavBar'
import { HomePage } from './pages/HomePage'
import { All_Doctors } from './pages/All_Doctors'
import { Footer } from './sections/Footer'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <header className='bg-white shadow-md py-1 fixed top-0 left-0 w-full' style={{ zIndex: "1000" }}>
        <NavBar />
      </header>
      <main className='mt-20 px-2 pb-10'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/all_doctors' element={<All_Doctors />} />
          <Route path='*' element = {<NotFound />}/>
        </Routes>
      </main>
      <footer className='bg-gray-50 px-3'>
        <Footer />
      </footer>
    </>
  )
}

export default App
