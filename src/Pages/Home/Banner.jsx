

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css';
// import 'swiper/css';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import { Fade } from 'react-awesome-reveal';

// const Banner = () => {
//     return (
//        <Fade direction="" delay={100}>
//          <div className="swiper-container pt-36"  style={{ margin: '0 50px', zIndex: 10 }}>
//             <Swiper
//                 modules={[Navigation, Pagination, Scrollbar, A11y]}
//                 spaceBetween={50}
//                 slidesPerView={1}
//                 navigation
//                 pagination={{ clickable: true }}
//                 scrollbar={{ draggable: true }}
//             >
//                 <SwiperSlide>
//                     <div style={{
//                         backgroundImage: `url(https://as1.ftcdn.net/v2/jpg/02/52/57/54/1000_F_252575412_fdLDrADIPJb70OatoOwkM2K3v6DMolOJ.jpg)`,
//                         backgroundRepeat: 'no-repeat',
//                         backgroundSize: 'cover',
//                         backgroundPosition: 'center',
//                         borderRadius: '20px',
//                         zIndex: 10
//                     }} className="mx-auto lg:h-[600px]">
                      
//                        <h2 className='text-xl lg:text-6xl font-bold text-left py-48 pl-40 text-blue-950'>Get Out,<br /><span>Get Active and</span><br />Explore....</h2>
                    
//                     </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <div style={{
//                         backgroundImage: `url(https://img.freepik.com/premium-photo/woman-tourist-jumping-with-happy-it-has-reached-peak-mountain-see-beautiful-natural-landscape-sea-from-view-point-ko-wua-ta-lap-island-mu-ko-ang-thong-surat-thani-thailand_536080-999.jpg?w=900)`,
//                         backgroundRepeat: 'no-repeat',
//                         backgroundSize: 'cover',
//                         backgroundPosition: 'center',
//                         borderRadius: '20px',
//                         zIndex: 10
//                     }} className="h-[600px]">
//                         <h2 className='text-6xl font-bold text-left py-48 pl-40 text-blue-950'>Get Out,<br /> Get Active and <br />Explore.... </h2>
//                     </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <div style={{
//                         backgroundImage: `url(https://img.freepik.com/premium-photo/tourist-taking-photo-sunrise-mountains-sea-city-la-ceiba-honduras_297446-685.jpg?w=900)`,
//                         backgroundRepeat: 'no-repeat',
//                         backgroundSize: 'cover',
//                         backgroundPosition: 'center',
//                         borderRadius: '20px',
//                         zIndex: 10
//                     }} className="h-[600px]">
//                         <h2 className='text-6xl font-bold text-left py-48 pl-40 text-blue-950'>Get Out,<br /> Get Active and <br />Explore.... </h2>
//                     </div>
//                 </SwiperSlide>
//             </Swiper>
//         </div>
//        </Fade>
//     );
// };

// export default Banner;



import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Fade } from 'react-awesome-reveal';
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
    return (
        <Fade direction="" delay={100}>
            <div className="swiper-container pt-36" style={{ margin: '0 50px', zIndex: 10 }}>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                >
                    <SwiperSlide>
                        <div style={{
                            backgroundImage: `url(https://as1.ftcdn.net/v2/jpg/02/52/57/54/1000_F_252575412_fdLDrADIPJb70OatoOwkM2K3v6DMolOJ.jpg)`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            borderRadius: '20px',
                            zIndex: 10
                        }} className="mx-auto lg:h-[600px]">
                            <h2 className='text-xl lg:text-6xl font-bold text-left py-48 pl-40 text-blue-950'>
                                <Typewriter
                                    words={['Get Out,', 'Get Active and', 'Explore....']}
                                    loop={false}
                                    cursor
                                    cursorStyle='|'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{
                            backgroundImage: `url(https://img.freepik.com/premium-photo/woman-tourist-jumping-with-happy-it-has-reached-peak-mountain-see-beautiful-natural-landscape-sea-from-view-point-ko-wua-ta-lap-island-mu-ko-ang-thong-surat-thani-thailand_536080-999.jpg?w=900)`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            borderRadius: '20px',
                            zIndex: 10
                        }} className="h-[600px]">
                            <h2 className='text-6xl font-bold text-left py-48 pl-40 text-blue-950'>
                                <Typewriter
                                    words={['Get Out,', 'Get Active and', 'Explore....']}
                                    loop={false}
                                    cursor
                                    cursorStyle='|'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{
                            backgroundImage: `url(https://img.freepik.com/premium-photo/tourist-taking-photo-sunrise-mountains-sea-city-la-ceiba-honduras_297446-685.jpg?w=900)`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            borderRadius: '20px',
                            zIndex: 10
                        }} className="h-[600px]">
                            <h2 className='text-6xl font-bold text-left py-48 pl-40 text-blue-950'>
                                <Typewriter
                                    words={['Get Out,', 'Get Active and', 'Explore....']}
                                    loop={false}
                                    cursor
                                    cursorStyle='|'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </h2>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </Fade>
    );
};

export default Banner;
