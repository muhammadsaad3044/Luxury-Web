import { useEffect, useRef } from 'react';
import starImg from '../assets/images/star.png';

const steps = [
  {
    number: '01',
    title: 'Join the Membership',
    description:
      'Select your tier and gain access to a private, personalized fashion experience.',
    highlighted: true,
  },
  {
    number: '02',
    title: 'Define Your Profile',
    description:
      'Share your measurements, style preferences, and occasion needs to guide every design decision.',
    highlighted: false,
  },
  {
    number: '03',
    title: 'Design & Craft',
    description:
      'Our team curates fabrics, refines silhouettes, and oversees production with meticulous attention to detail.',
    highlighted: false,
  },
  {
    number: '04',
    title: 'Delivered to You',
    description:
      'Your quarterly selection arrives prepared, tailored, and ready to wear.',
    highlighted: false,
  },
];

function PlusIcon({ className = '' }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="8" y1="0" x2="8" y2="16" stroke="#C0392B" strokeWidth="2" />
      <line x1="0" y1="8" x2="16" y2="8" stroke="#C0392B" strokeWidth="2" />
    </svg>
  );
}

function Process() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('se-visible');
        }
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&family=Jost:wght@300;400;500&display=swap');

        .se-section {
          background-color: #F0EBE3;
          padding: 72px 24px 80px;
          font-family: 'Jost', sans-serif;
        }

        .se-header {
          text-align: center;
          margin-bottom: 56px;
        }

        .se-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(28px, 5vw, 44px);
          font-weight: 400;
          color: #2C2B28;
          line-height: 1.15;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin: 0 0 10px;
          letter-spacing: -0.01em;
        }

        .se-subtitle {
          font-size: 13px;
          font-weight: 300;
          color: #7A7570;
          letter-spacing: 0.02em;
          margin: 0;
        }

        /* Grid wrapper */
        .se-grid-wrapper {
          max-width: 1100px;
          margin: auto;
          position: relative;
        }

        .se-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto auto;
          gap: 0;
          position: relative;
          justify-items: center;
          row-gap: 40px;
        }

        /* Card base */
        .se-card {
          padding: 28px 28px 32px;
          border-radius: 16px;
          border: 1.5px solid rgba(180, 165, 150, 0.35);
          background: #FDFAF7;
          margin: 12px;
          position: relative;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          max-width: 400px;
          display: flex;
          gap: 12px;
        }

        .se-card.highlighted {
          background: #C9B8A8;
          border-color: transparent;
        }

        /* Badge */
        .se-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 67px;
          height: 67px;
          border-radius: 10px;
          background: rgba(255,255,255,0.55);
          font-size: 16px;
          font-weight: 400;
          color: #4A4540;
          letter-spacing: 0.03em;
          border: 1px solid rgba(255,255,255,0.7);
        }

        .highlighted .se-badge {
          background: rgba(255,255,255,0.45);
          border-color: rgba(255,255,255,0.6);
        }

        .se-card-title {
          font-family: 'Playfair Display', serif;
          font-size: 24px;
          font-weight: 400;
          color: #2C2B28;
          margin: 0 0 10px;
          line-height: 1.25;
          letter-spacing: -0.01em;
        }

        .highlighted .se-card-title {
          color: #272727;
        }

        .se-card-desc {
          font-size: 20px;
          font-weight: 300;
          color: #6B635C;
          line-height: 1.65;
          margin: 0;
        }

        .highlighted .se-card-desc {
          color: #4A423C;
        }

        /* ── Connector lines ── */
        /* Horizontal dashes between col 1 and col 2 (rows 1 & 2) */
        .se-connector-h {
          position: absolute;
          top: 50%;
          left: calc(50% - 12px);
          transform: translateX(-50%) translateY(-50%);
          width: 300px;
          border-top: 2px dashed #B8A898;
          pointer-events: none;
          z-index: -10;
        }

        /* Vertical dashes between row 1 and row 2 */
        .se-connector-v-left {
          position: absolute;
          left: 25%;
          top: 49%;
          transform: translateX(-50%) translateY(-50%);
          height: 70px;
          border-left: 2px dashed #B8A898;
          pointer-events: none;
          z-index: -10;
        }

        .se-connector-v-right {
          position: absolute;
          left: 75%;
          top: 49%;
          transform: translateX(-50%) translateY(-50%);
          height: 70px;
          border-left: 2px dashed #B8A898;
          pointer-events: none;
          z-index: -10;
        }

        /* Fade-in animation */
        .se-section {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .se-section.se-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .se-card {
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s ease;
        }

        .se-section.se-visible .se-card:nth-child(1) { opacity: 1; transform: translateY(0); transition-delay: 0.1s; }
        .se-section.se-visible .se-card:nth-child(2) { opacity: 1; transform: translateY(0); transition-delay: 0.2s; }
        .se-section.se-visible .se-card:nth-child(3) { opacity: 1; transform: translateY(0); transition-delay: 0.3s; }
        .se-section.se-visible .se-card:nth-child(4) { opacity: 1; transform: translateY(0); transition-delay: 0.4s; }

        /* Responsive — single column on mobile */
        @media (max-width: 600px) {
          .se-grid {
            grid-template-columns: 1fr;
          }

          .se-card {
            margin: 0;
          }

          .se-card-title{
            font-size: 18px;
          }
          
          .se-card-desc {
            font-size: 16px;
          }

          .se-connector-h,
          .se-connector-v-left,
          .se-connector-v-right {
            display: none !important;
          }

          /* Vertical dash between each card on mobile */
          .se-card:not(:last-child)::after {
            content: '';
            display: none !important;
            width: 2px;
            height: 20px;
            border-left: 2px dashed #B8A898;
            margin: 12px auto -20px;
          }
        }

        @media (min-width: 601px) and (max-width: 860px) {
          .se-section {
            padding: 56px 20px 64px;
          }
          .se-card {
            padding: 22px 22px 26px;
            margin: 8px;
          }
        }
      `}</style>

      <section className="se-section" ref={sectionRef}>
        <div className="se-header">
          <h2 className="flex justify-center items-center gap-4 text-center text-[20px] italic leading-[1.1] text-[#2C2B28] md:text-[42px] lg:text-[48px]">
            <img className='object-contain' src={starImg} alt="Star" />
            A More Personal Approach to Luxury
            <img className='object-contain' src={starImg} alt="Star" />
          </h2>
          <p className="se-subtitle">
            Thoughtfully structured to deliver precision, consistency, and refinement — every quarter.
          </p>
        </div>

        <div className="se-grid-wrapper">
          {/* Connector lines — rendered over the grid */}
          {/* Horizontal: row 1, between card 1 and 2 */}
          <div
            className="se-connector-h"
            style={{ top: '25%' }}
          />
          {/* Horizontal: row 2, between card 3 and 4 */}
          <div
            className="se-connector-h"
            style={{ top: '75%' }}
          />
          {/* Vertical: left column, between row 1 and row 2 */}
          <div className="se-connector-v-left" />
          {/* Vertical: right column, between row 1 and row 2 */}
          <div className="se-connector-v-right" />

          <div className="se-grid">
            {steps.map((step) => (
              <div
                key={step.number}
                className={`se-card${step.highlighted ? ' highlighted' : ''}`}
              >
                <div className="se-badge">{step.number}</div>
                <div>
                  <h3 className="se-card-title">{step.title}</h3>
                  <p className="se-card-desc">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Process;