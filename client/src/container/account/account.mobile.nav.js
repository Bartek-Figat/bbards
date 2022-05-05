import React from 'react';
import { NavLink } from 'react-router-dom';
import { Listbox, Transition } from '@headlessui/react';
import { FaChevronDown } from 'react-icons/fa';

export const AccountNavMobile = ({ options }) => {
  return (
    <Listbox>
      {({ open }) => (
        <div className="relative w-full font-body">
          <Listbox.Button className="relative flex items-center w-full p-4 border rounded cursor-pointer text-brand-dark md:p-5 ltr:text-left rtl:text-right focus:outline-none border-border-base">
            {options.icon}
            <span className="flex truncate items-center text-sm md:text-15px font-medium ltr:pl-2.5 rtl:pr-2.5 relative">
              {options.name}
            </span>
            <span className="absolute inset-y-0 flex items-center pointer-events-none ltr:right-4 rtl:left-4 md:ltr:right-5 md:rtl:left-5">
              <FaChevronDown
                className="w-3 md:w-3.5 h-3 md:h-3.5 text-brand-dark text-opacity-70"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            show={open}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              static
              className="absolute z-60 w-full py-2.5 mt-1.5 overflow-auto bg-brand-light rounded-md shadow-dropDown max-h-72 focus:outline-none text-sm md:text-15px"
            >
              {options?.map((option, index) => (
                <Listbox.Option
                  key={index}
                  className={({ active }) =>
                    `cursor-pointer relative py-3 px-4 md:px-5 ${
                      active ? 'text-brand-dark bg-fill-dropdown-hover' : 'bg-brand-light'
                    }`
                  }
                  value={option}
                >
                  {({ selected, active }) => (
                    <NavLink to={option.slug}>
                      <span className="flex items-center">
                        {option?.icon}
                        <span
                          className={`block truncate ltr:pl-2.5 rtl:pr-2.5 md:ltr:pl-3 md:rtl:pr-3 ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {option?.name}
                        </span>
                        {selected ? (
                          <span
                            className={`${active && 'text-amber-600'}
                                 absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center ltr:pl-3 rtl:pr-3`}
                          />
                        ) : null}
                      </span>
                    </NavLink>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      )}
    </Listbox>
  );
};
