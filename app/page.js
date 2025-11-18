// components/LinktreePage.js

'use client';

import Image from 'next/image';
import { FiShare2 } from 'react-icons/fi';
import { BiDotsVertical } from 'react-icons/bi';

const PROFILE_LOGO_PATH = '/logo4.png';

const arhaLinks = [
  { 
    id: 1, 
    title: 'ARHA FITNESS GYM IMAGE', // Title updated for clarity
    description: '', 
    iconUrl: '/galleryIcon1.png', // PDF icon ka path (agar aapko specific icon chahiye)
    link: '/arha_gym.pdf', // 👈 Tumhari PDF file ka path. Yeh public folder mein hona chahiye.
    isPdf: true // Flag to identify PDF link
  },
  { 
    id: 2, 
    title: 'ARHA FITNESS 24/7 GYM - Gandhinagar, Gujarat', 
    description: 'Gandhinagar Branch', 
    iconUrl: '/1.png',
    link: 'https://maps.app.goo.gl/mGem3YTfnx8LuxoU9' 
  },
  { 
    id: 3, 
    title: 'ARHA FITNESS 24/7 GYM Ahmedabad, Gujarat', 
    description: 'Ahmedabad Branch', 
    iconUrl: '/fitness.png',
    link: 'https://share.google/ujrYqiMti7JPQTZlM' 
  },
];


// 🔗 Reusable Link Item
// LinkItem aab 'isPdf' prop bhi accept karega.
const LinkItem = ({ title, iconUrl, link, isPdf }) => {
  
  // Conditionally apply target and rel attributes
  const targetProp = isPdf ? {} : { target: '_blank', rel: 'noopener noreferrer' };

  return (
    <a
      href={link}
      {...targetProp} // Agar PDF hai, toh target/rel nahi aayega, current tab mein open hoga.
      className="group flex items-center justify-between p-3 sm:p-4 bg-white/80 backdrop-blur-md border border-gray-100 
        rounded-xl shadow-md hover:shadow-xl transition-all duration-300 w-full mb-4 hover:scale-[1.03]"
    >
      {/* Left side: Image + Text */}
      <div className="flex items-center min-w-0 flex-1">
        {/* Icon */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-100 rounded-lg overflow-hidden relative flex-shrink-0">
          <Image
            src={iconUrl}
            alt={`${title} icon`}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Title */}
        <p className="ml-4 text-sm sm:text-base md:text-lg font-medium text-gray-800 whitespace-normal break-words leading-snug">
          {title}
        </p>
      </div>

      {/* Three Dots Icon */}
      <div className="ml-3 flex-shrink-0 flex items-center">
        <BiDotsVertical className="text-gray-500 text-xl sm:text-2xl" />
      </div>
    </a>
  );
};


// 🌈 Main Page
export default function ArhaLinktreePage() {
  return (
    <div className="relative min-h-screen font-sans flex flex-col items-center justify-start pb-20 md:pb-28">

      {/* Gradient BG */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-pink-50 to-blue-50 overflow-hidden">
        <div className="absolute top-[-20%] left-[-20%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-blue-500/10 rounded-full blur-3xl animate-blob-one"></div>
        <div className="absolute bottom-[-20%] right-[-20%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-purple-500/10 rounded-full blur-3xl animate-blob-two"></div>
        <div className="absolute inset-0 backdrop-blur-sm"></div>
      </div>

      {/* Header */}
      <header className="relative flex justify-end items-center p-4 sm:p-6 w-full max-w-2xl z-20">
        <button
          onClick={() => navigator.clipboard.writeText(window.location.href)}
          className="text-gray-700 p-2 sm:p-3 rounded-full bg-white/60 backdrop-blur-md shadow-sm hover:shadow-lg hover:text-blue-600 transition-all"
        >
          <FiShare2 className="text-lg sm:text-xl md:text-2xl" />
        </button>
      </header>

      {/* Main Content */}
      <main className="relative flex flex-col items-center px-4 sm:px-6 md:px-8 z-10 w-full max-w-2xl text-center">

        {/* Profile Logo */}
        <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-white/90 backdrop-blur-md rounded-full border-4 border-white shadow-xl flex items-center justify-center mb-6 overflow-hidden relative">
          <Image
            src={PROFILE_LOGO_PATH}
            alt="ARHA FITNESS 24/7 Logo"
            width={128}
            height={128}
            className="object-cover"
            priority
          />
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-wide">
          ARHA FITNESS 24/7
        </h1>

        {/* Links */}
        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl px-2 sm:px-0 mt-2">
          {arhaLinks.map((link) => (
            <LinkItem
              key={link.id}
              title={link.title}
              iconUrl={link.iconUrl}
              link={link.link}
              isPdf={link.isPdf} // Pass the new flag to LinkItem
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 h-12 sm:h-14 bg-white/70 border-t border-gray-200 backdrop-blur-md flex flex-col items-center justify-center text-gray-600 z-30 sm:hidden">
        <p className="text-xs sm:text-sm font-medium tracking-wide">
          ARHA FITNESS © 2025
        </p>
      </footer>
    </div>
  );
}