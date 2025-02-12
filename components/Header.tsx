import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/images/askhole.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 py-8 px-8 md:px-16 flex justify-between items-center bg-transparent bg-[linear-gradient(to_bottom,_rgba(0,0,0,0.2)_0%,_rgba(0,0,0,0)_100%)] backdrop-blur-[2px]"> 
      <div className="flex items-center">
        <Link href="/">
        <Image src={logo} alt="logo of askhole" width={140} height={40} /> 
        </Link>
      </div>
      <nav className="space-x-6">
        <Link href="/">Home</Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/imprint">Imprint</Link>
      </nav>
    </header>
  );
};

export default Header;
