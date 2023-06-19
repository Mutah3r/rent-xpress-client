const VehicleTypesFilter = () => {
    
    const vehicleTypes = ["Car", "Van", "Minibus", "Prestige"];
    return (
        <div className="border border-gray-300 rounded-lg px-5 py-6">
            <h3 className="title-text text-[18px] text-[#3F4254] font-semibold">Vehicle Type</h3>

            <div className="">
                {
                    vehicleTypes.map(v => {
                        return (
                            <label key={v} className="cursor-pointer label justify-start gap-2">
                                <input type="checkbox" className="checkbox checkbox-primary checkbox-sm" />
                                <span className="label-text text-[#727272] text-[15px]">{v}</span>
                            </label>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default VehicleTypesFilter;