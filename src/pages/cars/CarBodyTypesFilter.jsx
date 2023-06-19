const CarBodyTypesFilter = () => {
    const carBodyTypes = ["Convertible", "Coupe", "Exotic Cars", "Hatchback", "Minivan", "Pickup Truck", "Sedan", "Sports Car", "Station Wagon", "SUV"];

    return (
        <div className="border border-gray-300 rounded-lg px-5 py-6">
            <h3 className="title-text text-[18px] text-[#3F4254] font-semibold">Car Body Type</h3>

            <div className="">
                {
                    carBodyTypes.map(b => {
                        return (
                            <label key={b} className="cursor-pointer label justify-start gap-2">
                                <input type="checkbox" className="checkbox checkbox-primary checkbox-sm" />
                                <span className="label-text text-[#727272] text-[15px]">{b}</span>
                            </label>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default CarBodyTypesFilter;