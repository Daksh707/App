
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4 py-8">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center space-x-3 mb-3">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center shadow-lg">
              <i className="ri-flashlight-line text-white text-2xl"></i>
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
              <i className="ri-lightning-line text-white text-xs"></i>
            </div>
          </div>
          <h2 className="font-pacifico text-xl text-white font-bold">Kansal Electrical</h2>
        </div>
        <p className="text-sm text-gray-300">Your Trusted Electrical Partner</p>
      </div>
      
{/*       <div className="grid grid-cols-3 gap-4 mb-6">
        <Link href="/" className="text-center py-3 px-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
          <i className="ri-home-line text-lg block mb-1"></i>
          <span className="text-xs">Home</span>
        </Link>
        <Link href="/about" className="text-center py-3 px-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
          <i className="ri-information-line text-lg block mb-1"></i>
          <span className="text-xs">About</span>
        </Link>
        <Link href="/contact" className="text-center py-3 px-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
          <i className="ri-phone-line text-lg block mb-1"></i>
          <span className="text-xs">Contact</span>
        </Link>
      </div> */}
      
      <div className="flex justify-center mb-6">
        <a 
          href="https://www.instagram.com/kansalelectric_store?igsh=YjU2aXhpdGdoc2J6&utm_source=qr" 
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <i className="ri-instagram-line text-white text-xl"></i>
        </a>
      </div>
      
      <div className="text-center">
        <p className="text-xs text-gray-400">
          © Kansal Electrical. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
