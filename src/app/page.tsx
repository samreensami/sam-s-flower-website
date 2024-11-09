
 import React from 'react'
 import Navbar from '../app/components/Navbar'
 import Footer from '../app/components/Footer'
 import Hero from '../app/components/Hero'
 import Aboutus from "../app/components/Aboutus"
 import Items from '../app/components/Item'
 import Contactus from '../app/components/Contactus'

export default function Page() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-100 to-gray-500">
      

      <main className="p-6">
        {/* Hero Section */}
        <Hero />

        {/* About Us Section */}
        <section className="my-12">
          <Aboutus />
        </section>              
        {/* Featured Flowers/Items */}
        <section className="my-12">
          <Items />
        </section>

        {/* Contact Us Section */}
        <section className="my-12">
          <Contactus />
        </section>
      </main>

    
    </div>
  );
}
