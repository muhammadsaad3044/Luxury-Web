import { useEffect, useRef, useState, useCallback } from 'react';

const steps = [
  {
    number: '01',
    title: 'Join the Membership',
    body: 'Select your tier and gain access to a private, personalized fashion experience.',
    bg: '#E9DFD3',
    borderColor: '#CFC0AF',
  },
  {
    number: '02',
    title: 'Define Your Profile',
    body: 'Share your measurements, style preferences, and occasion needs to guide every design decision.',
    bg: '#FFFFFF',
    borderColor: '#D8CCC0',
  },
  {
    number: '03',
    title: 'Design & Craft',
    body: 'Our team curates fabrics, refines silhouettes, and oversees production with meticulous attention to detail.',
    bg: '#FFFFFF',
    borderColor: '#D8CCC0',
  },
  {
    number: '04',
    title: 'Delivered to You',
    body: 'Your quarterly selection arrives prepared, tailored, and ready to wear.',
    bg: '#FFFFFF',
    borderColor: '#D8CCC0',
  },
];

function Process() {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);
  const cardRefs   = useRef([]);
  const [svg, setSvg]   = useState(null);
  const [isMd, setIsMd] = useState(false);

  useEffect(() => {
    const check = () => setIsMd(window.innerWidth >= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const compute = useCallback(() => {
    if (!isMd) { setSvg(null); return; }
    const wrapper = wrapperRef.current;
    const cards   = cardRefs.current;
    if (!wrapper || cards.length < 4 || cards.some((c) => !c)) return;

    const wRect = wrapper.getBoundingClientRect();
    const r = cards.map((c) => {
      const b = c.getBoundingClientRect();
      return {
        left:   b.left   - wRect.left,
        right:  b.right  - wRect.left,
        top:    b.top    - wRect.top,
        bottom: b.bottom - wRect.top,
        midY:   b.top    - wRect.top + b.height / 2,
      };
    });

    // r[0]=card01(top-left)   r[1]=card02(top-right)
    // r[2]=card03(bot-left)   r[3]=card04(bot-right)

    // Gap center X = exactly between col1 right edge and col2 left edge
    const gapCx = (r[0].right + r[1].left) / 2;

    // Row 1 horizontal Y = card01 midY
    const row1Y = r[0].midY;

    // Row 2 horizontal Y = card03 midY  
    const row2Y = r[2].midY;

    setSvg({
      w: wRect.width,
      h: wRect.height,
      // Line 1: horizontal — from card01 RIGHT edge to card02 LEFT edge, at row1Y
      h1: { x1: r[0].right, y1: row1Y, x2: r[1].left, y2: row1Y },
      // Line 2: vertical — at gap center X, from row1Y down to row2Y
      v:  { x1: gapCx, y1: row1Y, x2: gapCx, y2: row2Y },
      // Line 3: horizontal — from card03 RIGHT edge to card04 LEFT edge, at row2Y
      h2: { x1: r[2].right, y1: row2Y, x2: r[3].left, y2: row2Y },
    });
  }, [isMd]);

  useEffect(() => {
    const t = setTimeout(compute, 100);
    window.addEventListener('resize', compute);
    return () => { clearTimeout(t); window.removeEventListener('resize', compute); };
  }, [compute]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) e.target.classList.add('animate-fadeInUp'); },
      { threshold: 0.08 },
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const dash = { stroke: '#C0B0A0', strokeWidth: '1.2', strokeDasharray: '6 5' };

  return (
    <section ref={sectionRef} className="bg-[#F8F5F0] py-4 md:py-8 opacity-0">
      <div className="mx-auto max-w-6xl px-6 md:px-12">

        {/* Header */}
        <h2
          className="text-center italic leading-tight text-[#2C2B28]"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(28px, 3.8vw, 48px)',
            fontWeight: 400,
          }}
        >
          <span style={{ color: '#C4A882' }}>+</span>{' '}
          A Seamless Experience, From Start to Delivery{' '}
          <span style={{ color: '#C4A882' }}>+</span>
        </h2>

        <p
          className="mx-auto mt-3 max-w-lg text-center font-light text-[#6B6B6B]"
          style={{ fontFamily: "'Jost', sans-serif", fontSize: '12px' }}
        >
          Thoughtfully structured to deliver precision, consistency, and refinement — every quarter.
        </p>

        {/* Wrapper with SVG overlay */}
        <div ref={wrapperRef} className="relative mx-auto mt-14" style={{ maxWidth: '1000px' }}>

          {/* shape connector SVG */}
          {svg && isMd && (
            <svg
              className="pointer-events-none absolute left-0 top-0"
              width={svg.w}
              height={svg.h}
              style={{ overflow: 'visible', zIndex: 10 }}
              aria-hidden="true"
            >
              {/* Top horizontal: 01 ←→ 02 */}
              <line
                x1={svg.h1.x1} y1={svg.h1.y1}
                x2={svg.h1.x2} y2={svg.h1.y2}
                {...dash}
              />
              
              {/* Vertical: gap center, row1 → row2 */}
              <line
                x1={svg.h2.x1} y1={svg.h2.y1}
                x2={svg.h2.x2} y2={svg.h2.y2}
                {...dash}
              />
            </svg>
          )}

          {/* Cards grid */}
          <div
            className="relative grid grid-cols-1 gap-x-12 gap-y-5 sm:grid-cols-2"
            style={{ zIndex: 1 }}
          >
            {steps.map((step, i) => (
              <article
                key={step.number}
                ref={(el) => (cardRefs.current[i] = el)}
                className="relative rounded-2xl border p-7 transition-transform duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: step.bg,
                  borderColor: step.borderColor,
                  paddingBottom: i === 0 ? '52px' : '32px',
                  boxShadow: '0 1px 8px rgba(0,0,0,0.04)',
                }}
              >
                <span
                  className="mb-5 inline-flex items-center rounded-lg border border-[#DDD2C6] bg-[#F0E8DF] px-2.5 py-1.5 font-medium leading-none text-[#A88E72]"
                  style={{ fontFamily: "'Jost', sans-serif", fontSize: '11px', letterSpacing: '0.03em' }}
                >
                  {step.number}
                </span>

                <h3
                  className="leading-snug text-[#2C2B28]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(18px, 2vw, 22px)',
                    fontWeight: 400,
                  }}
                >
                  {step.title}
                </h3>

                <p
                  className="mt-3 font-light leading-relaxed text-[#6B6B6B]"
                  style={{ fontFamily: "'Jost', sans-serif", fontSize: '13px' }}
                >
                  {step.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;