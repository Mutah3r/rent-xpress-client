import { useState } from "react";
import CarBodyTypesFilter from "./CarBodyTypesFilter";
import CarSeatsFilter from "./CarSeatsFilter";
import VehicleTypesFilter from "./VehicleTypesFilter";
import { useEffect } from "react";
import Card from "../../components/card/Card";
import CarsTitleParallax from "./CarsTitleParallax";

const Cars = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/cars")
            .then(res => res.json())
            .then(data => setCars(data));
    }, []);

    return (
        <section className="mb-20">
            <CarsTitleParallax />
            <div className="cars-page mt-12">
                {/* Sidebar */}
                <div className="p-4 flex flex-col gap-5">
                    {/* Vehicle Types */}
                    <VehicleTypesFilter />

                    {/* Car Body Types */}
                    <CarBodyTypesFilter />

                    {/* Car Seats */}
                    <CarSeatsFilter />
                </div>

                {/* Main content */}
                <div className="p-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    {
                        cars.map(car => <Card key={car._id} carInfo={car} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Cars;