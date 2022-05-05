import React from 'react';
import { Link } from 'react-router-dom';
import AuthImage from '../../images/photo-1591818250210-48fba09a2305.png';

export const About = () => {
  return (
    <div className="block mx-auto max-w-screen-2xl">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-8 ">
        <div className="lg:p-8 md:p-8 sm:p-4 bg-slate-500 shadow-sm border rounded-md">
          <div className="w-full bg-white shadow-sm lg:px-10 lg:py-5 p-6 rounded-md">
            <div className="flex justify-between items-center">
              <div className="lg:w-3/5">
                <span class="text-base lg:text-lg">Organic Products and Food</span>
                <h2 class="font-serif text-lg lg:text-2xl font-bold mb-1">
                  Quick Delivery to Your Home
                </h2>
                <p class="text-sm font-sans leading-6">
                  There are many products you will find our shop, Choose your daily necessary
                  product from our KachaBazar shop and get some special offer. See Our latest
                  discounted products from here and get a special discount.
                </p>
                <Link
                  class="lg:w-1/4 text-xs font-serif font-medium inline-block mt-5 px-8 py-3 bg-emerald-500 text-center text-white rounded hover:text-white hover:bg-emerald-600"
                  to="/register"
                >
                  Download App
                </Link>
              </div>
              <div class="w-1/5 flex-grow hidden lg:flex md:flex md:justify-items-center lg:justify-end">
                <span>
                  <img className="block w-auto rounded-md" src={AuthImage} alt="Product" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
