import React from 'react';
import { BsFillHouseDoorFill } from 'react-icons/bs';
import {
  MdOutlineEmojiFoodBeverage,
  MdOutlineSportsHandball,
  MdTravelExplore,
} from 'react-icons/md';
import { SiGitbook } from 'react-icons/si';
import { AiFillCar } from 'react-icons/ai';
import { FaDog, FaBaby } from 'react-icons/fa';
import { BiBed } from 'react-icons/bi';
import { RiServiceLine, RiMentalHealthLine } from 'react-icons/ri';
import { MdOutlineComputer } from 'react-icons/md';

const data = [
  { id: 1, icon: BsFillHouseDoorFill, category: 'Properties', color: 'text-teal-200' },
  { id: 2, icon: MdOutlineEmojiFoodBeverage, category: 'Food', color: 'text-orange-200' },
  { id: 3, icon: MdOutlineComputer, category: 'Electronics', color: 'text-blue-200' },
  { id: 4, icon: SiGitbook, category: 'Education', color: 'text-purple-200' },
  { id: 5, icon: AiFillCar, category: 'Cars', color: 'text-green-200' },
  { id: 6, icon: FaDog, category: 'Animals', color: 'text-red-200' },
  { id: 7, icon: BiBed, category: 'Furniture', color: 'text-pink-200' },
  { id: 8, icon: RiServiceLine, category: 'Services', color: 'text-yellow-200' },
  { id: 9, icon: RiMentalHealthLine, category: 'Beauty Health', color: 'text-gray-200' },
  { id: 10, icon: MdOutlineSportsHandball, category: 'Sports Fitness', color: 'text-indigo-200' },
  { id: 11, icon: FaBaby, category: 'Baby Care', color: 'text-purple-200' },
  { id: 12, icon: MdTravelExplore, category: 'Travel', color: 'text-orange-200' },
];

function Categories() {
  return (
    <div className="lg:py-16  mt-8">
      <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
        <div className="mb-10 flex justify-center">
          <div className="text-center w-full lg:w-2/5">
            <h2 className="text-xl lg:text-2xl mb-2 font-serif font-semibold">
              Choose categories.
            </h2>
            <p className="text-base font-sans text-gray-600 leading-6">
              You can find everything here.
            </p>
          </div>
        </div>
        <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          {data.map((items) => (
            <li key={items.id} className="group">
              <div className="hover:border-b-1 hover:border-gray-300 rounded  flex justify-center flex-col items-center w-full h-full border  shadow-sm bg-white p-4 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg">
                <items.icon
                  className={`${items.color} text-5xl object-cover transition duration-150 ease-linear transform group-hover:scale-105`}
                />
                <h2 className="text-sm text-gray-600 font-serif font-medium leading-tight line-clamp-1">
                  {items.category}
                </h2>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Categories;
