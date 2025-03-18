import React from 'react';
import { Crown, Building2, GlassWater, Users } from 'lucide-react';

const services = [
  {
    icon: Crown,
    title: 'Luxury Weddings',
    description: 'Transforming your dream wedding into an unforgettable celebration of love and luxury.'
  },
  {
    icon: Building2,
    title: 'Corporate Events',
    description: 'Elevating your corporate gatherings with sophistication and meticulous attention to detail.'
  },
  {
    icon: GlassWater,
    title: 'Private Soirées',
    description: 'Creating intimate gatherings that leave lasting impressions and cherished memories.'
  },
  {
    icon: Users,
    title: 'Social Galas',
    description: 'Orchestrating grand social events that become the talk of the season.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#1A1A2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-[#D4AF37] mb-4">Our Expertise</h2>
          <p className="text-[#FFFFF0] text-lg max-w-2xl mx-auto">
            Delivering unparalleled experiences through our comprehensive suite of services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white bg-opacity-5 p-8 rounded-lg hover:transform hover:-translate-y-1 transition-all duration-300"
            >
              <service.icon className="text-[#D4AF37] mb-4" size={32} />
              <h3 className="text-xl font-serif text-[#D4AF37] mb-2">{service.title}</h3>
              <p className="text-[#FFFFF0] text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}