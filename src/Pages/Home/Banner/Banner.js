import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Pagination, Navigation } from "swiper";
import './Banner.css'
import 'swiper/css';


const Banner = () => {
    return (
        <div>
            <div >
                <Swiper

                    style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                    }}
                    speed={600}
                    parallax={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Parallax, Pagination, Navigation]}
                    className="mySwiper h-full top-0"
                >
                    <div
                        slot="container-start"
                        className="parallax-bg "
                        style={{
                            "backgroundImage":
                                "url(https://i.postimg.cc/J468Bhz9/ancient-destroyed-building-with-lot-ruins-inside-181624-6070.jpg)",
                        }}
                        data-swiper-parallax="-15%"
                    ></div>
                    <SwiperSlide>
                        <div className="text" data-swiper-parallax="-100">
                            <div className='lg:flex md:flex items-center justify-center'>
                                <div className='w-full text-start lg:px-8 lg:pl-14'>
                                    <p className='lg:text-3xl text-lg md:text-xl uppercase text-yellow-500 font-bold'>Reduce <span className=''>Stress</span> </p>
                                    <p className='lg:text-6xl text-xl md:text-4xl my-5 uppercase'>It's not stress <br /> <span className='bg-yellow-600 pr-24 px-1 rounded-lg' style={{
                                        clipPath: 'polygon(0% 0%, 99% 0%, 80% 100%, 79% 100%, 0% 100%)'
                                    }}>that kills us</span><br />it's our reaction to it.</p>
                                </div>
                                <div className="card hidden lg:block  w-full p-5 mx-auto lg:mt-24">
                                    <img className='pt-6 lg:h-full mt-12 md:h-72 h-60' src="https://i.postimg.cc/sXGsxM0c/pngegg.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="text" data-swiper-parallax="-100">
                            <div className='lg:flex md:flex items-center justify-center'>
                                <div className='w-full text-start lg:px-8 lg:pl-14'>
                                    <p className='lg:text-3xl text-lg md:text-xl uppercase text-yellow-500 font-bold'>Psychology Is <span className=''>Action</span> </p>
                                    <p className='lg:text-6xl text-xl md:text-4xl my-5 uppercase'>Psychology Is Action<br /> <span className='bg-yellow-600 pr-24 px-1 rounded-lg' style={{
                                        clipPath: 'polygon(0% 0%, 99% 0%, 80% 100%, 79% 100%, 0% 100%)'
                                    }}>Not Thinking</span><br />About Oneself.</p>
                                </div>
                                <div className="card hidden lg:block  w-full p-5 mx-auto lg:mt-24">
                                    <img className='pt-6 mt-12 md:h-72 h-60' style={{ height: '620px', paddingBottom: '50px' }} src="https://i.postimg.cc/qRVr1C8F/Pngtree-depression-bad-thoughts-stress-concept-8817411.png" alt="" />
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="text" data-swiper-parallax="-100">
                            <div className='lg:flex md:flex items-center justify-center'>
                                <div className='w-full text-start lg:px-8 lg:pl-14'>
                                    <p className='lg:text-3xl text-lg md:text-xl uppercase'><span className='text-yellow-500'>Anxiety</span> </p>
                                    <p className='lg:text-6xl text-xl md:text-4xl my-5 uppercase'> does not empty tomorrow <br /> <span className='bg-yellow-600 pr-24 px-1 rounded-lg' style={{
                                        clipPath: 'polygon(0% 0%, 99% 0%, 80% 100%, 79% 100%, 0% 100%)'
                                    }}>its sorrows,</span><br /> today of its strength.</p>
                                </div>
                                <div className="card hidden lg:block w-full p-5 mx-auto lg:mt-24">
                                    <img className='pt-6 lg:h-full mt-12 md:h-72 h-60' style={{ height: '620px', paddingBottom: '50px' }} src="https://i.postimg.cc/GLyv780x/pngwing-com-2.png" alt="" />
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Banner;