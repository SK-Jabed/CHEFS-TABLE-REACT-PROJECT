const Banner = () => {
    return (
        <div className="bg-cover bg-no-repeat rounded-3xl md:w-full h-full md:h-[35.5rem] mb-10" style={{backgroundImage: "url(https://i.ibb.co.com/3kYtv41/banner.png)"}}>
            <div className="w-9/12 mx-auto flex flex-col justify-center items-center text-center h-full space-y-6 py-4">
                <h1 className="font-bold text-white text-xl md:text-2xl">Discover an exceptional cooking class tailored for you!</h1>
                <p className="text-xl font-medium text-white">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                <div className="flex items-center gap-8 mt-3">
                    <button className="border-none bg-green-400 rounded-full px-8 py-4"><a className="text-lg font-bold">Explore Now</a></button>
                    <button className="border-white border border-solid px-8 py-4 rounded-full"><a className="text-lg font-bold text-white">Our Feedback</a></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;