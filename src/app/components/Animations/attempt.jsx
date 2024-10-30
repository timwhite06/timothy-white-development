// AttemptGsap Component
'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AttemptGsap() {
  const containerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.trigger',
        start: 'top top',
        end: '+=1000',
        scrub: 1,
        pin: true,
        markers: true // Consider removing for production
      }
    });
    tl.to('.box', { yPercent: 350, duration: 1 });
    tl.to('.box', { rotation: 360, duration: 3 });
    tl.to('.box', { xPercent: 350, duration: 1 });
  }, []);

  return (
    <div ref={containerRef} className="max-h-[300vh] relative">
      <h1 className="text-center text-2xl font-bold mt-12">Scroll down</h1>

      <div className="trigger absolute top-[75vh] left-0 w-full h-[80vh] bg-gray-300 p-5">
        <div className="box bg-black w-[10vw] h-[10vw]"></div>
      </div>
    </div>
  );
}
