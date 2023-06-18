import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import Card from "../../components/card/Card";
import { useEffect, useState } from "react";

const FeaturedCars = () => {
    const [featuredCars, setFeaturedCars] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/cars")
            .then(res => res.json())
            .then(data => setFeaturedCars(data));
    }, []);

    const getWindowSize = () => {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    }

    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [])

    return (
        <section className="p-4">
            <h2 className="text-[42px] title-font text-[#3F4254] font-semibold text-center pt-6 pb-2 px-2">Our Vehicle Fleet</h2>
            <p className="pb-6 text-center px-2 text-[#3F4254] ">Driving your dreams to reality with an exquisite fleet of versatile vehicles for unforgettable journeys.</p>

            <Swiper
                slidesPerView={windowSize.innerWidth > 1000 ? 3 : windowSize.innerWidth > 650 ? 2 : 1}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper select-none"
            >
                {
                    featuredCars.map(car => {
                        return (
                            <SwiperSlide key={car._id} className="min-h-[50vh]"><Card carInfo={car} /></SwiperSlide>
                        );
                    })
                }
            </Swiper>
        </section>
    );
};

export default FeaturedCars;