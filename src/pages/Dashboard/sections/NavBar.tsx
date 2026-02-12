import { Link } from "react-router-dom"
import { assets } from "../../../assets/assets_admin/assets"
import { useRef, useState } from "react"
import FaceIcon from '@mui/icons-material/Face';
import LogoutIcon from '@mui/icons-material/Logout';
import { IconButtonNav } from "../../../components/IconButtonNav";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { useOutClick } from "../../../hooks/useOutClick";
import { ClickOpenMenu } from "../../../hooks/Context";

const NavBar = () => {
    const { openMenu, SetOpenMenu , btnRef} = ClickOpenMenu();
    const toggleSideBar = () => SetOpenMenu(!openMenu);

    const [op, setOp] = useState(false);
    const BtnSubRef = useRef<HTMLButtonElement>(null);
    const MenuSubRef = useRef<HTMLUListElement>(null)
    const toggleSubMenu = () => setOp(!op);
    useOutClick({
        ref: BtnSubRef,
        menu: MenuSubRef,
        func: () => setOp(false)
    })
    return (
        <header className="fixed top-0 left-0 w-full h-18 z-20 flex items-center justify-between px-4 md:px-2 py-5 shadow-xl md:shadow bg-white">
            <img src={assets.admin_logo} className="w-40 block" alt="admin_logo" />
            <div className="icons-links">
                <div className="relative">
                    <span className="md:hidden" onClick={toggleSideBar} ref={btnRef}>
                        <IconButtonNav text="icon menu" icon={openMenu ? <CloseIcon /> : <MenuIcon />} color="false" bgColor="false" />
                    </span>
                    <span onClick={toggleSubMenu} ref={BtnSubRef}>
                        <IconButtonNav icon={<AccountCircleIcon />} text="icon user" />
                    </span>
                    <ul ref={MenuSubRef} className={`${op ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"} absolute right-0 top-[110%] w-56 bg-white border border-gray-200 rounded-lg shadow-lg p-1 transition-all duration-300 ease-out origin-top`}>

                        <li className="rounded-md overflow-hidden">
                            <Link to="/profile" className="flex items-center gap-3 w-full px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition">
                                <FaceIcon fontSize="small" />
                                Profile
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
        </header>
    )
}

export default NavBar
