import { useEffect, useRef } from 'react';
import heroImage from '../assets/images/29f5450a130f15772761466294036ff34f77fd1f.jpg';
import scrooldownImg from '../assets/images/scrolldown.png';

function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
        }
      },
      { threshold: 0.15 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="home" 
      ref={ref} 
      className="relative min-h-screen opacity-90 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-linear-to-r from-black/0 via-black/0 to-transparent z-0"></div>
      
      <div className="relative z-10 flex min-h-screen items-center px-7 py-20 md:px-12 lg:px-20">
        <div className="max-w-3xl ms-auto">
          <h1 className="whitespace-pre-line font-serif text-4xl leading-[1.1] text-[#000000] md:text-5xl lg:text-[56px]">
            Crafted Quarterly.{"\n"}
            Designed Personally.
          </h1>
          <p className="mt-7 max-w-md text-[22px] font-normal leading-relaxed text-[#2A2A2A]">
            A premium membership experience delivering bespoke designs tailored to your measurements, preferences, and lifestyle.
          </p>
          <button
          style={{ boxShadow: '9px 10px 2px rgba(0,0,0,0.5)' }}
            type="button"
            className="mt-10 bg-[#2B2B2B] px-12 py-3.5 text-[13px] font-medium tracking-wide text-[#AF988A] transition-all duration-300 hover:bg-[#2B2B2B] hover:shadow-xl hover:-translate-y-0.5"
          >
            Join the Membership
          </button>
          <div className="mt-20 flex items-center gap-3 text-white/60">
            <span className="text-3xl leading-none opacity-60">
              <img src={scrooldownImg} alt="Scroll down" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
