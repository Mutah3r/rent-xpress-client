import "./Hero.css";

const Hero = () => {
    return (
        <section className="hero-bg min-h-screen p-4 flex justify-center items-center">
            <div className="w-[90%] md:w-[80%] text-center flex flex-col gap-3">
                <h3 className="text-success font-semibold text-[20px] md:text-[26px] title-font">Plan your trip now</h3>
                <h1 className="text-white font-bold text-[40px] md:text-[52px] title-font">Explore the world with comfortable cars!</h1>
                <p className="text-stone-300 text-[20px] md:text-[27px] title-font">Experience remarkable journeys and explore the globe with unparalleled luxury and elegance through our collection of supremely cozy cars.</p>
                <div className="flex gap-2 items-center justify-center">
                    <button className="btn btn-success">Choose a Car</button>
                    <button className="btn btn-neutral">Get the App</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;