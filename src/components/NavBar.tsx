import { assets, PageRoutes } from "../assets/assets_frontend/assets"
import { Link, NavLink } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButtonNav } from "./IconButtonNav";
import { useRef, useState } from "react";
import { useOutClick } from "../hooks/useOutClick";
import DashboardIcon from '@mui/icons-material/Dashboard';
import FaceIcon from '@mui/icons-material/Face';
import LoginIcon from '@mui/icons-material/Login';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import LogoutIcon from '@mui/icons-material/Logout';

export const NavBar = () => {
    const btnRef = useRef<HTMLButtonElement>(null);
    const menuRef = useRef<HTMLElement>(null);
    const [open, setOpen] = useState<boolean>(false);
    const toggleMenu = () => setOpen(!open);

    useOutClick({
        ref: btnRef,
        menu: menuRef,
        func: () => setOpen(false)
    })

    const [op, setOp] = useState<boolean>(false);
    const toggleMenuProfile = () => setOp(!op);
    const btnRefFace = useRef<HTMLButtonElement>(null);
    const menuRefFace = useRef<HTMLUListElement>(null);

    useOutClick({
        ref: btnRefFace,
        menu: menuRefFace,
        func: () => setOp(false)
    })
    return (
        <div className="container py-2.5">
            <div className="flex justify-start items-center gap-5">
                <Link to={'/'} className="block">
                    <img src={assets.logo} className="w-44 cursor-pointer" alt="logo" />
                </Link>

                <div className="flex justify-end lg:justify-between items-center w-full ">
                    {/* links in larg screen */}
                    <nav className="hidden lg:flex justify-between items-center pt-1">
                        {
                            PageRoutes.map((link, index) => (
                                <NavLink to={link.url} key={index} className={({ isActive }) => `relative px-2 py-2 block transition-all hover:text-blue-600 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-0.5 after:w-6 rounded after:bg-blue-600 after:transition-all
                                    ${isActive
                                        ? "after:opacity-100 text-blue-600"
                                        : "after:opacity-0 text-gray-800"
                                    }`
                                }>
                                    {link.text}
                                </NavLink>
                            ))
                        }
                    </nav>

                    {/* links in small screen */}
                    <nav ref={menuRef} className={`absolute left-0 p-2 top-[106%] w-full bg-white shadow rounded z-0 transform transition-all duration-300 ease-in-out ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}`}
                    >
                        <ul>
                            {PageRoutes.map((link, index) => (
                                <NavLink to={link.url} key={index} className={({ isActive }) => `relative px-2 py-2 block transition-colors duration-200 rounded ${isActive ? "bg-blue-100 text-blue-600" : "text-gray-800 hover:bg-gray-100"}`}>
                                    {link.text}
                                </NavLink>
                            ))}
                        </ul>
                    </nav>

                    <div className="icons-links">
                        <div className="relative">
                            <span className="lg:hidden" ref={btnRef} onClick={toggleMenu}>
                                <IconButtonNav icon={open ? <CloseIcon /> : <MenuIcon />} color="false" bgColor="false" />
                            </span>
                            <span onClick={toggleMenuProfile} ref={btnRefFace}>
                                <IconButtonNav icon={<AccountCircleIcon />} />
                            </span>
                            <ul ref={menuRefFace} className={`${op ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"} absolute right-0 top-[110%] w-56 bg-white border border-gray-200 rounded-lg shadow-lg p-1 transition-all duration-300 ease-out origin-top`}>
                                <li className="rounded-md overflow-hidden">
                                    <Link to="/dashboard" className="flex items-center gap-3 w-full px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition">
                                        <DashboardIcon fontSize="small" />
                                        Dashboard Admin
                                    </Link>
                                </li>

                                <li className="rounded-md overflow-hidden">
                                    <Link to="/profile" className="flex items-center gap-3 w-full px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition">
                                        <FaceIcon fontSize="small" />
                                        Profile
                                    </Link>
                                </li>

                                <li className="rounded-md overflow-hidden">
                                    <Link to="/login" className="flex items-center gap-3 w-full px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition">
                                        <LoginIcon fontSize="small" />
                                        Login
                                    </Link>
                                </li>

                                <li className="rounded-md overflow-hidden">
                                    <Link to="/register" className="flex items-center gap-3 w-full px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition" >
                                        <ExitToAppIcon fontSize="small" />
                                        Register
                                    </Link>
                                </li>

                                <li className="rounded-md overflow-hidden">
                                    <Link to={'/'} className="flex items-center gap-3 w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 hover:text-red-700 transition">
                                        <LogoutIcon fontSize="small" />
                                        Logout
                                    </Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}