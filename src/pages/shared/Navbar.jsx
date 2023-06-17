import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    const navLinks = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "Cars",
            path: "/cars"
        },
        {
            title: "About Us",
            path: "/about"
        },
        {
            title: "Contact",
            path: "/contact"
        }
    ];

    return (
        <nav className="p-3 navbar bg-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <FaBars />
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navLinks.map(({ title, path }) => {
                                return (
                                    <li className="font-semibold text-[15px]" key={path}>
                                        <NavLink
                                            to={path}
                                            className={({ isActive }) => isActive ? "text-green-500" : ""}
                                        >
                                            {title}
                                        </NavLink>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <h1 className="text-[32px] font-semibold"><Link to="/">RentXpress</Link></h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navLinks.map(({ title, path }) => {
                            return (
                                <li className="font-semibold text-[15px]" key={path}>
                                    <NavLink
                                        to={path}
                                        className={({ isActive }) => isActive ? "text-green-500" : ""}
                                    >
                                        {title}
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <div className="avatar">
                    <div className="w-[56px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-0">
                        <img src="https://i.pinimg.com/474x/05/c3/59/05c359cd010df3e7f1ea3cb6f6f54fad.jpg" />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;