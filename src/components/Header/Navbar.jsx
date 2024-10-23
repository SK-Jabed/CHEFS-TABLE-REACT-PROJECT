const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
            <div className="navbar-left">
            <h2 className="tex-4xl font-bold">Chef<span className="text-red-500">'</span>s Table</h2>
            </div>
            <div className="navbar-center">
                <ul className="flex justify-center items-center space-x-4">
                    <li>Home</li>
                    <li>Recipes</li>
                    <li>About</li>
                    <li>Search</li>
                </ul>
            </div>
            <div className="navbar-right">
                
                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto rounded-full bg-gray-100" />
            </div>
        </div>
    );
};

export default Navbar;