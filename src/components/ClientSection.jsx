import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import client2 from "../assets/client-2.jpg";
import client3 from "../assets/client-3.webp";
import client1 from '../assets/pinooerImage.jpg'
gsap.registerPlugin(ScrollTrigger);

const cards = [
  {title:"Pioneer Grand Palace",desc:"Experience elegance – a website that turns visitors into guests.",image:client1},
  { title: "Ahil Fitness Park", desc: "Performance-driven website attracting 3x more gym sign-ups.", image: client2 },
  { title: "Selvam Photography", desc: "Elegant portfolio doubling client inquiries.", image: client3 },
];

export default function ClientsSection() {
  const sectionRef = useRef(null);

useEffect(() => {
  const section = sectionRef.current;
  if (!section) return;

  const cardsEls = gsap.utils.toArray(".client-card");

  // Set initial positions: all cards offscreen right
  gsap.set(cardsEls, { x: window.innerWidth, opacity: 0 });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: () => `+=${cardsEls.length * (window.innerWidth * 0.8)}`, // scroll distance
      scrub: 0.6, // smoother scrub
      pin: true,
    },
  });

  cardsEls.forEach((card, i) => {
    tl.to(
      card,
      { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
      i * 0.3 // small overlap for smooth flow
    );
    tl.to(
      card,
      { x: -window.innerWidth, opacity: 0, duration: 0.8, ease: "power2.in" },
      i * 0.3 + 0.8
    );
  });

  return () => {
    ScrollTrigger.getAll().forEach((st) => st.kill());
  };
}, []);

  return (
    <section
      className="relative w-full h-[70vh] flex flex-col items-center overflow-hidden bg-white"
      ref={sectionRef}
    >
      {/* Heading */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-center z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Client Success Stories
        </h2>
        <p className="text-base sm:text-lg text-gray-700 mt-2">
          See how our clients transformed their businesses with Zoro-Tech.
        </p>
      </div>

      {/* Horizontal Scroll Cards */}
      <div className="flex gap-6 mt-52 lg:48">
        {cards.map((card, i) => (
          <article
            key={i}
            className="client-card w-[300px] sm:w-[460px] bg-white rounded-3xl shadow-lg p-4 sm:p-6 flex-shrink-0"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-44 sm:h-52 md:h-56 object-cover rounded-2xl mb-4"
              loading="lazy"
            />
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">
              {card.title}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">{card.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}