'use client'
import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from "next/image";
import iphone from "@/assets/iphone.png";

gsap.registerPlugin(ScrollTrigger);

// Add or modify sites here
const SHOWCASE_SITES = [
  { name: "Drag and drop website buildr", url: "https://www.webpagebuildr.com" },
  { name: "autum ", url: "https://aut-rho.vercel.app/" },
  { name: "online compiler with gpt", url: "https://ad-compiler.vercel.app" },
  { name: "EcomStore", url: "https://ecomstore-six.vercel.app" },
  { name: "AI blogs", url: "http://thinkai-blog.vercel.app" },
  // Add more sites as needed
];

const Projects = () => {
  const sectionRef = useRef(null);
  const [currentSiteIndex, setCurrentSiteIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;

    gsap.fromTo(section.querySelector('.pro-text'),
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, scrollTrigger: {
        trigger: section,
        start: 'top 90%',
        end: 'top 30%',
        scrub: true,
      }}
    );

    gsap.fromTo(section.querySelector('.show-text'),
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'top 50%',
        scrub: true,
      }}
    );

    gsap.fromTo(section.querySelector('.iphone'),
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, scrollTrigger: {
        trigger: section,
        start: 'top 75%',
        end: 'top 40%',
        scrub: true,
      }}
    );
  }, []);

  const changeWebsite = () => {
    setCurrentSiteIndex((prevIndex) => (prevIndex + 1) % SHOWCASE_SITES.length);
  };

  return (
    <div ref={sectionRef} className="min-h-screen py-12  bg-gray-200">
      <div className='flex items-center justify-center'>
        <div className='w-[80%] pt-6 '>
          <h1 className="pro-text font-serif text-6xl text-start pl-6">Projects</h1>
          <h1 className="show-text font-serif text-6xl text-end pr-6">Showcase</h1>
        </div>
      </div>
      <div className="iphone flex flex-col items-center pt-16 relative">
        <div className="relative w-[390px] h-[810px]  ">
          <Image src={iphone} layout="fill" objectFit="contain" alt="iPhone frame" />
          <div 
            style={{ 
              position: 'absolute', 
              top: '3.5%', 
              left: '6%', 
              width: '88%', 
              height: '93%', 
              borderRadius: '2.5rem', 
              overflow: 'hidden',
              backgroundColor: '#fff'
            }}
          >
            <div 
              style={{
                width: '100%',
                height: '100%',
                overflow: 'auto',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              <iframe
                src={SHOWCASE_SITES[currentSiteIndex].url}
                style={{ 
                  width: '100%',
                  height: '100%',
                  border: 'none',
                }}
                title={SHOWCASE_SITES[currentSiteIndex].name}
              />
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
        <p className="text-xl font-serif mb-4">
  Currently showing:
</p>
<p className="text-lg">
  <strong>{SHOWCASE_SITES[currentSiteIndex].name}</strong>
  <br />
  <a 
    href={SHOWCASE_SITES[currentSiteIndex].url} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-blue-500 underline"
  >
    {SHOWCASE_SITES[currentSiteIndex].url}
  </a>
</p>
          <button 
            onClick={changeWebsite}
            className="px-6 py-3 bg-[#877c73] mt-3 text-white font-serif rounded-full font-bold hover:bg-[#3e3834] transition-colors"
          >
            Next Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;