'use client'
import React, { useRef, useEffect } from 'react';
import Image from "next/image";
import adi from "@/assets/adi.png";;
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    gsap.fromTo(section.querySelector('.adi-text'), 
      { opacity: 0, y: -80 }, 
      { opacity: 1, y: 0, duration: 1, scrollTrigger: {
        trigger: section,
        start: 'bottom 99%',
        end: 'bottom 80%',
        scrub: true,
      }}
    );

    gsap.fromTo(section.querySelector('.naik-text'), 
      { opacity: 0, y: 100 }, 
      { opacity: 1, y: 0, duration: 1, scrollTrigger: {
        trigger: section,
        start: 'bottom 96%',
        end: 'bottom 78%',
        scrub: true,
      }}
    );

    gsap.fromTo(section.querySelector('.adi-image'), 
      { opacity: 0, scale: 0.8 }, 
      { opacity: 1, scale: 1, duration: 1, scrollTrigger: {
        trigger: section,
        start: 'bottom 90%',
        end: 'bottom 80%',
        scrub: true,
      }}
    );
  }, []);

  return (
    <div ref={sectionRef} className=" flex h-screen  items-center justify-center  bg-gray-200">
         <div className=" h-[60%] pt-20 ">
        <h1 className="adi-text font-serif text-8xl text-start pl-6">Adi</h1>
        <h1 className="naik-text font-serif text-8xl text-end pr-6">Naik</h1>
        <div className="adi-image  pt-16">
        <Image className=" pt-16" src={adi}  width={300} height={300} />
        </div>
      </div>
    </div>
  );
};

export default Home;