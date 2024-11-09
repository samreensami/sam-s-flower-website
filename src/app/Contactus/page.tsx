import React from 'react'

export default function Contactus() {
  return (
    
      <div className="bg-pink-300 py-12">
      <div className="container mx-auto px-4">
        <h1 className=" bg-gradient-to-b from-pink-200 to-gray-800 text-4xl font-bold text-black text-center mb-8">Get in Touch</h1>
        <div className="max-w-2xl mx-auto bg-gray-700 p-8 rounded-lg shadow-lg">
          <form>
            <div className="mb-4">
              <label className="block text-white font-bold mb-2" htmlFor="name">
                Your Name
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                type="text"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white font-bold mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                type="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                id="message"
                // rows="5"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-green-300 hover:bg-pink-300 text-gray-700 font-bold py-3 px-6 rounded-full transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  
  )
}


