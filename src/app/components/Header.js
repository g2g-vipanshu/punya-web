"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
    const pathname = usePathname();
    const isContactPage = pathname === "/contact";

    return (
        <header>
            <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md fixed top-0 left-0 w-full z-50">
                <div>
                    <a href="/">
                        <img className="h-8 cursor-pointer" src="/images/PDLogo1.png" alt="Logo" />
                    </a>
                </div>
                <ul className="flex space-x-6 text-gray-800 font-medium">
                    <li>
                        <Link href={isContactPage ? "/" : "/contact"} passHref>
                            <div className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 cursor-pointer">
                                {isContactPage ? "Home" : "Contact"}
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;