import React from "react";

export const Footer = () => {
    return (
        <footer className="bg-red-500 p-4 text-white text-center">
            &copy; {new Date().getFullYear()} Pizza Store. All rights reserved.
        </footer>
    )
};