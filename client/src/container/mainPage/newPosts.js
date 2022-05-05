import React from 'react';
import { Link } from 'react-router-dom';
import AuthImage from '../../images/photo-1591818250210-48fba09a2305.png';

const data = [
  {
    id: 1,
    header: '5 Quick Tips For Title',
    content:
      'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    image: AuthImage,
  },
  {
    id: 2,
    header: '7 Reliable Sources To Learn About Title',
    content: '10 Great Lessons You Can Learn From Content.',
    image: AuthImage,
  },
  {
    id: 3,
    header: 'The 5 Reasons Tourists Love Title',
    content: 'Ten Moments That Basically Sum Up Your Content Experience.',
    image: AuthImage,
  },
  {
    id: 4,
    header: 'Ten Top Risks Of Owning Title',
    content: 'Master The Skills Of Content And Be Successful.',
    image: AuthImage,
  },
  {
    id: 5,
    header: '15 Top Reasons Why You Face Obstacles In Learning Title',
    content: 'The Millionaire Guide On Content To Help You Get Rich.',
    image: AuthImage,
  },
  {
    id: 6,
    header: 'This Is How Title Will Look Like In 10 Years Time',
    content: `Here's What Industry Insiders Say About Content.`,
    image: AuthImage,
  },
  {
    id: 7,
    header: '5 Doubts You Should Clarify About Title',
    content: '7 Moments To Remember From Content.',
    image: AuthImage,
  },
  {
    id: 8,
    header: 'The Millionaire Guide On Title To Help You Get Rich',
    content:
      'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    image: AuthImage,
  },
];

const NewPosts = () => {
  return (
    <div className="w-10/12 m-auto">
      <div class="pb-1 lg:pb-0 mb-12 lg:mb-14 xl:mb-16 2xl:mb-20">
        <div className="mx-auto  px-4 md:px-6 lg:px-8 2xl:px-10">
          <h2 className="text-brand-dark text-lg lg:text-xl xl:text-[22px] xl:leading-8 font-bold font-manrope 3xl:text-[25px] 3xl:leading-9">
            Nowe Posty
          </h2>
          <p className="text-brand-muted text-sm leading-7 lg:text-15px xl:text-base pb-0.5 mt-1.5 lg:mt-2.5 xl:mt-3">
            We have categories the best quality grocery items
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {data.map((card) => {
            return (
              <p class="flex flex-col overflow-hidden rounded-md group shadow-card ">
                <span>
                  <span>
                    <img
                      className="object-cover transition duration-300 ease-in-out transform bg-fill-thumbnail group-hover:opacity-90 group-hover:scale-105"
                      alt=""
                      aria-hidden="true"
                      src={card.image}
                    />
                  </span>
                </span>
                <div class="flex flex-col px-4 pt-4 pb-4 lg:px-5 xl:px-6 lg:pt-5 md:pb-5 lg:pb-6 xl:pb-7">
                  <h2 class="text-brand-dark text-base xl:text-lg xl:leading-7 font-semibold font-manrope mb-1 lg:mb-1.5 truncate group-hover:text-brand">
                    {card.header}
                  </h2>
                  <p class="text-brand-muted text-sm leading-7 lg:text-15px xl:text-base truncate">
                    {card.content}
                  </p>
                </div>
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewPosts;
