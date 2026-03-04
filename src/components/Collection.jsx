import { useEffect, useRef } from 'react';
import starImg from '../assets/images/star.png';
import collection1 from '../assets/images/collectionimg1.png';
import collection2 from '../assets/images/collectionimg2.png';
import collection3 from '../assets/images/collectionimg3.png';
import img4 from '../assets/images/d79996ea64b22df8ffa72c38138fcb3b00153444.jpg';
const topImages = [
  {
    label: 'Premium',
    image: collection1,
  },
  {
    label: 'Luxury',
    image: collection2,
  },
  {
    label: 'Classics',
    image: collection3,
  },
];

function Collection() {
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
    <section ref={ref} className="bg-[#F8F5F0] py-4 md:py-8 opacity-0">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <h2 className="flex justify-center items-center gap-4 text-center text-[20px] italic leading-[1.1] text-[#2C2B28] md:text-[42px] lg:text-[48px]">
          <img className='object-contain' src={starImg} alt="Star" />
          A Glimpse Into the Collection
          <img className='object-contain' src={starImg} alt="Star" />
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-sm font-light text-[#6B6B6B]">
          Discover seasonal signatures, elevated staples, and timeless silhouettes curated for members.
        </p>

        <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {topImages.map((item, index) => (
              <article
                key={item.label}
                className="group relative h-100 overflow-hidden shadow-sm transition-transform duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={item.image}
                  alt={item.label}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.09]"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/70 to-transparent" />
                <p className="absolute bottom-50 left-45 text-2xl italic text-white">{item.label}</p>
              </article>
            ))}
          </div>

          <article className="group relative h-100 overflow-hidden shadow-sm transition-transform duration-300 hover:-translate-y-1">
            <img
              src={img4}
              alt="Spring Collection 2026"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-black/30" />
            <p className="absolute inset-0 flex items-center justify-center text-3xl italic text-white">
              Spring Collection 2026
            </p>
            <div className="absolute bottom-4 right-4 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-white/40" />
              <span className="h-2 w-2 rounded-full bg-white" />
              <span className="h-2 w-2 rounded-full bg-white/40" />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Collection;
