import { FaRegCalendarCheck, FaCalendarAlt, FaRegCalendarTimes, FaTags } from "react-icons/fa";

const DashboardHome = () => {
    return (
        <div className="w-full overflow-auto flex flex-col gap-6">
            {/* usage summary */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-6 flex flex-col gap-5 bg-white rounded-lg">
                    <FaRegCalendarCheck className="text-primary text-3xl" />
                    <div>
                        <h1 className="title-font text-[50px] text-[#3F4254]">03</h1>
                        <h2 className="text-[#ACACAC]">Upcoming Orders</h2>
                    </div>
                </div>
                <div className="p-6 flex flex-col gap-5 bg-white rounded-lg">
                    <FaTags className="text-primary text-3xl" />
                    <div>
                        <h1 className="title-font text-[50px] text-[#3F4254]">0</h1>
                        <h2 className="text-[#ACACAC]">Coupons</h2>
                    </div>
                </div>
                <div className="p-6 flex flex-col gap-5 bg-white rounded-lg">
                    <FaCalendarAlt className="text-primary text-3xl" />
                    <div>
                        <h1 className="title-font text-[50px] text-[#3F4254]">58</h1>
                        <h2 className="text-[#ACACAC]">Total Orders</h2>
                    </div>
                </div>
                <div className="p-6 flex flex-col gap-5 bg-white rounded-lg">
                    <FaRegCalendarTimes className="text-primary text-3xl" />
                    <div>
                        <h1 className="title-font text-[50px] text-[#3F4254]">24</h1>
                        <h2 className="text-[#ACACAC]">Cancelled Orders</h2>
                    </div>
                </div>
            </div>

            {/* order history */}
            <div className="bg-white rounded-lg p-6 max-w-[100%]">
                <h2 className="title-font text-[20px] text-[#3F4254] font-semibold">Order History</h2>

                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                        <thead className="text-left">
                            <tr className="text-[12px] text-[#ACACAC] uppercase">
                                <th className="whitespace-nowrap px-4 py-2">
                                    ORDER ID
                                </th>
                                <th className="whitespace-nowrap px-4 py-2">
                                    CAR NAME
                                </th>
                                <th className="whitespace-nowrap px-4 py-2">
                                    PICK UP LOCATION
                                </th>
                                <th className="whitespace-nowrap px-4 py-2">
                                    DROP OFF LOCATION
                                </th>
                                <th className="whitespace-nowrap px-4 py-2">
                                    PICK UP DATE
                                </th>
                                <th className="whitespace-nowrap px-4 py-2">
                                    RETURN DATE
                                </th>
                                <th className="whitespace-nowrap py-2 text-left">
                                    STATUS
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200">
                            <tr>
                                <td className="whitespace-nowrap px-4 py-2 text-[#262626] font-semibold text-[12px]">
                                    #01234
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 text-[#727272] text-[14px] font-semibold">
                                    Jeep Renegade
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 text-[#727272] text-[14px]">
                                    New York
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 text-[#727272] text-[14px]">
                                    Los Angeles
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 text-[#727272] text-[14px]">
                                    March 2, 2023
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 text-[#727272] text-[14px]">
                                    March 10, 2023
                                </td>
                                <td>
                                    <div className="badge text-white font-semibold text-[12px] badge-success">completed</div>
                                </td>
                            </tr>

                            <tr>
                                <td className="whitespace-nowrap px-4 py-2 text-[#262626] font-semibold text-[12px]">
                                    #01234
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 text-[#727272] text-[14px] font-semibold">
                                    Jeep Renegade
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 text-[#727272] text-[14px]">
                                    New York
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 text-[#727272] text-[14px]">
                                    Los Angeles
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 text-[#727272] text-[14px]">
                                    March 2, 2023
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 text-[#727272] text-[14px]">
                                    March 10, 2023
                                </td>
                                <td>
                                    <div className="badge text-white font-semibold text-[12px] badge-error">cancelled</div>
                                </td>
                            </tr>

                            <tr>
                                <td className="whitespace-nowrap px-4 py-2 text-[#262626] font-semibold text-[12px]">
                                    #01234
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 text-[#727272] text-[14px] font-semibold">
                                    Jeep Renegade
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 text-[#727272] text-[14px]">
                                    New York
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 text-[#727272] text-[14px]">
                                    Los Angeles
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 text-[#727272] text-[14px]">
                                    March 2, 2023
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 text-[#727272] text-[14px]">
                                    March 10, 2023
                                </td>
                                <td>
                                    <div className="badge text-white font-semibold text-[12px] badge-warning">scheduled</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;