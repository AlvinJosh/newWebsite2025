import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#1A1A2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-serif text-[#D4AF37] mb-6">Let's Create Something Extraordinary</h2>
            <p className="text-[#FFFFF0] mb-8">
              Begin your journey towards an unforgettable event. Our team of expert planners is ready to bring your vision to life.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center text-[#FFFFF0]">
                <Mail className="text-[#D4AF37] mr-4" />
                <span>contact@luxeevents.com</span>
              </div>
              <div className="flex items-center text-[#FFFFF0]">
                <Phone className="text-[#D4AF37] mr-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-[#FFFFF0]">
                <MapPin className="text-[#D4AF37] mr-4" />
                <span>123 Luxury Lane, Beverly Hills, CA 90210</span>
              </div>
            </div>

            <div className="flex space-x-4 mt-8">
              <a href="#" className="text-[#D4AF37] hover:text-[#FFFFF0] transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-[#D4AF37] hover:text-[#FFFFF0] transition-colors">
                <Facebook size={24} />
              </a>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-white bg-opacity-5 border border-[#D4AF37] text-[#FFFFF0] placeholder-[#FFFFF0] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-white bg-opacity-5 border border-[#D4AF37] text-[#FFFFF0] placeholder-[#FFFFF0] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded"
              />
            </div>
            <div>
              <select className="w-full px-4 py-3 bg-white bg-opacity-5 border border-[#D4AF37] text-[#FFFFF0] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded">
                <option value="">Event Type</option>
                <option value="wedding">Wedding</option>
                <option value="corporate">Corporate Event</option>
                <option value="private">Private Party</option>
                <option value="social">Social Gala</option>
              </select>
            </div>
            <div>
              <textarea
                placeholder="Tell us about your vision"
                rows={4}
                className="w-full px-4 py-3 bg-white bg-opacity-5 border border-[#D4AF37] text-[#FFFFF0] placeholder-[#FFFFF0] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#D4AF37] text-[#1A1A2E] py-3 rounded hover:bg-opacity-90 transition-all duration-300"
            >
              Begin Your Journey
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}