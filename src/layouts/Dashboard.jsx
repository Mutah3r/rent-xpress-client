import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";
import DashboardSidebar from "../pages/dashboard/DashboardSidebar";
import DashboardTitleParallax from "../pages/dashboard/DashboardTitleParallax";

const Dashboard = () => {
    return (
        <div className="max-w-screen-2xl mx-auto">
            <Navbar />
            <DashboardTitleParallax />
            <section className="bg-[#F5F8FA] flex flex-col md:flex-row gap-6 p-4 sm:p-5 md:p-10 w-full">
                <DashboardSidebar />
                <Outlet />
            </section>
            <Footer />
        </div>
    );
};

export default Dashboard;