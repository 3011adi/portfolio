'use client'
import React, { useEffect, useRef } from 'react';
import Image from "next/image";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Anim from "@/components/anim";
import Projects from "@/components/projects";
import Home from "@/components/home";
import Know from "@/components/know";
import About from "@/components/about";

gsap.registerPlugin(ScrollTrigger);

export default function Layout() {
  const animSectionRef = useRef(null);

  useEffect(() => {
    const animSection = animSectionRef.current;

    // Create a ScrollTrigger that pins the animation section
    const pinTrigger = ScrollTrigger.create({
      trigger: animSection,
      start: 'top 20%', // when the top of the section hits the top of the viewport
      end: 'bottom top', // when the bottom of the section reaches the top of the viewport
      pin: true, // pin the section
      pinSpacing: true, // maintain scroll spacing
      anticipatePin: 1,
      onEnter: () => {
        // Optional: You can trigger any additional animations or reset here
        console.log('Entering animation section');
      },
      onLeave: () => {
        console.log('Leaving animation section');
      }
    });

    // Cleanup
    return () => {
      pinTrigger.kill();
    };
  }, []);

  return (
    <div className="bg-gray-200">
      <section className="my-[15%]">
        <Home />
      </section>
      
      <section 
        ref={animSectionRef} 
        className="min-h-screen w-full bg-pink-300 flex items-center justify-center"
      >
        <Anim />
      </section>
      
      <Know />
      
      <section className="pt-12">
        <Projects />
      </section>
      
      <About/>
    </div>
  );
}