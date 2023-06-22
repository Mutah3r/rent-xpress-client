const Orders = () => {
    return (
        <div className="w-[100%] overflow-auto flex flex-col gap-6">
            {/* Scheduled Orders */}
            <div className="bg-white rounded-lg w-[100%] overflow-auto flex flex-col gap-6">
                <div className="bg-white rounded-lg p-6 max-w-[100%]">
                    <h2 className="title-font text-[20px] text-[#3F4254] font-semibold">Scheduled Orders</h2>

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
                                        <div className="badge text-white font-semibold text-[12px] badge-warning">scheduled</div>
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

            {/* Completed Orders */}
            <div className="bg-white rounded-lg w-[100%] overflow-auto flex flex-col gap-6">
                <div className="bg-white rounded-lg p-6 max-w-[100%]">
                    <h2 className="title-font text-[20px] text-[#3F4254] font-semibold">Completed Orders</h2>

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
                                        <div className="badge text-white font-semibold text-[12px] badge-success">completed</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Cancelled Orders */}
            <div className="bg-white rounded-lg w-[100%] overflow-auto flex flex-col gap-6">
                <div className="bg-white rounded-lg p-6 max-w-[100%]">
                    <h2 className="title-font text-[20px] text-[#3F4254] font-semibold">Cancelled Orders</h2>

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
                                        <div className="badge text-white font-semibold text-[12px] badge-error">cancelled</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;