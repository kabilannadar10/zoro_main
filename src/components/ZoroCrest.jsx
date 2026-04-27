/*
  ZoroCrest.jsx

  Pure-React, dependency-free carousel (no Swiper) — Vite/Tailwind friendly.

  Key features:
  - No external carousel library; works with just React and Tailwind CSS.
  - Autoplay with pause-on-hover, navigation arrows, pagination dots, and clickable thumbnails.
  - Keyboard support (left/right) for navigation.
  - Lazy image loading using the native `loading="lazy"` attribute.

  Usage:
  1) Ensure Tailwind is configured in your project.
  2) Replace image imports with optimized web-friendly formats (webp/jpg/png).
  3) Drop this file into your components folder and import where needed.

  Exports a default React component.
*/

import React, { useEffect, useRef, useState, useCallback } from 'react';

import ZoroCrest1 from '../assets/zoro-crest1.jpg';
import ZoroCrest2 from '../assets/zoro-crest2.JPG';
import ZoroCrest3 from '../assets/zoro-crest3.jpg';
import ZoroCrest4 from '../assets/zoro-crest4.JPG';

export default function ZoroCrest() {
  const slides = [
    { src: ZoroCrest1, alt: 'Students at an orientation session', caption: 'Expert-led orientations' },
    { src: ZoroCrest2, alt: 'Industry collaboration meeting', caption: 'Industry partnerships' },
    { src: ZoroCrest3, alt: 'Mentorship and guidance', caption: 'Mentorship programs' },
    { src: ZoroCrest4, alt: 'Career guidance and events', caption: 'Career-focused events' },
  ];

  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef(null);
  const autoplayDelay = 3500;

  const goTo = useCallback((i) => {
    setIndex((prev) => {
      const next = ((i % slides.length) + slides.length) % slides.length;
      return next;
    });
  }, [slides.length]);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (isPaused) return;
    timeoutRef.current = setTimeout(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, autoplayDelay);
    return () => clearTimeout(timeoutRef.current);
  }, [index, isPaused, slides.length]);

  // Keyboard support
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [next, prev]);

  return (
    <section className="mt-20 px-6 lg:px-20 bg-gradient-to-b from-emerald-50 via-white to-lime-50 py-16 rounded-3xl shadow-inner">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left */}
          <div className="text-center lg:text-left">
            <h2 className="text-5xl lg:text-6xl font-extrabold leading-tight">
              <span className="bg-gradient-to-r from-emerald-600 to-lime-700 bg-clip-text text-transparent drop-shadow-sm">Zoro Crest</span>
            </h2>
            <p className="mt-3 text-emerald-700 font-semibold tracking-wide text-lg">Where Academics Meet Opportunities</p>

            <p className="mt-6 text-gray-700 leading-relaxed text-lg">
              Zoro Crest is the academic arm of Zoro — empowering students and institutions through tailored
              orientations, industry collaborations, and career-focused programming.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-2xl px-6 py-3 bg-emerald-600 text-white font-medium shadow hover:bg-emerald-700 transition"
              >
                Get Involved
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                  <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </a>

              <button className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 border border-emerald-200 text-emerald-700 bg-white hover:shadow-sm transition">
                Learn More
              </button>
            </div>

            {/* Key metrics */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">120+</div>
                <div className="text-sm text-gray-600">Partner Institutes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">10k+</div>
                <div className="text-sm text-gray-600">Students Reached</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Placement Drives</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">95%</div>
                <div className="text-sm text-gray-600">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          {/* Right: Carousel */}
          <div className="order-first lg:order-last">
            <div
              className="rounded-2xl overflow-hidden shadow-lg ring-1 ring-emerald-100 relative"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Slides container */}
              <div className="w-full h-64 md:h-80 lg:h-96 relative">
                {slides.map((s, i) => (
                  <div
                    key={i}
                    className={`absolute inset-0 transition-transform duration-700 ease-in-out ${i === index ? 'translate-x-0 z-10' : i < index ? '-translate-x-full z-0' : 'translate-x-full z-0'}`}
                    aria-hidden={i !== index}
                    style={{ transform: `translateX(${(i - index) * 100}%)` }}
                  >
                    <img src={s.src} alt={s.alt} className="w-full h-full object-cover block" loading="lazy" />
                    <figcaption className="absolute left-4 bottom-4 bg-white/80 backdrop-blur-sm text-emerald-800 px-3 py-2 rounded-md text-sm font-medium shadow">
                      {s.caption}
                    </figcaption>
                  </div>
                ))}

                {/* Navigation arrows */}
                <button
                  onClick={() => prev()}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur rounded-full p-2 shadow hover:scale-105 transition"
                  aria-label="Previous slide"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-700" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 15.707a1 1 0 01-1.414 0L6.586 11l4.293-4.707a1 1 0 011.414 1.414L9.414 11l2.879 2.879a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                </button>

                <button
                  onClick={() => next()}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur rounded-full p-2 shadow hover:scale-105 transition"
                  aria-label="Next slide"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-700" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.707 4.293a1 1 0 010 1.414L4.414 9H14a1 1 0 110 2H4.414l3.293 3.293a1 1 0 11-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>

              {/* Pagination dots */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-3 flex gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    className={`w-3 h-3 rounded-full ${i === index ? 'bg-emerald-700' : 'bg-white/70 ring-1 ring-emerald-100'}`}
                    onClick={() => goTo(i)}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="mt-4 flex gap-3 justify-center lg:justify-start">
              {slides.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  className={`w-20 h-14 rounded-lg overflow-hidden ring-1 ${idx === index ? 'ring-emerald-500 scale-105' : 'ring-emerald-100'} focus:outline-none transform transition`}
                >
                  <img src={s.src} alt={s.alt} className="w-full h-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 rounded-xl bg-white/60 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Our mission</h3>
            <p className="text-gray-700 mt-1">To bridge the gap between education and real-world opportunities through mentorship, industry exposure, and strategic partnerships.</p>
          </div>

          <div className="flex items-center gap-4">
            <a href="#programs" className="text-sm font-medium text-emerald-700 hover:underline">Explore Programs</a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg px-4 py-2 bg-emerald-700 text-white text-sm shadow hover:bg-emerald-800 transition">Contact the Team</a>
          </div>
        </div>
      </div>
    </section>
  );
}
