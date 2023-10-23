import React from "react";
// import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
    return(
        <nav>
            <ul className="flex gap-5 underline">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/cart">Cart</a>
                </li>
            </ul>
        </nav>     
    )
}; 
