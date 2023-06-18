import FeaturedCars from "./FeaturedCars";
import FeaturedReviews from "./FeaturedReviews";
import Hero from "./Hero";
import OurServices from "./OurServices";
import OurVision from "./OurVision";
import Stats from "./Stats";

const Home = () => {
    return (
        <div>
            <Hero />
            <FeaturedCars />
            <OurVision />
            <OurServices />
            <FeaturedReviews />
            <Stats />
        </div>
    );
};

export default Home;