'use client'
import React, { useRef, useEffect } from 'react';
import Image from "next/image";
import adi from "@/assets/adi.png";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const Home = () => {
  const adiTextRef = useRef(null);
  const naikTextRef = useRef(null);
  const adiImageRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Ensure GSAP and ScrollTrigger are properly imported
    gsap.registerPlugin(ScrollTrigger);

    // Use refs directly instead of querySelector
    const adiText = adiTextRef.current;
    const naikText = naikTextRef.current;
    const adiImage = adiImageRef.current;

    const animations = gsap.context(() => {
      if (adiText) {
        gsap.fromTo(adiText,
          { opacity: 0, y: -80 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 1, 
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'bottom 99%',
              end: 'bottom 80%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }

      if (naikText) {
        gsap.fromTo(naikText,
          { opacity: 0, y: 100 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 1, 
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'bottom 96%',
              end: 'bottom 78%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }

      if (adiImage) {
        gsap.fromTo(adiImage,
          { opacity: 0, scale: 0.8 },
          { 
            opacity: 1, 
            scale: 1, 
            duration: 1, 
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'bottom 90%',
              end: 'bottom 80%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
    }, sectionRef);

    // Cleanup function
    return () => {
      animations.revert();
    };
  }, []);

  return (
    <div ref={sectionRef}  className="bg-gradient-to-b from-slate-900 to-slate-800 min-h-screen flex items-center justify-center text-white"
    >
      <div className="h-[60%] pt-20">
      <h1
            ref={adiTextRef}
            className="font-mono text-8xl text-start pl-6 text-emerald-400 tracking-tight transform hover:scale-105 transition-transform duration-300"
          >
            Adi
          </h1>
          <h1
            ref={naikTextRef}
            className="font-mono text-8xl text-end pr-6 text-emerald-400 tracking-tight transform hover:scale-105 transition-transform duration-300"
          >
            Naik
          </h1>
        <div 
          ref={adiImageRef} 
          className="adi-image pt-16"
        >
          <div className="relative">
              <div className="absolute inset-0 bg-emerald-400/20 rounded-full filter blur-xl animate-pulse"></div>
              <Image
                className="relative z-10 transform hover:scale-105 transition-transform duration-300 rounded-full "
                src={adi}
                width={300}
                height={300}
                alt="Adi Naik"
              />
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default Home;