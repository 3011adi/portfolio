'use client'
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from "next/image";
import adi from "@/assets/know.png";

gsap.registerPlugin(ScrollTrigger);

const scrambleText = (element, newText, duration) => {
  const chars = '!<>-_\\/[]{}—=+*^?#________';
  const text = element.innerText;
  const length = Math.max(text.length, newText.length);
  let frame = 0;

  const update = () => {
    let output = '';
    for (let i = 0; i < length; i++) {
      if (i < frame / duration * length) {
        output += newText[i] || '';
      } else {
        output += chars[Math.floor(Math.random() * chars.length)];
      }
    }
    element.innerText = output;
    frame++;
    if (frame < duration) {
      requestAnimationFrame(update);
    }
  };

  update();
};

const Know = () => {
  const sectionRef = useRef(null);
  const h1Ref = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = section.querySelector('.adi-img');

    // Media query for desktop
    const desktopMediaQuery = window.matchMedia('(min-width: 1024px)');

    const handleAnimations = (e) => {
      // Clear previous animations
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());

      if (e.matches) {
        // Desktop Animations
        gsap.fromTo(image,
          { opacity: 0, y: -80, x: 0 },
          { 
            opacity: 1, 
            y: 0, 
            x: 0, 
            duration: 1, 
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              end: 'top 48%',
              scrub: true,
            }
          }
        );

        gsap.fromTo(image,
          { opacity: 0, x: 0, y: 0 },
          { 
            opacity: 1, 
            x: -750, 
            y: 300, 
            duration: 1, 
            scrollTrigger: {
              trigger: section,
              start: 'top 48%',
              end: 'top 18%',
              scrub: true,
            }
          }
        );

        gsap.fromTo(image,
          { opacity: 0, y: 300, x: -750 },
          { 
            opacity: 1, 
            y: 550, 
            x: 0, 
            duration: 1, 
            scrollTrigger: {
              trigger: section,
              start: 'top 16%',
              end: 'top 2%',
              scrub: true,
            }
          }
        );
      } else {
        // Mobile Animations
        gsap.fromTo(image,
          { opacity: 0, y: -80, x: 0 },
          { 
            opacity: 1, 
            y: 0, 
            x: 0, 
            duration: 1, 
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              end: 'top 48%',
              scrub: true,
            }
          }
        );

        gsap.fromTo(image,
          { opacity: 0, x: 0, y: 0 },
          { 
            opacity: 1, 
            x: -185, 
            y: 300, 
            duration: 1, 
            scrollTrigger: {
              trigger: section,
              start: 'top 48%',
              end: 'top 18%',
              scrub: true,
            }
          }
        );

        gsap.fromTo(image,
          { opacity: 0, y: 300, x: -185 },
          { 
            opacity: 1, 
            y: 500, 
            x: 0, 
            duration: 1, 
            scrollTrigger: {
              trigger: section,
              start: 'top 16%',
              end: 'top 2%',
              scrub: true,
            }
          }
        );
      }

      // Scramble text animation
      ScrollTrigger.create({
        trigger: section,
        start: 'top 80%',
        end: 'top 50%',
        onEnter: () => {
          const element = h1Ref.current;
          scrambleText(element, "what i know?", 60);
        }
      });
    };

    // Initial call
    handleAnimations(desktopMediaQuery);

    // Add listener for media query changes
    desktopMediaQuery.addListener(handleAnimations);

    // Cleanup
    return () => {
      desktopMediaQuery.removeListener(handleAnimations);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section>
      <h1 ref={h1Ref} className='text-5xl text-center  font-serif py-6'></h1>
      <div ref={sectionRef} className='grid grid-cols-2 space-x-2 space-y-2 h-screen py-2 px-2'>
        <div className='bg-[#877c73] rounded-l-2xl rounded-e-md'>
          <h1 className='text-5xl font-serif p-3'> web dev</h1>
          <div><h1 className='text-xl p-3'>react <br /> next js <br />express <br /> node <br />three js <br />gsap <br />ui/ux</h1></div>
        </div>
        <div className='flex items-center justify-center '>
          <Image className="adi-img  " src={adi} width={160} height={160} alt="Adi Image" />
        </div>
        <div></div>
        <div className='bg-[#877c73]  rounded-r-2xl rounded-s-md'>
          <h1 className='text-5xl font-serif p-3'> app dev</h1>
          <div><h1 className='text-xl p-3'>kotlin <br /> swift <br />react-native</h1></div>
        </div>
        <div className='bg-[#877c73] rounded-l-2xl rounded-e-md'>
          <h1 className='text-5xl font-serif p-3'> Other</h1>
          <div><h1 className='text-xl p-3'> Blender <br /> unity <br /> tensorflow</h1></div>
        </div>
      </div>
    </section>
  );
}

export default Know;