import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import AuthImage from '../../images/photo-1591818250210-48fba09a2305.png';

function SliderHeader() {
  return (
    <div className="bg-gray-50 lg:py-16 py-10 mx-auto max-w-screen-2xl px-3 sm:px-10 mt-12">
      <div className="mb-10 flex justify-center">
        <div className="text-center w-full lg:w-2/5">
          <h2 className="text-xl lg:text-2xl mb-2 font-serif font-semibold">
            Popular Products for Daily Shopping
          </h2>
          <p className="text-base font-sans text-gray-600 leading-6">
            See all our popular products in this week. You can choose your daily needs products from
            this list and get some special offer with free shipping.
          </p>
        </div>
      </div>
      <div className="flex">
        <div className="w-full">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3">
            {/* new posts */}
            <div className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative">
              <div className="relative flex justify-center w-full cursor-pointer">
                <span className="">
                  <div className="flex overflow-hidden max-w-[230px] mx-auto transition duration-200 ease-in-out transform group-hover:scale-105 relative">
                    <img
                      className="object-cover object-center w-full h-full"
                      src={AuthImage}
                      width="760"
                      height="1024"
                      alt="Authentication"
                    />
                  </div>
                </span>
              </div>
              <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
                <div className="relative mb-1">
                  <span className="text-gray-400 font-medium text-xs d-block mb-1">1lb</span>
                  <h2 className="text-heading truncate mb-0 block text-sm font-medium text-gray-600">
                    <span className="line-clamp-2">Rainbow Chard</span>
                  </h2>
                </div>
                <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
                  <div className="font-serif product-price font-bold">
                    <span className="inline-block text-lg font-semibold text-gray-800">$12</span>
                  </div>
                  <button
                    aria-label="cart"
                    className="h-9 w-9 flex items-center justify-center border border-gray-200 rounded text-emerald-500 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all"
                  >
                    {' '}
                    <span className="text-xl">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M460 160h-88v-12A116.13 116.13 0 00258.89 32h-5.78A116.13 116.13 0 00140 148v12H52a4 4 0 00-4 4v300a16 16 0 0016 16h384a16 16 0 0016-16V164a4 4 0 00-4-4zm-280-11c0-41.84 33.41-76.56 75.25-77A76.08 76.08 0 01332 148v12H180zm156 187h-64v64h-32v-64h-64v-32h64v-64h32v64h64z"></path>
                      </svg>
                    </span>{' '}
                  </button>
                </div>
              </div>
            </div>
            <div className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative">
              <div className="relative flex justify-center w-full cursor-pointer">
                <span className=""></span>
              </div>
              <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
                <div className="relative mb-1">
                  <span className="text-gray-400 font-medium text-xs d-block mb-1">1lb</span>
                  <h2 className="text-heading truncate mb-0 block text-sm font-medium text-gray-600">
                    <span className="line-clamp-2">Rainbow Chard</span>
                  </h2>
                </div>
                <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
                  <div className="font-serif product-price font-bold">
                    <span className="inline-block text-lg font-semibold text-gray-800">$12</span>
                  </div>
                  <button
                    aria-label="cart"
                    className="h-9 w-9 flex items-center justify-center border border-gray-200 rounded text-emerald-500 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all"
                  >
                    {' '}
                    <span className="text-xl">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M460 160h-88v-12A116.13 116.13 0 00258.89 32h-5.78A116.13 116.13 0 00140 148v12H52a4 4 0 00-4 4v300a16 16 0 0016 16h384a16 16 0 0016-16V164a4 4 0 00-4-4zm-280-11c0-41.84 33.41-76.56 75.25-77A76.08 76.08 0 01332 148v12H180zm156 187h-64v64h-32v-64h-64v-32h64v-64h32v64h64z"></path>
                      </svg>
                    </span>{' '}
                  </button>
                </div>
              </div>
            </div>
            <div className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative">
              <div className="relative flex justify-center w-full cursor-pointer">
                <span className=""></span>
              </div>
              <div calssName="w-full px-3 lg:px-4 pb-4 overflow-hidden">
                <div calssName="relative mb-1">
                  <span calssName="text-gray-400 font-medium text-xs d-block mb-1">1lb</span>
                  <h2 calssName="text-heading truncate mb-0 block text-sm font-medium text-gray-600">
                    <span calssName="line-clamp-2">Rainbow Chard</span>
                  </h2>
                </div>
                <div calssName="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
                  <div calssName="font-serif product-price font-bold">
                    <span calssName="inline-block text-lg font-semibold text-gray-800">$12</span>
                  </div>
                  <button
                    aria-label="cart"
                    calssName="h-9 w-9 flex items-center justify-center border border-gray-200 rounded text-emerald-500 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all"
                  >
                    {' '}
                    <span calssName="text-xl">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M460 160h-88v-12A116.13 116.13 0 00258.89 32h-5.78A116.13 116.13 0 00140 148v12H52a4 4 0 00-4 4v300a16 16 0 0016 16h384a16 16 0 0016-16V164a4 4 0 00-4-4zm-280-11c0-41.84 33.41-76.56 75.25-77A76.08 76.08 0 01332 148v12H180zm156 187h-64v64h-32v-64h-64v-32h64v-64h32v64h64z"></path>
                      </svg>
                    </span>{' '}
                  </button>
                </div>
              </div>
            </div>
            <div className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative">
              <div className="relative flex justify-center w-full cursor-pointer">
                <span className=""></span>
              </div>
              <div calssName="w-full px-3 lg:px-4 pb-4 overflow-hidden">
                <div calssName="relative mb-1">
                  <span calssName="text-gray-400 font-medium text-xs d-block mb-1">1lb</span>
                  <h2 calssName="text-heading truncate mb-0 block text-sm font-medium text-gray-600">
                    <span calssName="line-clamp-2">Rainbow Chard</span>
                  </h2>
                </div>
                <div calssName="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
                  <div calssName="font-serif product-price font-bold">
                    <span calssName="inline-block text-lg font-semibold text-gray-800">$12</span>
                  </div>
                  <button
                    aria-label="cart"
                    calssName="h-9 w-9 flex items-center justify-center border border-gray-200 rounded text-emerald-500 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all"
                  >
                    {' '}
                    <span calssName="text-xl">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M460 160h-88v-12A116.13 116.13 0 00258.89 32h-5.78A116.13 116.13 0 00140 148v12H52a4 4 0 00-4 4v300a16 16 0 0016 16h384a16 16 0 0016-16V164a4 4 0 00-4-4zm-280-11c0-41.84 33.41-76.56 75.25-77A76.08 76.08 0 01332 148v12H180zm156 187h-64v64h-32v-64h-64v-32h64v-64h32v64h64z"></path>
                      </svg>
                    </span>{' '}
                  </button>
                </div>
              </div>
            </div>
            <div className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative">
              <div className="relative flex justify-center w-full cursor-pointer">
                <span className=""></span>
              </div>
              <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
                <div className="relative mb-1">
                  <span className="text-gray-400 font-medium text-xs d-block mb-1">1lb</span>
                  <h2 className="text-heading truncate mb-0 block text-sm font-medium text-gray-600">
                    <span className="line-clamp-2">Rainbow Chard</span>
                  </h2>
                </div>
                <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
                  <div className="font-serif product-price font-bold">
                    <span className="inline-block text-lg font-semibold text-gray-800">$12</span>
                  </div>
                  <button
                    aria-label="cart"
                    className="h-9 w-9 flex items-center justify-center border border-gray-200 rounded text-emerald-500 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all"
                  >
                    {' '}
                    <span className="text-xl">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M460 160h-88v-12A116.13 116.13 0 00258.89 32h-5.78A116.13 116.13 0 00140 148v12H52a4 4 0 00-4 4v300a16 16 0 0016 16h384a16 16 0 0016-16V164a4 4 0 00-4-4zm-280-11c0-41.84 33.41-76.56 75.25-77A76.08 76.08 0 01332 148v12H180zm156 187h-64v64h-32v-64h-64v-32h64v-64h32v64h64z"></path>
                      </svg>
                    </span>{' '}
                  </button>
                </div>
              </div>
            </div>
            <div className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative">
              <div className="relative flex justify-center w-full cursor-pointer">
                <span className=""></span>
              </div>
              <div calssName="w-full px-3 lg:px-4 pb-4 overflow-hidden">
                <div calssName="relative mb-1">
                  <span calssName="text-gray-400 font-medium text-xs d-block mb-1">1lb</span>
                  <h2 calssName="text-heading truncate mb-0 block text-sm font-medium text-gray-600">
                    <span calssName="line-clamp-2">Rainbow Chard</span>
                  </h2>
                </div>
                <div calssName="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
                  <div calssName="font-serif product-price font-bold">
                    <span calssName="inline-block text-lg font-semibold text-gray-800">$12</span>
                  </div>
                  <button
                    aria-label="cart"
                    calssName="h-9 w-9 flex items-center justify-center border border-gray-200 rounded text-emerald-500 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all"
                  >
                    {' '}
                    <span calssName="text-xl">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M460 160h-88v-12A116.13 116.13 0 00258.89 32h-5.78A116.13 116.13 0 00140 148v12H52a4 4 0 00-4 4v300a16 16 0 0016 16h384a16 16 0 0016-16V164a4 4 0 00-4-4zm-280-11c0-41.84 33.41-76.56 75.25-77A76.08 76.08 0 01332 148v12H180zm156 187h-64v64h-32v-64h-64v-32h64v-64h32v64h64z"></path>
                      </svg>
                    </span>{' '}
                  </button>
                </div>
              </div>
            </div>
            <div className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative">
              <div className="relative flex justify-center w-full cursor-pointer">
                <span className=""></span>
              </div>
              <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
                <div className="relative mb-1">
                  <span className="text-gray-400 font-medium text-xs d-block mb-1">1lb</span>
                  <h2 className="text-heading truncate mb-0 block text-sm font-medium text-gray-600">
                    <span className="line-clamp-2">Rainbow Chard</span>
                  </h2>
                </div>
                <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
                  <div className="font-serif product-price font-bold">
                    <span className="inline-block text-lg font-semibold text-gray-800">$12</span>
                  </div>
                  <button
                    aria-label="cart"
                    className="h-9 w-9 flex items-center justify-center border border-gray-200 rounded text-emerald-500 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all"
                  >
                    {' '}
                    <span className="text-xl">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M460 160h-88v-12A116.13 116.13 0 00258.89 32h-5.78A116.13 116.13 0 00140 148v12H52a4 4 0 00-4 4v300a16 16 0 0016 16h384a16 16 0 0016-16V164a4 4 0 00-4-4zm-280-11c0-41.84 33.41-76.56 75.25-77A76.08 76.08 0 01332 148v12H180zm156 187h-64v64h-32v-64h-64v-32h64v-64h32v64h64z"></path>
                      </svg>
                    </span>{' '}
                  </button>
                </div>
              </div>
            </div>
            <div className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative">
              <div className="relative flex justify-center w-full cursor-pointer">
                <span className=""></span>
              </div>
              <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
                <div className="relative mb-1">
                  <span className="text-gray-400 font-medium text-xs d-block mb-1">1lb</span>
                  <h2 className="text-heading truncate mb-0 block text-sm font-medium text-gray-600">
                    <span className="line-clamp-2">Rainbow Chard</span>
                  </h2>
                </div>
                <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
                  <div className="font-serif product-price font-bold">
                    <span className="inline-block text-lg font-semibold text-gray-800">$12</span>
                  </div>
                  <button
                    aria-label="cart"
                    className="h-9 w-9 flex items-center justify-center border border-gray-200 rounded text-emerald-500 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all"
                  >
                    {' '}
                    <span className="text-xl">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M460 160h-88v-12A116.13 116.13 0 00258.89 32h-5.78A116.13 116.13 0 00140 148v12H52a4 4 0 00-4 4v300a16 16 0 0016 16h384a16 16 0 0016-16V164a4 4 0 00-4-4zm-280-11c0-41.84 33.41-76.56 75.25-77A76.08 76.08 0 01332 148v12H180zm156 187h-64v64h-32v-64h-64v-32h64v-64h32v64h64z"></path>
                      </svg>
                    </span>{' '}
                  </button>
                </div>
              </div>
            </div>
            <div className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative">
              <div className="relative flex justify-center w-full cursor-pointer">
                <span className=""></span>
              </div>
              <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
                <div className="relative mb-1">
                  <span className="text-gray-400 font-medium text-xs d-block mb-1">1lb</span>
                  <h2 className="text-heading truncate mb-0 block text-sm font-medium text-gray-600">
                    <span className="line-clamp-2">Rainbow Chard</span>
                  </h2>
                </div>
                <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
                  <div className="font-serif product-price font-bold">
                    <span className="inline-block text-lg font-semibold text-gray-800">$12</span>
                  </div>
                  <button
                    aria-label="cart"
                    className="h-9 w-9 flex items-center justify-center border border-gray-200 rounded text-emerald-500 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all"
                  >
                    {' '}
                    <span className="text-xl">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M460 160h-88v-12A116.13 116.13 0 00258.89 32h-5.78A116.13 116.13 0 00140 148v12H52a4 4 0 00-4 4v300a16 16 0 0016 16h384a16 16 0 0016-16V164a4 4 0 00-4-4zm-280-11c0-41.84 33.41-76.56 75.25-77A76.08 76.08 0 01332 148v12H180zm156 187h-64v64h-32v-64h-64v-32h64v-64h32v64h64z"></path>
                      </svg>
                    </span>{' '}
                  </button>
                </div>
              </div>
            </div>
            <div className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative">
              <div className="relative flex justify-center w-full cursor-pointer">
                <span className=""></span>
              </div>
              <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
                <div className="relative mb-1">
                  <span className="text-gray-400 font-medium text-xs d-block mb-1">1lb</span>
                  <h2 className="text-heading truncate mb-0 block text-sm font-medium text-gray-600">
                    <span className="line-clamp-2">Rainbow Chard</span>
                  </h2>
                </div>
                <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
                  <div className="font-serif product-price font-bold">
                    <span className="inline-block text-lg font-semibold text-gray-800">$12</span>
                  </div>
                  <button
                    aria-label="cart"
                    className="h-9 w-9 flex items-center justify-center border border-gray-200 rounded text-emerald-500 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all"
                  >
                    {' '}
                    <span className="text-xl">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M460 160h-88v-12A116.13 116.13 0 00258.89 32h-5.78A116.13 116.13 0 00140 148v12H52a4 4 0 00-4 4v300a16 16 0 0016 16h384a16 16 0 0016-16V164a4 4 0 00-4-4zm-280-11c0-41.84 33.41-76.56 75.25-77A76.08 76.08 0 01332 148v12H180zm156 187h-64v64h-32v-64h-64v-32h64v-64h32v64h64z"></path>
                      </svg>
                    </span>{' '}
                  </button>
                </div>
              </div>
            </div>
            <div className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative">
              <div className="relative flex justify-center w-full cursor-pointer">
                <span className=""></span>
              </div>
              <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
                <div className="relative mb-1">
                  <span className="text-gray-400 font-medium text-xs d-block mb-1">1lb</span>
                  <h2 className="text-heading truncate mb-0 block text-sm font-medium text-gray-600">
                    <span className="line-clamp-2">Rainbow Chard</span>
                  </h2>
                </div>
                <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
                  <div className="font-serif product-price font-bold">
                    <span className="inline-block text-lg font-semibold text-gray-800">$12</span>
                  </div>
                  <button
                    aria-label="cart"
                    className="h-9 w-9 flex items-center justify-center border border-gray-200 rounded text-emerald-500 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all"
                  >
                    {' '}
                    <span className="text-xl">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M460 160h-88v-12A116.13 116.13 0 00258.89 32h-5.78A116.13 116.13 0 00140 148v12H52a4 4 0 00-4 4v300a16 16 0 0016 16h384a16 16 0 0016-16V164a4 4 0 00-4-4zm-280-11c0-41.84 33.41-76.56 75.25-77A76.08 76.08 0 01332 148v12H180zm156 187h-64v64h-32v-64h-64v-32h64v-64h32v64h64z"></path>
                      </svg>
                    </span>{' '}
                  </button>
                </div>
              </div>
            </div>
            <div className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative">
              <div className="relative flex justify-center w-full cursor-pointer">
                <span className=""></span>
              </div>
              <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
                <div className="relative mb-1">
                  <span className="text-gray-400 font-medium text-xs d-block mb-1">1lb</span>
                  <h2 className="text-heading truncate mb-0 block text-sm font-medium text-gray-600">
                    <span className="line-clamp-2">Rainbow Chard</span>
                  </h2>
                </div>
                <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
                  <div className="font-serif product-price font-bold">
                    <span className="inline-block text-lg font-semibold text-gray-800">$12</span>
                  </div>
                  <button
                    aria-label="cart"
                    className="h-9 w-9 flex items-center justify-center border border-gray-200 rounded text-emerald-500 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all"
                  >
                    {' '}
                    <span className="text-xl">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M460 160h-88v-12A116.13 116.13 0 00258.89 32h-5.78A116.13 116.13 0 00140 148v12H52a4 4 0 00-4 4v300a16 16 0 0016 16h384a16 16 0 0016-16V164a4 4 0 00-4-4zm-280-11c0-41.84 33.41-76.56 75.25-77A76.08 76.08 0 01332 148v12H180zm156 187h-64v64h-32v-64h-64v-32h64v-64h32v64h64z"></path>
                      </svg>
                    </span>{' '}
                  </button>
                </div>
              </div>
            </div>
            <div className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative">
              <div className="relative flex justify-center w-full cursor-pointer">
                <span className=""></span>
              </div>
              <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
                <div className="relative mb-1">
                  <span className="text-gray-400 font-medium text-xs d-block mb-1">1lb</span>
                  <h2 className="text-heading truncate mb-0 block text-sm font-medium text-gray-600">
                    <span className="line-clamp-2">Rainbow Chard</span>
                  </h2>
                </div>
                <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
                  <div className="font-serif product-price font-bold">
                    <span className="inline-block text-lg font-semibold text-gray-800">$12</span>
                  </div>
                  <button
                    aria-label="cart"
                    className="h-9 w-9 flex items-center justify-center border border-gray-200 rounded text-emerald-500 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all"
                  >
                    {' '}
                    <span className="text-xl">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M460 160h-88v-12A116.13 116.13 0 00258.89 32h-5.78A116.13 116.13 0 00140 148v12H52a4 4 0 00-4 4v300a16 16 0 0016 16h384a16 16 0 0016-16V164a4 4 0 00-4-4zm-280-11c0-41.84 33.41-76.56 75.25-77A76.08 76.08 0 01332 148v12H180zm156 187h-64v64h-32v-64h-64v-32h64v-64h32v64h64z"></path>
                      </svg>
                    </span>{' '}
                  </button>
                </div>
              </div>
            </div>
            <div className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative">
              <div className="relative flex justify-center w-full cursor-pointer">
                <span className=""></span>
              </div>
              <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
                <div className="relative mb-1">
                  <span className="text-gray-400 font-medium text-xs d-block mb-1">1lb</span>
                  <h2 className="text-heading truncate mb-0 block text-sm font-medium text-gray-600">
                    <span className="line-clamp-2">Rainbow Chard</span>
                  </h2>
                </div>
                <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
                  <div className="font-serif product-price font-bold">
                    <span className="inline-block text-lg font-semibold text-gray-800">$12</span>
                  </div>
                  <button
                    aria-label="cart"
                    className="h-9 w-9 flex items-center justify-center border border-gray-200 rounded text-emerald-500 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all"
                  >
                    {' '}
                    <span className="text-xl">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M460 160h-88v-12A116.13 116.13 0 00258.89 32h-5.78A116.13 116.13 0 00140 148v12H52a4 4 0 00-4 4v300a16 16 0 0016 16h384a16 16 0 0016-16V164a4 4 0 00-4-4zm-280-11c0-41.84 33.41-76.56 75.25-77A76.08 76.08 0 01332 148v12H180zm156 187h-64v64h-32v-64h-64v-32h64v-64h32v64h64z"></path>
                      </svg>
                    </span>{' '}
                  </button>
                </div>
              </div>
            </div>
            <div className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative">
              <div className="relative flex justify-center w-full cursor-pointer">
                <span className=""></span>
              </div>
              <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
                <div className="relative mb-1">
                  <span className="text-gray-400 font-medium text-xs d-block mb-1">1lb</span>
                  <h2 className="text-heading truncate mb-0 block text-sm font-medium text-gray-600">
                    <span className="line-clamp-2">Rainbow Chard</span>
                  </h2>
                </div>
                <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
                  <div className="font-serif product-price font-bold">
                    <span className="inline-block text-lg font-semibold text-gray-800">$12</span>
                  </div>
                  <button
                    aria-label="cart"
                    className="h-9 w-9 flex items-center justify-center border border-gray-200 rounded text-emerald-500 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all"
                  >
                    {' '}
                    <span className="text-xl">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M460 160h-88v-12A116.13 116.13 0 00258.89 32h-5.78A116.13 116.13 0 00140 148v12H52a4 4 0 00-4 4v300a16 16 0 0016 16h384a16 16 0 0016-16V164a4 4 0 00-4-4zm-280-11c0-41.84 33.41-76.56 75.25-77A76.08 76.08 0 01332 148v12H180zm156 187h-64v64h-32v-64h-64v-32h64v-64h32v64h64z"></path>
                      </svg>
                    </span>{' '}
                  </button>
                </div>
              </div>
            </div>
            <div className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative">
              <div className="relative flex justify-center w-full cursor-pointer">
                <span className=""></span>
              </div>
              <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
                <div className="relative mb-1">
                  <span className="text-gray-400 font-medium text-xs d-block mb-1">1lb</span>
                  <h2 className="text-heading truncate mb-0 block text-sm font-medium text-gray-600">
                    <span className="line-clamp-2">Rainbow Chard</span>
                  </h2>
                </div>
                <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
                  <div className="font-serif product-price font-bold">
                    <span className="inline-block text-lg font-semibold text-gray-800">$12</span>
                  </div>
                  <button
                    aria-label="cart"
                    className="h-9 w-9 flex items-center justify-center border border-gray-200 rounded text-emerald-500 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all"
                  >
                    {' '}
                    <span className="text-xl">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M460 160h-88v-12A116.13 116.13 0 00258.89 32h-5.78A116.13 116.13 0 00140 148v12H52a4 4 0 00-4 4v300a16 16 0 0016 16h384a16 16 0 0016-16V164a4 4 0 00-4-4zm-280-11c0-41.84 33.41-76.56 75.25-77A76.08 76.08 0 01332 148v12H180zm156 187h-64v64h-32v-64h-64v-32h64v-64h32v64h64z"></path>
                      </svg>
                    </span>{' '}
                  </button>
                </div>
              </div>
            </div>
            <div className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative">
              <div className="relative flex justify-center w-full cursor-pointer">
                <span className=""></span>
              </div>
              <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
                <div className="relative mb-1">
                  <span className="text-gray-400 font-medium text-xs d-block mb-1">1lb</span>
                  <h2 className="text-heading truncate mb-0 block text-sm font-medium text-gray-600">
                    <span className="line-clamp-2">Rainbow Chard</span>
                  </h2>
                </div>
                <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
                  <div className="font-serif product-price font-bold">
                    <span className="inline-block text-lg font-semibold text-gray-800">$12</span>
                  </div>
                  <button
                    aria-label="cart"
                    className="h-9 w-9 flex items-center justify-center border border-gray-200 rounded text-emerald-500 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all"
                  >
                    {' '}
                    <span className="text-xl">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M460 160h-88v-12A116.13 116.13 0 00258.89 32h-5.78A116.13 116.13 0 00140 148v12H52a4 4 0 00-4 4v300a16 16 0 0016 16h384a16 16 0 0016-16V164a4 4 0 00-4-4zm-280-11c0-41.84 33.41-76.56 75.25-77A76.08 76.08 0 01332 148v12H180zm156 187h-64v64h-32v-64h-64v-32h64v-64h32v64h64z"></path>
                      </svg>
                    </span>{' '}
                  </button>
                </div>
              </div>
            </div>
            <div className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative">
              <div className="relative flex justify-center w-full cursor-pointer">
                <span className=""></span>
              </div>
              <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
                <div className="relative mb-1">
                  <span className="text-gray-400 font-medium text-xs d-block mb-1">1lb</span>
                  <h2 className="text-heading truncate mb-0 block text-sm font-medium text-gray-600">
                    <span className="line-clamp-2">Rainbow Chard</span>
                  </h2>
                </div>
                <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
                  <div className="font-serif product-price font-bold">
                    <span className="inline-block text-lg font-semibold text-gray-800">$12</span>
                  </div>
                  <button
                    aria-label="cart"
                    className="h-9 w-9 flex items-center justify-center border border-gray-200 rounded text-emerald-500 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all"
                  >
                    {' '}
                    <span className="text-xl">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M460 160h-88v-12A116.13 116.13 0 00258.89 32h-5.78A116.13 116.13 0 00140 148v12H52a4 4 0 00-4 4v300a16 16 0 0016 16h384a16 16 0 0016-16V164a4 4 0 00-4-4zm-280-11c0-41.84 33.41-76.56 75.25-77A76.08 76.08 0 01332 148v12H180zm156 187h-64v64h-32v-64h-64v-32h64v-64h32v64h64z"></path>
                      </svg>
                    </span>{' '}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderHeader;
