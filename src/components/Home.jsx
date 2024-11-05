"use client"
import React, { useEffect, useRef } from 'react';
import SearchForm from '../components/SearchForm';
import { gsap } from 'gsap';

const Home = () => {
  const h1Ref = useRef(null);
  const searchFormRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Zoom-in effect for h1 text
    gsap.fromTo(
      h1Ref.current,
      { scale: 0.5, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        delay: 0.5,
        ease: 'power3.out'
      }
    );

    // Scroll-up effect for SearchForm
    gsap.fromTo(
      searchFormRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        delay: 1.5,
        ease: 'power3.out'
      }
    );

    // Background image fade effect
    gsap.to(containerRef.current, {
      backgroundImage: "url('ane.png')",
      duration: 2,
      delay: 1,
      ease: 'power3.out'
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-screen flex items-center justify-center h-[80vh] bg-cover bg-center"
    >
      <div className="flex flex-col items-center justify-center w-[90vw] lg:w-[80vw] gap-">
        <div className="flex flex-col w-screen items-center justify-center">
          {/* <h1
            ref={h1Ref}
            className="w-screen text-[16.6vw] opensans font-black text-black/5 text-center absolute "
          >
          Let's Travel
          </h1> */}
          {/* <p className="w-[70vw] lg:w-[40vw] text-sm opensans font-medium text-center">
            Find your flight and explore the world with us. We will take care of the rest.
          </p> */}
        </div>
        <div ref={searchFormRef} className="w-full flex items-center justify-center z-10">
          <SearchForm />
        </div>
      </div>
    </div>
  );
};

export default Home;
