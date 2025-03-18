import React from 'react';

const events = [
  {
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80",
    category: "Wedding",
    title: "The Hamilton Estate Wedding"
  },
  {
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80",
    category: "Corporate",
    title: "Goldman Annual Gala"
  },
  {
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80",
    category: "Private Event",
    title: "Summers in Provence"
  },
  {
    image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80",
    category: "Social",
    title: "Metropolitan Museum Benefit"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-[#FFFFF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-[#1A1A2E] mb-4">Featured Events</h2>
          <p className="text-[#1A1A2E] text-lg max-w-2xl mx-auto">
            A curated selection of our most prestigious events
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event) => (
            <div
              key={event.title}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[#D4AF37] text-sm uppercase tracking-wider">{event.category}</span>
                <h3 className="text-white text-2xl font-serif mt-2">{event.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}