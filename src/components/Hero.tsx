import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://player.vimeo.com/external/374033982.hd.mp4?s=236c4733b8b116dc3fc9ad8f001842f1a00b5e35&profile_id=175&oauth2_token_id=57447761"
          type="video/mp4"
        />
      </video>
      
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6">
          Crafting Extraordinary Moments
        </h1>
        <p className="text-xl md:text-2xl text-[#FFFFF0] max-w-2xl mb-12">
          Where luxury meets impeccable execution. Creating unforgettable experiences for the world's most discerning clientele.
        </p>
        <a
          href="#contact"
          className="bg-[#D4AF37] text-[#1A1A2E] px-8 py-3 rounded hover:bg-opacity-90 transition-all duration-300"
        >
          Begin Your Journey
        </a>
        
        <ChevronDown
          className="absolute bottom-8 text-white animate-bounce"
          size={32}
        />
      </div>
    </div>
  );
}