import React from 'react';
import { Link } from 'react-router-dom';
import AuthImage from '../../images/photo-1591818250210-48fba09a2305.png';

export const Add = () => {
  return (
    <div className="mb-12 lg:mb-14 xl:mb-16 2xl:mb-20 p-8 md:p-14 lg:p-16">
      <div className="grid gap-4 2xl:gap-5 grid-cols-1 sm:grid-cols-3 ">
        <div className="mx-auto">
          <Link
            to="/register"
            className="h-full group flex justify-center relative overflow-hidden"
          >
            <span>
              <img
                className="bg-fill-thumbnail object-cover w-full"
                src={AuthImage}
                alt="Product"
              />
            </span>
          </Link>
        </div>
        <div className="mx-auto">
          <Link
            to="/register"
            className="h-full group flex justify-center relative overflow-hidden"
          >
            <span>
              <img
                className="bg-fill-thumbnail object-cover w-full"
                src={AuthImage}
                alt="Product"
              />
            </span>
          </Link>
        </div>
        <div className="mx-auto">
          <Link
            to="/register"
            className="h-full group flex justify-center relative overflow-hidden"
          >
            <span>
              <img
                className="bg-fill-thumbnail object-cover w-full"
                src={AuthImage}
                alt="Product"
              />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
