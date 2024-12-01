import React from "react";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

const Header = ()=>{
    return(
        <header className="header">
            <h1 className="logo">
            Luxe Aroma
            </h1>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/about">About Us</Link>
                <Link href="/men">Men's Wear</Link>
                <Link href="/women">Women's Wear</Link>
                <Link href="/contact">Contact Us</Link>
                <FaShoppingCart style={{color: "white", fontSize: "28px" }}/>
            </nav>
        </header>
    )
}
export default Header;