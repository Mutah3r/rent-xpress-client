import { FaQuoteRight } from "react-icons/fa"
import './FeaturedReviews.css'

const FeaturedReviews = () => {
    return (
        <section className="p-4 grid grid-cols-1 md:grid-cols-3 gap-5 text-white max-w-[1200px] mx-auto">
            <div className="overflow-hidden">
                <div className="p-12 h-[600px] featured-review featured-review-1">
                    <div className="flex justify-end text-[40px] text-[#78CA5C]"><FaQuoteRight /></div>
                    <h2 className="title-font text-[20px] font-semibold">Excellent Service! Car Rent Service!</h2>
                    <p className="my-3 text-[15px]">I have been using Rentaly for my Car Rental needs for over 5 years now. I have never had any problems with their service. Their customer support is always responsive and helpful. I would recommend Rentaly to anyone looking for a reliable Car Rental provider.</p>
                    <h5 className="text-[14px]">—— Stepanie Hutchkiss</h5>
                </div>
            </div>

            <div className="overflow-hidden">
                <div className="p-12 h-[600px] featured-review featured-review-2">
                    <div className="flex justify-end text-[40px] text-[#78CA5C]"><FaQuoteRight /></div>
                    <h2 className="title-font text-[20px] font-semibold">Excellent Service! Car Rent Service!</h2>
                    <p className="my-3 text-[15px]">We have been using Rentaly for our trips needs for several years now and have always been happy with their service. Their customer support is Excellent Service! and they are always available to help with any issues we have. Their prices are also very competitive.</p>
                    <h5 className="text-[14px]">—— Jovan Reels</h5>
                </div>
            </div>

            <div className="overflow-hidden">
                <div className="p-12 h-[600px] featured-review featured-review-3">
                    <div className="flex justify-end text-[40px] text-[#78CA5C]"><FaQuoteRight /></div>
                    <h2 className="title-font text-[20px] font-semibold">Excellent Service! Car Rent Service!</h2>
                    <p className="my-3 text-[15px]">Endorsed by industry experts, Rentaly is the Car Rental solution you can trust. With years of experience in the field, we provide fast, reliable and secure Car Rental services.</p>
                    <h5 className="text-[14px]">—— Kanesha Keyton</h5>
                </div>
            </div >
        </section >
    );
};

export default FeaturedReviews;