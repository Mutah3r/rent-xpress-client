import CountUp from 'react-countup';

const Stats = () => {
    return (
        <section className="p-12 md:p-[100px] bg-[#78CA5C] mt-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-[1100px] mx-auto">
                <div className="bg-white text-center p-6">
                    <h2 className="text-[40px] title-font text-[#78CA5C] font-semibold">
                        <CountUp
                            // start={0}
                            end={15425}
                            duration={5}
                            enableScrollSpy={true}
                            scrollSpyOnce={true}
                        />
                    </h2>
                    <h3 className="text-[#35404E]">Trips Powered</h3>
                    <p className="text-[#35404E] text-[14px] mt-1">Join our satisfied customers for an unforgettable travel experience.</p>
                </div>
                <div className="bg-white text-center p-6">
                    <h2 className="text-[40px] title-font text-[#78CA5C] font-semibold">
                        <CountUp
                            // start={0}
                            end={8745}
                            duration={5}
                            enableScrollSpy={true}
                            scrollSpyOnce={true}
                        />
                    </h2>
                    <h3 className="text-[#35404E]">Happy Customers</h3>
                    <p className="text-[#35404E] text-[14px] mt-1">Discover why they love our service.</p>
                </div>
                <div className="bg-white text-center p-6">
                    <h2 className="text-[40px] title-font text-[#78CA5C] font-semibold">
                        <CountUp
                            // start={0}
                            end={235}
                            duration={5}
                            enableScrollSpy={true}
                            scrollSpyOnce={true}
                        />
                    </h2>
                    <h3 className="text-[#35404E]">Fleets Vehicle</h3>
                    <p className="text-[#35404E] text-[14px] mt-1">Our vehicles are ready to take you on your next adventure.</p>
                </div>
                <div className="bg-white text-center p-6">
                    <h2 className="text-[40px] title-font text-[#78CA5C] font-semibold">
                        <CountUp
                            // start={0}
                            end={15}
                            duration={5}
                            enableScrollSpy={true}
                            scrollSpyOnce={true}
                        />
                    </h2>
                    <h3 className="text-[#35404E]">Years Experience</h3>
                    <p className="text-[#35404E] text-[14px] mt-1">With 15 years of experience, trust us to provide you with a seamless and exceptional journey.</p>
                </div>
            </div>
        </section>
    );
};

export default Stats;