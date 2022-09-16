import link, { Link } from "react-router-dom"
const Navbar = () => {
    const NevItems = <>
        <li><Link to="/">Hotels</Link></li>
        <li><Link to="/listing">Listing</Link></li>
        <li><Link to="/agent">Agent</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>


    </>
    return (

        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {NevItems}
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl"> <img className='p-2' src="https://tripfinder-redq.firebaseapp.com/static/media/logo-alt.980da429.svg" alt="" /> TripFinder</a>
            </div>
            <div class="navbar-end hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {NevItems}
                </ul>

                <div class="nav-buttons">
                    <Link to="/sign_in" class="btn mx-3 bg-white text-black border-none normal-case hover:text-white">Sign-up</Link>
                    <Link to="/log_in" class="btn bg-teal-500 text-white border-none normal-case">Log-in</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;