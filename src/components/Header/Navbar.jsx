const Navbar = () => {
    return (
        <div className="flex justify-between items-center py-12 md: flex-col">
            <div className="navbar-left">
            <h2 className="text-2xl font-bold">Chef<span className="text-red-500">'</span>s Table</h2>
            </div>
            <div className="navbar-center">
                <ul className="flex justify-center items-center space-x-4">
                    <li>Home</li>
                    <li>Recipes</li>
                    <li>About</li>
                    <li>Search</li>
                </ul>
            </div>
            <div className="navbar-right flex items-center gap-4">
                
                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto rounded-full bg-gray-100 text-xl font-semibold text-black" />
                <i className="fa-regular fa-circle-user text-3xl"></i>
            </div>
        </div>
    );
};

export default Navbar;