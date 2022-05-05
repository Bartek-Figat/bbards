import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import AuthImage from '../../images/photo-1591818250210-48fba09a2305.png';
import Image from '../../images/photo.png';
import ImageOne from '../../images/p1.png';

function Slider() {
  return (
    <div className="bg-white">
      <div className="mx-auto py-5 max-w-screen-2xl px-3 sm:px-10">
        <div className="flex w-full">
          <div className="flex-shrink-0 xl:pr-6 lg:block w-full">
            <Swiper
              // install Swiper modules
              className="h-[42rem]"
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              navigation
              scrollbar={{ draggable: true }}
              autoplay={{ delay: 5000 }}
              pagination={{ clickable: true }}
            >
              <SwiperSlide>
                <img
                  className="object-cover object-center w-full h-full"
                  src={AuthImage}
                  width="760"
                  height="1024"
                  alt="Authentication"
                />
                <div className="absolute top-0 left-10 z-10 p-r-16 flex-col flex w-full h-full place-items-start justify-center">
                  <div className="pl-4 pr-12 sm:pl-10 sm:pr-16 w-10/12 lg:w-8/12 xl:w-7/12">
                    <h1 className="mb-2 font-serif text-xl sm:text-lg md:text-2xl line-clamp-1 md:line-clamp-none lg:line-clamp-none lg:text-3xl font-bold text-gray-100">
                      Quality Freshness Guaranteed!
                    </h1>
                    <p className="text-base leading-6 text-gray-100 font-sans line-clamp-1 md:line-clamp-none lg:line-clamp-none">
                      Intrinsicly fashion performance based products rather than accurate
                      benefits...
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="object-cover object-center w-full h-full"
                  src={Image}
                  width="760"
                  height="1024"
                  alt="Authentication"
                />
                <div className="absolute top-0 left-10 z-10 p-r-16 flex-col flex w-full h-full place-items-start justify-center">
                  <div className="pl-4 pr-12 sm:pl-10 sm:pr-16 w-10/12 lg:w-8/12 xl:w-7/12">
                    <h1 className="mb-2 font-serif text-xl sm:text-lg md:text-2xl line-clamp-1 md:line-clamp-none lg:line-clamp-none lg:text-3xl font-bold text-gray-100">
                      Quality Freshness Guaranteed!
                    </h1>
                    <p className="text-base leading-6 text-gray-100 font-sans line-clamp-1 md:line-clamp-none lg:line-clamp-none">
                      Intrinsicly fashion performance based products rather than accurate
                      benefits...
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="object-cover object-center w-full h-full"
                  src={ImageOne}
                  width="760"
                  height="1024"
                  alt="Authentication"
                />
                <div className="absolute top-0 left-10 z-10 p-r-16 flex-col flex w-full h-full place-items-start justify-center">
                  <div className="pl-4 pr-12 sm:pl-10 sm:pr-16 w-10/12 lg:w-8/12 xl:w-7/12">
                    <h1 className="mb-2 font-serif text-xl sm:text-lg md:text-2xl line-clamp-1 md:line-clamp-none lg:line-clamp-none lg:text-3xl font-bold text-gray-100">
                      Quality Freshness Guaranteed!
                    </h1>
                    <p className="text-base leading-6 text-gray-100 font-sans line-clamp-1 md:line-clamp-none lg:line-clamp-none">
                      Intrinsicly fashion performance based products rather than accurate
                      benefits...
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="object-cover object-center w-full h-full"
                  src={AuthImage}
                  width="760"
                  height="1024"
                  alt="Authentication"
                />
                <div className="absolute top-0 left-10 z-10 p-r-16 flex-col flex w-full h-full place-items-start justify-center">
                  <div className="pl-4 pr-12 sm:pl-10 sm:pr-16 w-10/12 lg:w-8/12 xl:w-7/12">
                    <h1 className="mb-2 font-serif text-xl sm:text-lg md:text-2xl line-clamp-1 md:line-clamp-none lg:line-clamp-none lg:text-3xl font-bold text-gray-100">
                      Quality Freshness Guaranteed!
                    </h1>
                    <p className="text-base leading-6 text-gray-100 font-sans line-clamp-1 md:line-clamp-none lg:line-clamp-none">
                      Intrinsicly fashion performance based products rather than accurate
                      benefits...
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
