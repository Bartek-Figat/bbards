import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';

export const ShopSidebar = ({ options }) => {
  const location = useLocation();
  return (
    <div>
      <div className="bg-white p-5 min-w-60">
        <div className="grid md:grid-cols-2 xl:grid-cols-1 gap-6">
          {/* Group 1 */}
          <div>
            {options.map((item) => {
              const menuPathname = item.slug;
              console.log('location.pathname', location.pathname);
              console.log('item.slug', item.slug);
              return (
                <Link key={item.slug} to={item.slug}>
                  <p
                    className={`flex items-center cursor-pointer text-sm lg:text-15px text-brand-dark py-3.5 px-3.5 xl:px-4 2xl:px-5 mb-1 hover:bg-slate-200 ${
                      location.pathname === menuPathname
                        ? 'bg-slate-200 font-medium'
                        : 'font-normal'
                    }`}
                  >
                    <span className="w-9 xl:w-10 shrink-0 flex justify-center">{item.icon}</span>
                    <span className="ltr:pl-1 lg:rtl:pr-1.5">{item.name}</span>
                  </p>
                </Link>
              );
            })}
            <button className="flex items-center text-sm lg:text-15px text-brand-dark py-3.5 px-3.5 xl:px-4 2xl:px-5 mb-1 cursor-pointer focus:outline-none">
              <span className="w-9 xl:w-10 shrink-0 flex justify-center">
                <FiLogOut className="w-5 md:w-[22px] h-5 md:h-[22px]" />
              </span>
              <span className="ltr:pl-1 lg:rtl:pr-1.5">{'Logout'}</span>
            </button>
          </div>

          {/* Price Range */}
        </div>
      </div>
    </div>
  );
};
