import AboutStats from "./AboutStats";
import BoardOfDirectors from "./BoardOfDirectors";
import { FaPhoneAlt } from "react-icons/fa"

const AboutCompany = () => {
    return (
        <>
            {/* Text */}
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-10 px-6 pt-6 lg:px-20 lg:pt-20">
                <div className="flex items-center">
                    <h1 className="text-[42px] title-font text-[#3F4254] font-semibold">We offer customers a wide range of <span className="text-primary">commercial cars</span> and <span className="text-primary">luxury cars</span> for any occasion.</h1>
                </div>
                <div className="flex items-center">
                    <p className="text-[#727272]">At RentXpress, we are dedicated to providing exceptional car rental services to our valued customers. With a commitment to quality, convenience, and customer satisfaction, we strive to make every rental experience a seamless and enjoyable one. We understand that every customer has unique needs and preferences when it comes to renting a car. That is why we maintain a diverse fleet of well-maintained vehicles to cater to various requirements. From compact cars for solo travelers to spacious SUVs for families, we have a wide range of options to choose from.</p>
                </div>
            </div>

            {/* Stats */}
            <AboutStats />

            {/* Board of Directors */}
            <BoardOfDirectors />

            {/* Call Us Section */}
            <section className="bg-[#199E1C] text-white p-20 grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                    <h3 className="text-[30px] sm:text-[42px] font-semibold title-font text-center md:text-left">Call us for further information. RentXpress customer care is here to help you anytime.</h3>
                </div>
                <div className="text-center flex flex-col items-center md:items-end justify-center">
                    <div className="flex flex-col gap-2 items-center">
                        <FaPhoneAlt className="text-25px sm:text-[35px]" />
                        <h4 className="text-[12px]">CALL US NOW</h4>
                        <h3 className="text-28px sm:text-[36px] font-semibold">0 123 456 789</h3>
                        <button className="button-primary">Contact Us</button>
                    </div>
                </div>
            </section>

        </>
    );
};

export default AboutCompany;