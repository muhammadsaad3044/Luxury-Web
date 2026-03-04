import { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';
import starImg from '../assets/images/star.png';

const pricingTiers = [
  {
    name: 'Essential',
    price: '$19',
    desc: 'A refined entry point into quarterly luxury craftsmanship.',
    features: ['1 curated design per quarter', 'Seasonal style notes', 'Standard production timeline'],
    cardClass: 'bg-white text-[#1A1A1A]',
    buttonClass:
      'text-[#2C2B28] hover:bg-[#2C2B28] hover:text-white bg-[#E0D2C4]',
    highlight: false,
  },
  {
    name: 'Signature',
    price: '$54',
    desc: 'A refined entry point into quarterly luxury craftsmanship.',
    features: [
      '2 curated designs per quarter',
      'Priority production',
      'Dedicated styling consultation',
    ],
    cardClass: 'bg-white text-[#1A1A1A]',
    buttonClass:
      'text-[#2C2B28] hover:bg-[#2C2B28] hover:text-white bg-[#E0D2C4]',
    highlight: false,
  },
  {
    name: 'Prestige',
    price: '$89',
    desc: 'An exclusive, fully personalized couture-level experience.',
    features: ['3+ custom designs', 'Personal stylist support', 'Express production', 'Private seasonal', 'VIP consultation'],
    cardClass: 'bg-[#E0D2C4] text-[#2C2B28] shadow-lg',
    buttonClass: 'bg-[#2C2B28] text-white hover:bg-[#1E1E1C] border border-[#2C2B28]',
    highlight: true,
  },
];

function Pricing() {
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
    <section id="plans" ref={ref} className="bg-[#DFD0C31C] py-4 md:py-8 opacity-0">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <h2 className="flex justify-center gap-4 text-center text-[20px] italic leading-[1.1] text-[#2C2B28] md:text-[42px] lg:text-[48px]" style={{ fontFamily: "'Playfair Display', serif" }}>
          <img className='object-contain' src={starImg} alt="Star" />
          Membership Tiers
          <img className='object-contain' src={starImg} alt="Star" />
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm font-light text-[#6B6B6B]" style={{ fontFamily: "'Jost', sans-serif" }}>
          Three curated experiences, tailored to different levels of refinement and access.
        </p>

        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {pricingTiers.map((tier, index) => (
            <article
              key={tier.name}
              className={`rounded-lg p-8 transition-transform duration-300 ${tier.cardClass}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {tier.highlight && (
                <span className="mb-4 inline-block rounded-full bg-[#6B6B6B] px-4 py-1.5 text-[9px] font-semibold uppercase tracking-wider text-white">
                  Most Popular
                </span>
              )}

              <p className="font-['Playfair_Display'] text-3xl font-semibold">
                {tier.price}
                <span className={`ml-2 text-xs font-light ${tier.highlight ? 'text-[#6B6B6B]' : 'text-[#6B6B6B]'}`}>
                  /month
                </span>
              </p>
              <h3 className="mt-3 font-['Playfair_Display'] text-2xl font-semibold">{tier.name}</h3>
              <p className={`mt-3 text-sm font-light ${tier.highlight ? 'text-[#555555]' : 'text-[#6B6B6B]'} mb-6`}>
                {tier.desc}
              </p>

              <ul className="space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm font-light">
                    <Check size={16} className="mt-0.5 shrink-0 text-[#C4A882]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className={`mt-8 w-full rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-200 ${tier.buttonClass}`}
              >
                Select Tier
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
