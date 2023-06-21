import './SingleCarTitleParallax.css';

const SingleCarTitleParallax = ({ carInfo }) => {
    return (
        <section>
            <div className="single-car-title-parallax h-[250px] flex justify-center items-center">
                <h1 className="text-center text-[52px] title-text font-semibold text-white">{carInfo?.title? carInfo.title : ""}</h1>
            </div>
        </section>
    );
};

export default SingleCarTitleParallax;