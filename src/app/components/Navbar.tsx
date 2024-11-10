 
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-b from-yellow-100 to-gray-700 text-black text-4xl md:text-2xl font-bold mb-4 text-center">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-3xl">
          <Link href="/">Sam's Flower</Link>
        </div>
        <div className="space-x-6">
          <Link href="/" className="text-white hover:text-black">
            Home
          </Link>
          <Link href="/Aboutus" className="text-white hover:text-black">
            About Us
          </Link>
          <Link href="/Contactus" className="text-white hover:text-black">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}










//  import Link from 'next/link';
//  import Image from 'next/image';
//  import React from 'react';
 
//  export default function Navbar() {
//    return (
//      <nav className="bg-gradient-to-b from-green-100 to-green-700 text-black text-4xl md:text-2xl font-bold mb-4 text-center">
//        <div className="container mx-auto flex justify-between items-center">
//          <div className="text-white font-bold text-3xl">
//            <Link href="/">Sam's Flower</Link>
//          </div>
//          <div className="space-x-6">
//            <Link href="/" className="text-white hover:text-black">
//              Home
//            </Link>
//            <Link href="/about-us" className="text-white hover:text-black">
//              About Us
//            </Link>
//            <Link href="/contact" className="text-white hover:text-black">
//              Contact
//            </Link>
//          </div>
//        </div>
//      </nav>
//    );
//  }
 













  
