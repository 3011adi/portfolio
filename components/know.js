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
  const cardsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const image = section.querySelector('.adi-img');
    const cards = section.querySelectorAll('.skill-card');
    
    const desktopMediaQuery = window.matchMedia('(min-width: 1024px)');

    const handleAnimations = (e) => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());

      // Stagger animation for skill cards
      gsap.from(cards, {
        duration: 0.8,
        opacity: 0,
        y: 50,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          end: 'top 20%',
          scrub: false,
        }
      });

      // Rotating animation for image
      gsap.to(image, {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none"
      });

      if (e.matches) {
        // Desktop animations
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top 60%',
            end: 'bottom 40%',
            scrub: 1,
          }
        });

        timeline
          .fromTo(image,
            { scale: 0.5, opacity: 0, y: -100 },
            { scale: 1, opacity: 1, y: 0, duration: 2 }
          )
          .to(image, {
            x: -690,
            y: 310,
            duration: 3
          })
          .to(image, {
            x: 0,
            y: 610,
            duration: 3
          });

      } else {
        // Mobile animations
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top 60%',
            end: 'bottom 20%',
            scrub: 1,
          }
        });

        timeline
          .fromTo(image,
            { scale: 0.5, opacity: 0, y: -100 },
            { scale: 1, opacity: 1, y: 0, duration: 2 }
          )
          .to(image, {
            x: -195,
            y: 330,
            duration: 3
          })
          .to(image, {
            x: 0,
            y: 750,
            duration: 3
          });
      }

      // Enhanced scramble text animation
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

    handleAnimations(desktopMediaQuery);
    desktopMediaQuery.addListener(handleAnimations);

    return () => {
      desktopMediaQuery.removeListener(handleAnimations);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <h1 ref={h1Ref} className="text-6xl text-center font-mono tracking-tight py-12 text-emerald-400"></h1>
      <div ref={sectionRef} className="grid grid-cols-2 gap-6  p-6 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 border border-slate-600">
          <h1 className="text-5xl font-mono text-emerald-400 p-6 border-b border-slate-600"> web dev</h1>
          <div className="p-6">
            <h1 className="text-xl font-sans space-y-3">
              {["react", "next js", "express", "node", "three js", "gsap", "ui/ux"].map((skill) => (
                <div key={skill} className="flex items-center space-x-2 hover:text-emerald-400 transition-colors">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                  <span>{skill}</span>
                </div>
              ))}
            </h1>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image className="adi-img filter drop-shadow-lg" src={adi} width={160} height={160} alt="Adi Image" />
        </div>
        <div></div>
        <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 border border-slate-600">
          <h1 className="text-5xl font-mono text-emerald-400 p-6 border-b border-slate-600"> app dev</h1>
          <div className="p-6">
            <h1 className="text-xl font-sans space-y-3">
              {["kotlin", "swift", "react-native"].map((skill) => (
                <div key={skill} className="flex items-center space-x-2 hover:text-emerald-400 transition-colors">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                  <span>{skill}</span>
                </div>
              ))}
            </h1>
          </div>
        </div>
        <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 border border-slate-600">
          <h1 className="text-5xl font-mono text-emerald-400 p-6 border-b border-slate-600"> Other</h1>
          <div className="p-6">
            <h1 className="text-xl font-sans space-y-3">
              {["Blender", "unity", "tensorflow"].map((skill) => (
                <div key={skill} className="flex items-center space-x-2 hover:text-emerald-400 transition-colors">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                  <span>{skill}</span>
                </div>
              ))}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Know;