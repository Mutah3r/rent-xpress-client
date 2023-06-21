import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const SingleCarCarousel = ({ carInfo }) => {
    return (
        <Carousel autoPlay={true} infiniteLoop={true} emulateTouch={true}>
            {carInfo?.images &&
                carInfo.images.map(img => {
                    return (
                        <div key={img}>
                            <img src={img} />
                        </div>
                    )
                })
            }



        </Carousel>
    );
};

export default SingleCarCarousel;