import React from "react";
import Link from "next/link";

const Header = () => {
  return <div className="h-16 px-5 text-white bg-red-500 flex items-center justify-between">
  <h2>FWeb</h2>
  <div className="flex gap-8">
      <Link href="/Home">Home</Link>
      <Link href="/About">About</Link>
      <Link href="/Courses">Courses</Link>
      <Link href="/Contact">Contact</Link>
    </div>
  </div>  
};

export default Header;
