import { useEffect, useRef } from 'react';
import heroImage from '../assets/images/29f5450a130f15772761466294036ff34f77fd1f.jpg';

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
      className="relative min-h-screen opacity-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-linear-to-r from-black/40 via-black/30 to-transparent z-0"></div>
      
      <div className="relative z-10 flex min-h-screen items-center px-7 py-20 md:px-12 lg:px-20">
        <div className="max-w-3xl ms-auto">
          <h1 className="whitespace-pre-line font-serif text-4xl leading-[1.1] text-white md:text-5xl lg:text-[56px]">
            Crafted Quarterly.{"\n"}
            Designed Personally.
          </h1>
          <p className="mt-7 max-w-md text-[15px] font-light leading-relaxed text-white/90">
            A premium membership experience delivering bespoke designs tailored to your measurements, preferences, and lifestyle.
          </p>
          <button
            type="button"
            className="mt-10 rounded-sm bg-[#2C2B28] px-12 py-3.5 text-[13px] font-medium tracking-wide text-white shadow-lg transition-all duration-300 hover:bg-[#3d3d3a] hover:shadow-xl hover:-translate-y-0.5"
          >
            Join the Membership
          </button>
          <div className="mt-12 flex items-center gap-3 text-white/60">
            <span className="text-3xl leading-none opacity-60">≡</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
