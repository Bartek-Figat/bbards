import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import Logout from '../../componets/logout';

export const AccountNav = ({ options }) => {
  const location = useLocation();

  return (
    <nav className="flex flex-col pb-2 md:pb-6 border border-border-base rounded-md overflow-hidden">
      {options.map((item) => {
        const menuPathname = item.slug;
        return (
          <Link key={item.slug} to={item.slug}>
            <p
              className={`flex items-center cursor-pointer text-sm lg:text-15px text-brand-dark py-3.5 px-3.5 xl:px-4 2xl:px-5 mb-1 hover:bg-slate-200 ${
                location.pathname === menuPathname ? 'bg-slate-200 font-medium' : 'font-normal'
              }`}
            >
              <span className="w-9 xl:w-10 shrink-0 flex justify-center">{item.icon}</span>
              <span className="ltr:pl-1 lg:rtl:pr-1.5">{item.name}</span>
            </p>
          </Link>
        );
      })}
      <button
        className="flex items-center text-sm lg:text-15px text-brand-dark py-3.5 px-3.5 xl:px-4 2xl:px-5 mb-1 cursor-pointer focus:outline-none"
        onClick={() => Logout()}
      >
        <span className="w-9 xl:w-10 shrink-0 flex justify-center">
          <FiLogOut className="w-5 md:w-[22px] h-5 md:h-[22px]" />
        </span>
        <span className="ltr:pl-1 lg:rtl:pr-1.5">{'Logout'}</span>
      </button>
    </nav>
  );
};
