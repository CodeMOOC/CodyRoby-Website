import React from "react";
import {Link} from "gatsby";

const Navbar = () => {
    return (
        <nav className="bg-transparent">
            <div className="max-w-7xl mx-auto px-3 py-5 rounded-md">
                <div className="flex items-center justify-between h-16">
                    <div>
                        <Link
                            className="relative after:rounded after:bg-purple after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 text-black opacity-70 hover:opacity-100 px-3 py-2 rounded-md text-sm font-medium font-montserrat"
                            to="/"
                        >
                            Home
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;

