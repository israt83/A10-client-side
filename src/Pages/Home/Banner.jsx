


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules'; // Import Autoplay
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Fade } from 'react-awesome-reveal';
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
    return (
        <Fade direction="" delay={100}>
            <div className="swiper-container pt-24 px-4 md:px-8 lg:px-16 xl:px-10" style={{ zIndex: 10 }}>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]} // Add Autoplay module
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }} // Set autoplay delay and interaction behavior
                >
                    {[
                        {
                            image: "https://img.freepik.com/premium-photo/tourism-day-suitcase-collages-design_23-2151721785.jpg?w=900",
                        },
                        {
                            image: "https://img.freepik.com/premium-photo/woman-tourist-jumping-with-happy-it-has-reached-peak-mountain-see-beautiful-natural-landscape-sea-from-view-point-ko-wua-ta-lap-island-mu-ko-ang-thong-surat-thani-thailand_536080-999.jpg?w=900",
                        },
                        {
                            image: "https://img.freepik.com/premium-photo/backpack-asian-man-mountain-see-view-panorama-beautiful-nature-landscape-sea-adventure-vacation-travel-leisure-asia-mu-ko-ang-thong-island-national-park-background-thailand_536080-1002.jpg?w=900",
                        },
                        {
                            image: "https://ec.europa.eu/eurostat/documents/747990/17157919/Davide_Angelini_AdobeStock_437556662_RV.jpg/ecb23e13-0be4-354d-f4a8-25c0ff17d413?t=1689325477418",
                        },
                        {
                            image: "https://img.freepik.com/premium-photo/tourist-taking-photo-sunrise-mountains-sea-city-la-ceiba-honduras_297446-685.jpg?w=900",
                        },
                    ].map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div
                                style={{
                                    backgroundImage: `url(${slide.image})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    borderRadius: '20px',
                                }}
                                className="mx-auto h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] flex items-center"
                            >
                                <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-center lg:text-left px-10 md:px-8 lg:px-16 mb-36 lg:mb-80 text-blue-950">
                                    <Typewriter
                                        words={['Get Out,', 'Get Active and', 'Explore....']}
                                        loop={false}
                                        cursor
                                        cursorStyle="|"
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                </h2>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </Fade>
    );
};

export default Banner;
