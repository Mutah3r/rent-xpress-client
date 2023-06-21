import { FaBriefcase, FaUser, FaCarAlt, FaCarSide } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Card = ({ carInfo }) => {
    const { title, price, specifications, images } = carInfo;
    const { seats, luggage, doors, body } = specifications;

    return (
        <div className="border border-gray-300 p-3 rounded-lg">
            <div className="rounded-lg h-[250px] overflow-hidden">
                <Link to={`/cars/${carInfo?._id ? carInfo._id : ""}`}><img className="rounded-lg w-full h-full transition-all duration-[0.5s] hover:scale-[1.05] cursor-pointer" src={images[0]} alt="" /></Link>
            </div>
            <div className="p-4">
                <div className="flex justify-between">
                    <Link to={`/cars/${carInfo?._id ? carInfo._id : ""}`}><h3 className="text-[18px] font-semibold title-font">{title}</h3></Link>
                    {/* <span className="text-[14px] flex items-center justify-center gap-1"><FaHeart className="text-[#CCCCCC]" /> 74</span> */}
                </div>
                <div className="mt-2 text-[14px] text-black font-semibold flex gap-3">
                    <span className="flex items-center justify-center gap-1"><FaUser /> {seats}</span>
                    <span className="flex items-center justify-center gap-1"><FaBriefcase /> {luggage}</span>
                    <span className="flex items-center justify-center gap-1"><FaCarSide /> {doors}</span>
                    <span className="flex items-center justify-center gap-1"><FaCarAlt /> {body}</span>
                </div>
                <hr className="mt-3 mb-3" />
                <div className="flex justify-between items-center">
                    <div>
                        <h4 className="text-[14px]">Daily rate from</h4>
                        <h2 className="font-bold text-[26px]">${price}</h2>
                    </div>
                    <div>
                        <Link to={`/cars/${carInfo?._id ? carInfo._id : ""}`}><button className="button-primary">Rent Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;