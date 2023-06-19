const CarSeatsFilter = () => {
    const carSeats = [2, 4, 5, 6, "6+"];

    return (
        <div className="border border-gray-300 rounded-lg px-5 py-6">
            <h3 className="title-text text-[18px] text-[#3F4254] font-semibold">Car Seats</h3>

            <div className="">
                {
                    carSeats.map(s => {
                        return (
                            <label key={s} className="cursor-pointer label justify-start gap-2">
                                <input type="checkbox" className="checkbox checkbox-primary checkbox-sm" />
                                <span className="label-text text-[#727272] text-[15px]">{s} seats</span>
                            </label>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default CarSeatsFilter;