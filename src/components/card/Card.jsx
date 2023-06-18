import { FaBriefcase, FaUser, FaCarAlt, FaCarSide, FaHeart } from 'react-icons/fa';

const Card = () => {
    return (
        <div className="border p-3 rounded-lg">
            <div className="rounded-lg">
                <img className="rounded-lg" src="https://images.unsplash.com/photo-1563721938524-4da1bede2935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
            </div>
            <div className="p-4">
                <div className="flex justify-between">
                    <h3 className="text-[18px] font-semibold title-font">Jeep Renegade</h3>
                    <span className="text-[14px] flex items-center justify-center gap-1"><FaHeart className="text-[#CCCCCC]" /> 74</span>
                </div>
                <div className="mt-2 text-[14px] text-black font-semibold flex gap-3">
                    <span className="flex items-center justify-center gap-1"><FaUser /> 5</span>
                    <span className="flex items-center justify-center gap-1"><FaBriefcase /> 2</span>
                    <span className="flex items-center justify-center gap-1"><FaCarSide /> 4</span>
                    <span className="flex items-center justify-center gap-1"><FaCarAlt /> SUV</span>
                </div>
                <hr className="mt-3 mb-3" />
                <div className="flex justify-between items-center">
                    <div>
                        <h4 className="text-[14px]">Daily rate from</h4>
                        <h2 className="font-bold text-[26px]">$265</h2>
                    </div>
                    <div>
                        <button className="button-primary">Rent Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;