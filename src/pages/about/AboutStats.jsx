import CountUp from 'react-countup';

const AboutStats = () => {
    return (
        <div className='p-6 mb-5 lg:p-20'>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-[1100px] mx-auto">
                <div className="bg-gradient-to-t from-slate-50 to-slate-200 rounded text-center p-6">
                    <h2 className="text-[40px] title-font text-[#78CA5C] font-bold">
                        <CountUp
                            // start={0}
                            end={15425}
                            duration={3}
                            enableScrollSpy={true}
                            scrollSpyOnce={true}
                        />
                    </h2>
                    <h3 className="text-[#35404E]">Hours of Work</h3>
                </div>
                <div className="bg-gradient-to-t from-slate-50 to-slate-200 rounded text-center p-6">
                    <h2 className="text-[40px] title-font text-[#78CA5C] font-bold">
                        <CountUp
                            // start={0}
                            end={8745}
                            duration={3}
                            enableScrollSpy={true}
                            scrollSpyOnce={true}
                        />
                    </h2>
                    <h3 className="text-[#35404E]">Clients Supported</h3>
                </div>
                <div className="bg-gradient-to-t from-slate-50 to-slate-200 rounded text-center p-6">
                    <h2 className="text-[40px] title-font text-[#78CA5C] font-bold">
                        <CountUp
                            // start={0}
                            end={235}
                            duration={3}
                            enableScrollSpy={true}
                            scrollSpyOnce={true}
                        />
                    </h2>
                    <h3 className="text-[#35404E]">Fleets Vehicle</h3>
                </div>
                <div className="bg-gradient-to-t from-slate-50 to-slate-200 rounded text-center p-6">
                    <h2 className="text-[40px] title-font text-[#78CA5C] font-bold">
                        <CountUp
                            // start={0}
                            end={15}
                            duration={3}
                            enableScrollSpy={true}
                            scrollSpyOnce={true}
                        />
                    </h2>
                    <h3 className="text-[#35404E]">Years Experience</h3>
                </div>
            </div>
        </div>
    );
};

export default AboutStats;