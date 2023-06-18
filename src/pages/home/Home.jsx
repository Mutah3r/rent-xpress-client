import FeaturedCars from "./FeaturedCars";
import FeaturedReviews from "./FeaturedReviews";
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
            <FeaturedReviews />
        </div>
    );
};

export default Home;