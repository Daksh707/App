
'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50 border-b border-gray-100">
      <div className="px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center shadow-lg">
                <i className="ri-flashlight-line text-white text-2xl"></i>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                <i className="ri-lightning-line text-white text-xs"></i>
              </div>
            </div>
            <div>
              <h1 className="font-pacifico text-xl text-blue-600 font-bold">Kansal Electric</h1>
              <p className="text-xs text-gray-600 font-medium">Your Trusted Electrical Partner</p>
            </div>
          </div>
          <Link href="tel:8427473316" className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 !rounded-button">
            <i className="ri-phone-line text-white text-xl"></i>
          </Link>
        </div>
      </div>
    </header>
  );
}
