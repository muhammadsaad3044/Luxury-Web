import { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const testimonials = [
    {
        name: 'Lee Jeno',
        location: 'A singer from South Korea',
        avatar: 'https://i.pravatar.cc/150?img=12',
        quote:
            'I\'m a big fan of this brand; the designs are elegant and incredibly comfortable to wear. I find myself wearing them frequently.',
    },
    {
        name: 'Sim Jaehyun',
        location: 'A singer from South Korea',
        avatar: 'https://i.pravatar.cc/150?img=15',
        quote: 'I admire this brand because it stays current with the latest trends, and its models exude an exclusive, non-commercialized appeal.',
    },
    {
        name: 'Lee Heeseung',
        location: 'A singer from South Korea',
        avatar: 'https://i.pravatar.cc/150?img=18',
        quote: 'All the materials utilized are exceptionally comfortable and look fantastic when worn.',
    },
    {
        name: 'Lee Jeno',
        location: 'A singer from South Korea',
        avatar: 'https://i.pravatar.cc/150?img=12',
        quote:
            'I\'m a big fan of this brand; the designs are elegant and incredibly comfortable to wear. I find myself wearing them frequently.',
    },
    {
        name: 'Sim Jaehyun',
        location: 'A singer from South Korea',
        avatar: 'https://i.pravatar.cc/150?img=15',
        quote: 'I admire this brand because it stays current with the latest trends, and its models exude an exclusive, non-commercialized appeal.',
    },
];

function Testimonials() {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fadeInUp');
                }
            },
            { threshold: 0.1 },
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={ref} className="bg-[#F8F5F0] py-4 md:py-8 opacity-0">
            <div className="mx-auto max-w-7xl px-6 md:px-12">
                <h2
                    className="text-center italic leading-tight text-[#2C2B28]"
                    style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 'clamp(28px, 3.8vw, 48px)',
                        fontWeight: 400,
                    }}
                >
                    <span style={{ color: '#C4A882' }}>+</span> What Our Members Say{' '}
                    <span style={{ color: '#C4A882' }}>+</span>
                </h2>

                <p
                    className="mx-auto mt-2 max-w-lg text-center font-light text-[#6B6B6B]"
                    style={{ fontFamily: "'Jost', sans-serif", fontSize: '12px' }}
                >
                    Seasonal designs curated with precision, balance, and timeless elegance.
                </p>

                <Swiper
                    modules={[Pagination]}
                    spaceBetween={24}
                    slidesPerView={1}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    breakpoints={{
                        640: { slidesPerView: 2, spaceBetween: 20 },
                        1024: { slidesPerView: 3, spaceBetween: 24 },
                    }}
                    className="mt-10 pb-16"
                >
                    {testimonials.map((item, index) => (
                        <SwiperSlide key={`${item.name}-${index}`}>
                            <article
                                className="flex h-full flex-col items-center rounded-none border border-[#2C2B28] bg-white p-8 text-center transition-transform duration-300 hover:-translate-y-1"
                                style={{
                                    minHeight: '380px',
                                }}
                            >
                                <img
                                    src={item.avatar}
                                    alt={item.name}
                                    className="mb-5 h-24 w-24 rounded-full object-cover"
                                />

                                <h3
                                    className="text-[15px] font-medium text-[#2C2B28]"
                                    style={{ fontFamily: "'Jost', sans-serif" }}
                                >
                                    {item.name}
                                </h3>

                                <p
                                    className="mt-1 text-[12px] font-light text-[#6B6B6B]"
                                    style={{ fontFamily: "'Jost', sans-serif" }}
                                >
                                    {item.location}
                                </p>

                                <div className="mt-5 flex items-center justify-center gap-1">
                                    {[...Array(5)].map((_, starIdx) => (
                                        <Star key={starIdx} size={16} fill="#FFC107" className="text-yellow-500" strokeWidth={0} />
                                    ))}
                                </div>

                                <p
                                    className="mt-6 text-[13px] leading-relaxed text-[#2C2B28]"
                                    style={{ fontFamily: "'Jost', sans-serif" }}
                                >
                                    "{item.quote}"
                                </p>
                            </article>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <style jsx global>{`
                .swiper {
                    padding-bottom: 40px;
                }

                .swiper-pagination {
                    bottom: 0;
                    display: flex;
                    justify-content: center;
                    gap: 8px;
                }

                .swiper-pagination-bullet {
                    width: 8px;
                    height: 8px;
                    background-color: #d4af37;
                    opacity: 0.3;
                    margin: 0;
                    cursor: pointer;
                    border-radius: 50%;
                    transition: all 0.3s ease;
                }

                .swiper-pagination-bullet-active {
                    background-color: #d4af37;
                    opacity: 1;
                    width: 24px;
                    border-radius: 4px;
                }

                .swiper-button-next,
                .swiper-button-prev {
                    color: #2c2b28;
                    background: #f5f0eb;
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    top: 50%;
                    margin-top: -22px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                }

                .swiper-button-next:hover,
                .swiper-button-prev:hover {
                    background: #e5ddd5;
                    color: #1e1e1c;
                }

                .swiper-button-next::after,
                .swiper-button-prev::after {
                    font-size: 18px;
                    font-weight: bold;
                }
            `}</style>
        </section>
    );
}

export default Testimonials;
