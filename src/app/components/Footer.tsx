

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Navbar from './Navbar';

// components/Footer.js
export default function Footer() {
  return(
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#about" className="hover:text-yellow-400">About Us</a>
          <a href="#services" className="hover:text-yellow-400">Services</a>
          <a href="#contact" className="hover:text-yellow-400">Contact</a>
          <a href="#privacy" className="hover:text-yellow-400">Privacy Policy</a>
        </div>
        
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">Instagram</a>
        </div>
        
        <p className="text-sm">&copy; 2024 Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};





















//     <footer className="bg-gray-800 text-white py-6">
//       <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
//         <p className="text-sm">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        
//         <div className="flex space-x-4 mt-4 md:mt-0">
//           <a href="#" className="hover:text-gray-400">Privacy Policy</a>
//           <a href="#" className="hover:text-gray-400">Terms of Service</a>
//           <a href="#" className="hover:text-gray-400">Contact Us</a>
//         </div>
//       </div>
//     </footer>
//   );
// }






