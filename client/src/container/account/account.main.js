import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiUserCircle } from 'react-icons/bi';
import { BsBag } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { RiMap2Line } from 'react-icons/ri';
import { AiOutlineBell } from 'react-icons/ai';
import { BsTextCenter } from 'react-icons/bs';
import { MdOutlineLiveHelp } from 'react-icons/md';
import { AccountNav } from './account.nav';
import { AccountNavMobile } from './account.mobile.nav';
import { ROUTES } from '../../router/router';
import { ShopSidebar } from '../order/sidebar';

const accountMenu = [
  {
    slug: ROUTES.ACCOUNT_SETTING,
    name: 'account-settings',
    icon: <BiUserCircle className="w-5 md:w-[22px] h-5 md:h-[22px] decoration-[#f0f9ed]" />,
  },
  {
    slug: ROUTES.ORDERS,
    name: 'text-orders',
    icon: <BsBag className="w-5 md:w-[22px] h-5 md:h-[22px]" />,
  },
  {
    slug: ROUTES.WISHLIST,
    name: 'text-wishlist',
    icon: <AiOutlineHeart className="w-5 md:w-[22px] h-5 md:h-[22px]" />,
  },
  {
    slug: ROUTES.ADDRESS,
    name: 'text-address',
    icon: <RiMap2Line className="w-5 md:w-[22px] h-5 md:h-[22px]" />,
  },
  {
    slug: ROUTES.NOTIFICATION,
    name: 'text-notifications',
    icon: <AiOutlineBell className="w-5 md:w-[22px] h-5 md:h-[22px]" />,
  },
  {
    slug: ROUTES.LEGAL_NOTICE,
    name: 'text-account-details-notice',
    icon: <BsTextCenter className="w-5 md:w-[22px] h-5 md:h-[22px]" />,
  },
  {
    slug: ROUTES.HELP_CENTER,
    name: 'text-account-details-help',
    icon: <MdOutlineLiveHelp className="w-5 md:w-[22px] h-5 md:h-[22px]" />,
  },
];
export const AccountLayout = ({ children }) => {
  return (
    <>
      <div className="border-t border-b border-border-base">
        <div className="mx-auto max-w-[1920px] px-4 md:px-6 lg:px-8 2xl:px-10">
          <div className="pt-10 2xl:pt-12 pb-12 lg:pb-14 xl:pb-16 2xl:pb-20 xl:max-w-screen-xl 2xl:max-w-[1400px] mx-auto">
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="lg:hidden">
                <AccountNavMobile options={accountMenu} />
              </div>
              <div className="hidden lg:block shrink-0 w-72 xl:w-[380px] ltr:mr-7 rtl:ml-7 xl:ltr:mr-8 xl:rtl:ml-8">
                <ShopSidebar options={accountMenu} />
              </div>

              <div className="w-full p-4 mt-4 border rounded-md lg:mt-0 border-border-base sm:p-5 lg:py-8 2xl:py-10 lg:px-7 2xl:px-12">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
