import { FaMapMarkerAlt, FaPhoneAlt, FaRegEnvelope, FaRegFilePdf } from "react-icons/fa"

const ContactUs = () => {
    return (
        <section className="p-6 mb-10 flex flex-col gap-10 lg:flex-row lg:justify-evenly lg:items-center">
            <form className="flex flex-col gap-3">
                <div className="grid grd-cols-1 md:grid-cols-3 gap-3">
                    <input className="border border-gray-300 rounded-md px-2 py-1 text-[#727272]" type="text" name="name" id="name" placeholder="Your Name" required />
                    <input className="border border-gray-300 rounded-md px-2 py-1 text-[#727272]" type="email" name="email" id="email" placeholder="Your Email" required />
                    <input className="border border-gray-300 rounded-md px-2 py-1 text-[#727272]" type="tel" name="phone" id="phone" placeholder="Your Phone" required />
                </div>
                <textarea required placeholder="Your Message" className="w-full border border-gray-300 rounded-md px-2 py-1 text-[#727272]" name="message" id="message" cols="30" rows="10"></textarea>
                <input className="button-primary self-start" type="submit" value="Send Message" />
            </form>
            <div className="flex flex-col gap-5">
                <div className="border border-gray-300 rounded-md p-6">
                    <h2 className="mb-2 title-font text-[#3F4254] text-[20px] font-semibold">US Office</h2>
                    <div className="flex flex-col gap-1">
                        <h3 className="flex items-center gap-3 text-[#727272]"><FaMapMarkerAlt className="text-primary" /> 00 W 10th St, New York, NY 00000</h3>
                        <h3 className="flex items-center gap-3 text-[#727272]"><FaPhoneAlt className="text-primary" /> +0 123 456789</h3>
                        <h3 className="flex items-center gap-3 text-primary cursor-pointer"><FaRegEnvelope className="text-primary" /> contact@example.com</h3>
                        <h3 className="flex items-center gap-3 text-primary cursor-pointer"><FaRegFilePdf className="text-primary" /> Download Brochure</h3>
                    </div>
                </div>
                <div className="border border-gray-300 rounded-md p-6">
                    <h2 className="mb-2 title-font text-[#3F4254] text-[20px] font-semibold">AU Office</h2>
                    <div className="flex flex-col gap-1">
                        <h3 className="flex items-center gap-3 text-[#727272]"><FaMapMarkerAlt className="text-primary" /> 100 Main-street Center, Sydney</h3>
                        <h3 className="flex items-center gap-3 text-[#727272]"><FaPhoneAlt className="text-primary" /> +0 123 456789</h3>
                        <h3 className="flex items-center gap-3 text-primary cursor-pointer"><FaRegEnvelope className="text-primary" /> contact@example.com</h3>
                        <h3 className="flex items-center gap-3 text-primary cursor-pointer"><FaRegFilePdf className="text-primary" /> Download Brochure</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;