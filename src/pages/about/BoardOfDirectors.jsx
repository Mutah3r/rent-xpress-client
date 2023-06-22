import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP } from "react-icons/fa"
import './BoardOfDirectorsBgParallax.css';
import creativeOfficerImg from '../../assets/images/chief-creative-officer.jpg'
import technologyOfficerImg from '../../assets/images/chief-technology-officer.jpg'
import executiveOfficerImg from '../../assets/images/chief-executive-officer.jpg'
import directorOfFinanceImg from '../../assets/images/director-of-finance.jpg'

const BoardOfDirectors = () => {
    return (
        <section className="board-of-directors-bg p-20 flex flex-col justify-center gap-5">
            <h1 className="title-font text-[42px] text-white text-center font-semibold">Board of Directors</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
                {/* Chief Creative Officer */}
                <div>
                    <div className="rounded h-[80%] relative transition-all duration-[0.5s] hover:drop-shadow-[0_10px_10px_rgba(255,255,255,0.25)] overflow-hidden">
                        <img className="rounded transition-all duration-[0.5s] hover:scale-[1.05] w-full h-full" src={creativeOfficerImg} alt="chief creative officer iamge" />
                        <div className="flex gap-2 absolute bottom-[10px] left-[50%] -translate-x-1/2 -translate-y-1/2">
                            <div className=" cursor-pointer rounded z-100 w-[30px] h-[30px] flex justify-center items-center bg-primary text-bold text-white">
                                <FaFacebookF />
                            </div>
                            <div className=" cursor-pointer rounded z-100 w-[30px] h-[30px] flex justify-center items-center bg-primary text-bold text-white">
                                <FaTwitter />
                            </div>
                            <div className=" cursor-pointer rounded z-100 w-[30px] h-[30px] flex justify-center items-center bg-primary text-bold text-white">
                                <FaLinkedinIn />
                            </div>
                            <div className=" cursor-pointer rounded z-100 w-[30px] h-[30px] flex justify-center items-center bg-primary text-bold text-white">
                                <FaPinterestP />
                            </div>
                        </div>
                    </div>
                    <div className="text-center text-white my-4 px-2">
                        <h2 className="title-font text-[20px] font-semibold">Fynley Wilkinson</h2>
                        <h4 className="text-[14px]">Chief Creative Officer</h4>
                    </div>
                </div>
                {/* Chief Technology Officer */}
                <div>
                    <div className="rounded h-[80%] relative transition-all duration-[0.5s] hover:drop-shadow-[0_10px_10px_rgba(255,255,255,0.25)] overflow-hidden">
                        <img className="rounded transition-all duration-[0.5s] hover:scale-[1.05] w-full h-full" src={technologyOfficerImg} alt="chief creative officer iamge" />
                        <div className="flex gap-2 absolute bottom-[10px] left-[50%] -translate-x-1/2 -translate-y-1/2">
                            <div className=" cursor-pointer rounded z-100 w-[30px] h-[30px] flex justify-center items-center bg-primary text-bold text-white">
                                <FaFacebookF />
                            </div>
                            <div className=" cursor-pointer rounded z-100 w-[30px] h-[30px] flex justify-center items-center bg-primary text-bold text-white">
                                <FaTwitter />
                            </div>
                            <div className=" cursor-pointer rounded z-100 w-[30px] h-[30px] flex justify-center items-center bg-primary text-bold text-white">
                                <FaLinkedinIn />
                            </div>
                            <div className=" cursor-pointer rounded z-100 w-[30px] h-[30px] flex justify-center items-center bg-primary text-bold text-white">
                                <FaPinterestP />
                            </div>
                        </div>
                    </div>
                    <div className="text-center text-white my-4 px-2">
                        <h2 className="title-font text-[20px] font-semibold">Peter Welsh</h2>
                        <h4 className="text-[14px]">Chief Technology Officer</h4>
                    </div>
                </div>
                {/* Chief Executive Officer */}
                <div>
                    <div className="rounded h-[80%] relative transition-all duration-[0.5s] hover:drop-shadow-[0_10px_10px_rgba(255,255,255,0.25)] overflow-hidden">
                        <img className="rounded transition-all duration-[0.5s] hover:scale-[1.05] w-full h-full" src={executiveOfficerImg} alt="chief creative officer iamge" />
                        <div className="flex gap-2 absolute bottom-[10px] left-[50%] -translate-x-1/2 -translate-y-1/2">
                            <div className=" cursor-pointer rounded z-100 w-[30px] h-[30px] flex justify-center items-center bg-primary text-bold text-white">
                                <FaFacebookF />
                            </div>
                            <div className=" cursor-pointer rounded z-100 w-[30px] h-[30px] flex justify-center items-center bg-primary text-bold text-white">
                                <FaTwitter />
                            </div>
                            <div className=" cursor-pointer rounded z-100 w-[30px] h-[30px] flex justify-center items-center bg-primary text-bold text-white">
                                <FaLinkedinIn />
                            </div>
                            <div className=" cursor-pointer rounded z-100 w-[30px] h-[30px] flex justify-center items-center bg-primary text-bold text-white">
                                <FaPinterestP />
                            </div>
                        </div>
                    </div>
                    <div className="text-center text-white my-4 px-2">
                        <h2 className="title-font text-[20px] font-semibold">John Shepard</h2>
                        <h4 className="text-[14px]">Chief Executive Officer</h4>
                    </div>
                </div>
                {/* Director of Finance */}
                <div>
                    <div className="rounded h-[80%] relative transition-all duration-[0.5s] hover:drop-shadow-[0_10px_10px_rgba(255,255,255,0.25)] overflow-hidden">
                        <img className="rounded transition-all duration-[0.5s] hover:scale-[1.05] w-full h-full" src={directorOfFinanceImg} alt="chief creative officer iamge" />
                        <div className="flex gap-2 absolute bottom-[10px] left-[50%] -translate-x-1/2 -translate-y-1/2">
                            <div className=" cursor-pointer rounded z-100 w-[30px] h-[30px] flex justify-center items-center bg-primary text-bold text-white">
                                <FaFacebookF />
                            </div>
                            <div className=" cursor-pointer rounded z-100 w-[30px] h-[30px] flex justify-center items-center bg-primary text-bold text-white">
                                <FaTwitter />
                            </div>
                            <div className=" cursor-pointer rounded z-100 w-[30px] h-[30px] flex justify-center items-center bg-primary text-bold text-white">
                                <FaLinkedinIn />
                            </div>
                            <div className=" cursor-pointer rounded z-100 w-[30px] h-[30px] flex justify-center items-center bg-primary text-bold text-white">
                                <FaPinterestP />
                            </div>
                        </div>
                    </div>
                    <div className="text-center text-white my-4 px-2">
                        <h2 className="title-font text-[20px] font-semibold">Mike Dowson</h2>
                        <h4 className="text-[14px]">Director of Finance</h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BoardOfDirectors;