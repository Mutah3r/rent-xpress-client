import { useParams } from "react-router-dom";
import SingleCarTitleParallax from "./SingleCarTitleParallax";
import SingleCarCarousel from "./SingleCarCarousel";
import { TiTick } from "react-icons/ti"
import { useEffect } from "react";
import { useState } from "react";

const SingleCar = () => {
    const { carId } = useParams();
    const [carInfo, setCarInfo] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/cars/${carId}`)
            .then(res => res.json())
            .then(data => {
                setCarInfo(data);
            })
    }, [carId]);

    return (
        <section>
            <SingleCarTitleParallax carInfo={carInfo} />

            <div className="flex flex-col gap-5 my-20 p-3 md:p-10">
                {/* carousel */}
                <div>
                    <SingleCarCarousel carInfo={carInfo} />
                </div>
                {/* details */}
                <div className="flex flex-col-reverse gap-5 lg:gap-10 lg:grid lg:grid-cols-2">
                    {/* specs */}
                    <div className="flex flex-col gap-5">
                        <div>
                            <h2 className="mb-3 title-font text-[26px] text-[#3F4254] font-semibold">{carInfo?.title ? carInfo.title : ""}</h2>
                            <p className="text-[#727272]">{carInfo?.details ? carInfo.details : ""}</p>
                        </div>

                        <div>
                            <h3 className="mb-3 title-font text-[24px] text-[#3F4254] font-semibold">Specifications</h3>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                                    <tbody className="divide-y divide-gray-200">
                                        {carInfo.specifications &&
                                            Object.entries(carInfo.specifications).map(([k, v]) => {
                                                return (
                                                    <tr key={k}>
                                                        <td className="whitespace-nowrap px-4 py-2 font-medium text-[15px] text-[#727272]">
                                                            {k}
                                                        </td>
                                                        <td className="whitespace-nowrap px-4 py-2 font-semibold text-[#3F4254] text-[15px]">{v}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div>
                            <h3 className="mb-2 title-font text-[24px] text-[#3F4254] font-semibold">Features</h3>
                            <ul>
                                {carInfo?.Features &&
                                    carInfo.Features.map(f => <li key={f} className="px-4 py-2 font-medium text-[15px] text-[#727272] flex items-center gap-1"><TiTick className="text-primary" /> {f}</li>)
                                }
                            </ul>
                        </div>
                    </div>
                    {/* book this car */}
                    <div className="p-3">
                        <div className=" sticky top-10 border border-gray-300 p-8 flex flex-col gap-3 items-center justify-center text-center">
                            <div>
                                <h4 className="text-[18px] text-[#727272]">Daily rate</h4>
                                <h2 className="text-[60px] text-[#3F4254] title-font font-semibold">${carInfo?.price ? carInfo.price : 0}</h2>
                            </div>
                            <button className="w-full button-primary">Rent Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleCar;