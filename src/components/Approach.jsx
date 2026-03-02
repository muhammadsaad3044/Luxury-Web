import { useEffect, useRef } from 'react';

const cards = [
  {
    title: 'Personalized Design',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900',
  },
  {
    title: 'Precision\nCraftsmanship',
    image: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=900',
  },
  {
    title: 'Quarterly Continuity',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900',
  },
];

function Approach() {
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
    <section id="about" ref={ref} className="bg-[#F5F0EB] py-4 md:py-8 opacity-0">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <h2 className="text-center text-[32px] italic leading-[1.1] text-[#2C2B28] md:text-[42px] lg:text-[48px]">
          <span className="text-[#C4A882]">+</span>A More Personal Approach to Luxury<span className="text-[#C4A882]">+</span>
        </h2>
        <p className="mx-auto mt-2 text-center text-[11px] font-light text-[#6B6B6B] md:text-[12px]">
          Designed around you — not trends.
        </p>

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => {
            const middle = index === 1;
            return (
              <article
                key={card.title}
                className="group relative h-72 overflow-hidden rounded-sm shadow-sm transition-transform duration-300 hover:-translate-y-1 md:h-80"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
                <p
                  className={`absolute whitespace-pre-line font-['Playfair_Display'] text-[22px] leading-[1.15] text-white md:text-[24px] ${
                    middle ? 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center' : 'bottom-5 left-5'
                  }`}
                >
                  {card.title}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Approach;
