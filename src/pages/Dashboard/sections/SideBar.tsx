import { NavLink } from "react-router-dom";
import { AsideLinks } from "../../../assets/assets_admin/assets";
import { ClickOpenMenu } from "../../../hooks/Context";
import { useOutClick } from "../../../hooks/useOutClick";
import { useRef } from "react";

const SideBar = () => {
    const { openMenu, SetOpenMenu, btnRef } = ClickOpenMenu();
    const RefMenu = useRef<HTMLElement>(null);

    useOutClick({
        ref: btnRef,
        menu: RefMenu,
        func: () => SetOpenMenu(false),
    });

    return (
        <aside
            ref={RefMenu}
            aria-hidden={!openMenu}
            className={`fixed top-18 left-0 w-60 h-full z-10 p-2 shadow-lg bg-white transform transition-transform duration-200 ease-in-out
                ${openMenu ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
        >
            {AsideLinks.map((link) => (
                <NavLink
                    to={link.route}
                    key={link.text}
                    end={link.route === "/dashboard"}
                    className={({ isActive }) =>
                        `flex items-center gap-3 w-full px-3 py-2 text-sm rounded transition-colors duration-200 ${isActive ? "bg-blue-100 text-blue-600" : "text-gray-600 hover:text-gray-900"
                        }`
                    }
                >
                    {link.icon}
                    {link.text}
                </NavLink>
            ))}
        </aside>
    );
};

export default SideBar;
