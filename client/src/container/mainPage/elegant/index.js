import React from 'react';
import Food from '../../../images/vegan-plant-based-news-vegan-burger-king-livekindly-Cropped-1.jpg';
import Image from '../../../images/kfc-adds-fried-wings-menus-nationwide.jpg';

export const HeanderTwo = () => {
  return (
    <div className="mx-auto  px-4  md:px-6 lg:px-8 2xl:px-10">
      <div className="h-full my-3 md:my-4 lg:mt-0 lg:mb-5 xl:mb-6">
        <div class="grid gap-4 2xl:gap-5 3xl:gap-7 grid-cols-12">
          <div class="mx-auto col-span-7">
            <div class="h-5/6 group flex justify-center relative overflow-hidden">
              <img class="bg-fill-thumbnail object-cover w-full" src={Food} alt="" />
            </div>
          </div>
          <div class="mx-auto col-span-5">
            <div class="h-5/6 group flex justify-center relative overflow-hidden">
              <img class="bg-fill-thumbnail object-cover w-full" src={Image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
