


import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image';

export default function Hero() {
  return (
    <div
      className="relative h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/image/1.png')" }}
    >
      <div className="absolute inset-0 bg-yellow-100 bg-opacity-20 flex items-center justify-center">
        <div className="text-center text-black p-5 overflow-hidden">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-marquee">
            Welcome to Our Flower Shop
          </h1>
          <p className="text-lg md:text-3xl">
            Fresh Flowers Delivered to Your Door
          </p>
        </div>
      </div>
    </div>
  );
}
