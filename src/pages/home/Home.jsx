import FeaturedCars from "./FeaturedCars";
import Hero from "./Hero";
import OurServices from "./OurServices";
import OurVision from "./OurVision";

const Home = () => {
    return (
        <div>
            <Hero />
            <FeaturedCars />
            <OurVision />
            <OurServices />
        </div>
    );
};

export default Home;