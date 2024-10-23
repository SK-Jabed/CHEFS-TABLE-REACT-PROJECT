const Banner = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-center">Discover an exceptional cooking class tailored for you!</h1>
                <p className="text-center">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                <div className="flex items-center gap-8 mt-3">
                    <button className="border-none bg-green-400 rounded-full px-8 py-4"><a className="text-lg font-bold">Explore Now</a></button>
                    <button className="border-amber-400 border border-solid px-8 py-4 rounded-full"><a className="text-lg font-bold">Our Feedback</a></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;