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
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const animations = gsap.context(() => {
      // Create smooth entrance animation
      gsap.set([adiTextRef.current, naikTextRef.current, adiImageRef.current], {
        opacity: 0,
        y: 50
      });

      // Text animations
      gsap.to(adiTextRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse"
        }
      });

      gsap.to(naikTextRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.4,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse"
        }
      });

      // Image animation with subtle float effect
      gsap.to(adiImageRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        delay: 0.6,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse"
        }
      });

      // Add floating animation to image
      gsap.to(adiImageRef.current, {
        y: "-10px",
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
      });
    }, sectionRef);

    return () => animations.revert();
  }, []);

  return (
    <div 
      ref={sectionRef}
      className="bg-gradient-to-b from-slate-900 to-slate-800 min-h-screen flex items-center justify-center"
    >
      <div 
        ref={containerRef}
        className="w-full  max-w-4xl mx-auto px-4 py-16"
      >
        <div className="flex flex-col items-center justify-center gap-8">
          {/* Text Container */}
          <div className="text-center  w-[50%] space-y-2">
            <h1
              ref={adiTextRef}
              className="font-mono text-left text-8xl md:text-9xl text-emerald-400 tracking-tight transform hover:scale-105 transition-transform duration-300"
            >
              Adi
            </h1>
            <h1
              ref={naikTextRef}
              className="font-mono text-right text-8xl md:text-9xl text-emerald-400 tracking-tight transform hover:scale-105 transition-transform duration-300"
            >
              Naik
            </h1>
          </div>

          {/* Image Container */}
          <div
            ref={adiImageRef}
            className="relative mx-auto mt-12"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-emerald-400/20 rounded-full filter blur-3xl animate-pulse scale-110"></div>
            
            {/* Image */}
            <div className="relative">
              <Image
                className="rounded-full transform hover:scale-105 transition-transform duration-300 "
                src={adi}
                width={320}
                height={320}
                alt="Adi Naik"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;