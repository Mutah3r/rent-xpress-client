import { NavLink, useLocation } from "react-router-dom";
import { FaHome, FaUserAlt, FaCalendarAlt, FaCarAlt, FaSignOutAlt } from "react-icons/fa";

const DashboardSidebar = () => {
    const location = useLocation();
    console.log(location);
    return (
        <div className="p-6 flex flex-col items-center gap-3 bg-white rounded-lg min-w-[230px]">
            <div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://i.pinimg.com/474x/05/c3/59/05c359cd010df3e7f1ea3cb6f6f54fad.jpg" />
                </div>
            </div>
            <div>
                <h2 className="text-center title-font text-[#3F4254] text-[20px] font-semibold">Adam Smith</h2>
                <h3 className="text-center title-font text-[#ACACAC]">adam.smith@yahoo.com</h3>
            </div>
            {/* Dashboard Navigation */}
            <div className="h-full flex flex-col justify-between w-full">
                <ul className="w-full">
                    <li>
                        <NavLink to="/dashboard" className={location.pathname === "/dashboard" ? "sidebar-link sidebar-active-link" : "sidebar-link"}>
                            <FaHome /> Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/profile" className={({ isActive }) => isActive ? "sidebar-link sidebar-active-link" : "sidebar-link"}>
                            <FaUserAlt /> My Profile
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/orders" className={({ isActive }) => isActive ? "sidebar-link sidebar-active-link" : "sidebar-link"}>
                            <FaCalendarAlt /> My Orders
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/favorite" className={({ isActive }) => isActive ? "sidebar-link sidebar-active-link" : "sidebar-link"}>
                            <FaCarAlt /> My Favorite Cars
                        </NavLink>
                    </li>
                </ul>
                <ul className="w-full">
                    <li>
                        <NavLink to="/dashboard/signOut" className={({ isActive }) => isActive ? "sidebar-link sidebar-active-link" : "sidebar-link"}>
                            <FaSignOutAlt /> Sign Out
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DashboardSidebar;