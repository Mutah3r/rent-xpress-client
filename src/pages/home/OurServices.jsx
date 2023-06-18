import { FaRoad, FaTaxi } from "react-icons/fa";
import { BsTrophyFill } from "react-icons/bs";

const OurServices = () => {
    return (
        <section className="flex flex-col lg:flex-row gap-8 lg:gap-4 p-4 my-12 max-w-[1200px] mx-auto">
            <div>
                <h1 className="text-center lg:text-left text-[42px] title-text font-semibold text-[#3F4254]">Explore the world with comfortable car</h1>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 text-center">
                <div>
                    <div className="bg-[#78CA5C] text-white text-[32px] p-6 inline-block rounded-lg">
                        <BsTrophyFill />
                    </div>
                    <h3 className="mt-2 text-[20px] title-text font-semibold text-[#3F4254]">First Class Services</h3>
                    <p className="mt-1 text-[#727272]">Where luxury meets exceptional care, creating unforgettable moments and exceeding your every expectation.</p>
                </div>
                <div>
                    <div className="bg-[#78CA5C] text-white text-[32px] p-6 inline-block rounded-lg">
                        <FaRoad />
                    </div>
                    <h3 className="mt-2 text-[20px] title-text font-semibold text-[#3F4254]">24/7 road assistance</h3>
                    <p className="mt-1 text-[#727272]">Reliable support when you need it most, keeping you on the move with confidence and peace of mind.</p>
                </div>
                <div>
                    <div className="bg-[#78CA5C] text-white text-[32px] p-6 inline-block rounded-lg">
                        <FaTaxi />
                    </div>
                    <h3 className="mt-2 text-[20px] title-text font-semibold text-[#3F4254]">Free Pick-Up & Drop-Off</h3>
                    <p className="mt-1 text-[#727272]">Enjoy free pickup and drop-off services, adding an extra layer of ease to your car rental experience.</p>
                </div>
            </div>
        </section>
    );
};

export default OurServices;