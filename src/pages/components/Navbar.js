import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <div className="flex sticky top-0 bg-blue-300 shadow-md shadow-black w-full py-5 ">
      <header className="container mx-auto max-w-7xl ">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold font-serif">Inflection ORG</h1>
          <div className="flex gap-3 font-semibold font-serif">
            <Link href="/" className="hover:text-red-500">
              Home
            </Link>
            <Link href="/login" className="hover:text-red-500">
              Login
            </Link>
            <Link href="/signup" className="hover:text-red-500">
              Signup
            </Link>
            <Link href="/contact" className="hover:text-red-500">
              Contact
            </Link>
            <Link href="/about" className="hover:text-red-500">
              About
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
