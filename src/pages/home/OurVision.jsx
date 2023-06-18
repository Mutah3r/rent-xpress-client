import { useState } from 'react';
import happyClientImg from '../../assets/images/happy-client.jpg'

const OurVision = () => {
    const [selectedTab, setSelectedTab] = useState("luxury");
    const luxuryDescription = "We offer a meticulously curated collection of the most sought-after luxury vehicles on the market. Whether you prefer the sporty allure of a high-performance sports car, the sophistication of a sleek and luxurious sedan, or the versatility of a premium SUV, we have the perfect car to match your discerning taste.";
    const comfortDescription = "We prioritize your comfort and convenience throughout your journey. We understand that a comfortable ride can make a world of difference, whether you're embarking on a business trip or enjoying a leisurely vacation. That's why we offer a wide range of well-maintained, comfortable cars that cater to your specific needs.";
    const prestigeDescription = "We understand that prestige goes beyond luxury. It's about making a statement, embracing sophistication, and indulging in the finer things in life. That's why we offer an exclusive selection of prestigious cars that exude elegance, style, and status.";

    const getTabText = () => {
        return selectedTab === "luxury" ? luxuryDescription : selectedTab === "comfort" ? comfortDescription : prestigeDescription;
    }

    return (
        <section className="p-4 flex flex-col-reverse justify-center items-center lg:grid lg:grid-cols-2 gap-6">
            <div>
                <img className="w-full h-auto" src={happyClientImg} alt="Happy client image" />
            </div>
            <div className="md:p-6">
                <h1 className="text-center lg:text-left text-[42px] title-text font-semibold text-[#3F4254]">Only Quality For Clients</h1>

                <div className="flex gap-4 mt-6 mb-4 justify-center lg:justify-start">
                    <button onClick={() => setSelectedTab('luxury')} className={`transition delay-100 px-5 py-3 uppercase rounded-md text-[12px] ${selectedTab === 'luxury' ? "text-white bg-[#78CA5C] drop-shadow-lg" : ""}`}>Luxury</button>
                    <button onClick={() => setSelectedTab('comfort')} className={`transition delay-100 px-5 py-3 uppercase rounded-md text-[12px] ${selectedTab === 'comfort' ? "text-white bg-[#78CA5C] drop-shadow-lg" : ""}`}>Comfort</button>
                    <button onClick={() => setSelectedTab('prestige')} className={`transition delay-100 px-5 py-3 uppercase rounded-md text-[12px] ${selectedTab === 'prestige' ? "text-white bg-[#78CA5C] drop-shadow-lg" : ""}`}>Prestige</button>
                </div>

                <p className="text-[#727272] text-center lg:text-left">{getTabText()}</p>
            </div>
        </section>

    );
};

export default OurVision;