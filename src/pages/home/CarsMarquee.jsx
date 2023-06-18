import Marquee from "react-fast-marquee";

const CarsMarquee = () => {
    const tags = ["Convertible", "Sedan", "Sports Car", "Coupe", "Minivan", "Station Wagon", "Pickup Truck", "Exotic Cars", "SUV", "Hatchback", "Crossover"];
    return (
        <section className="bg-[#181818] py-10">
            <Marquee speed={85}>
                {
                    tags.map((tag, idx) => {
                        return (
                            <div key={idx} className="flex items-center justify-center">
                                <span className="mx-6 text-[88px] title-font font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#5ad830] to-[#5fa747]">{tag}</span>
                                <span className="text-[#78CA5C] text-[40px]">●</span>
                            </div>
                        )
                    })
                }
            </Marquee>
        </section>
    );
};

export default CarsMarquee;