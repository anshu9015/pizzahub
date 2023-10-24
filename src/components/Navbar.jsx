import React from "react";
// import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <header className="bg-red-500 p-4">
            <nav className="flex justify-between items-center">
                <div className="text-white text-2xl font-semibold">Pizza Store</div>
                <ul className="flex space-x-4">
                    <li>
                        <a href="/" className="text-white hover:text-gray-300">Home</a>
                    </li>
                    <li>
                        <a href="/about" className="text-white hover:text-gray-300">About</a>
                    </li>
                    <li>
                        <a href="/cart" className="text-white hover:text-gray-300">Cart</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}; 
