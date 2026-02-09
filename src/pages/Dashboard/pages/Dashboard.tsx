import { Outlet } from "react-router-dom"
import NavBar from "../sections/NavBar"
import SideBar from "../sections/SideBar"

const Dashboard = () => {
    return (
        <>
            <NavBar /> {/* NavBar fixed */}
            <main className="flex pt-16 min-h-screen"> {/* pt-16 عشان NavBar */}
                <SideBar />
                <div className="flex-1 duration-200 md:ml-60 p-4"> {/* ml-60 عشان SideBar */}
                    <Outlet />
                </div>
            </main>
        </>
    )
}

export default Dashboard
