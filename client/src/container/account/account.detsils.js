import React from 'react';
import { Button } from '../../atomic/atoms/button/index';
import { Label } from '../../atomic/atoms/label/index';
export const Input = ({ children, ...res }) => {
  return (
    <input
      {...res}
      className="py-2 px-4 w-full appearance-none transition duration-150 ease-in-out border text-input text-13px lg:text-sm font-body rounded placeholder-[#B3B3B3] min-h-12 transition duration-200 ease-in-out text-brand-dark focus:ring-0 text-brand-dark border-border-two focus:border-2 focus:outline-none focus:border-brand h-11 md:h-12"
    />
  );
};

export const AccountDetails = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col w-full">
        <h2 className="text-brand-dark text-base lg:text-lg xl:text-[20px] font-semibold xl:leading-8 mb-5 md:mb-6 lg:mb-7 lg:-mt-1">
          Personal Information
        </h2>
        <form className="flex flex-col justify-center w-full mx-auto">
          <div className="border-b border-border-base pb-7 md:pb-8 lg:pb-10">
            <div className="border-b border-border-base pb-7 md:pb-8 lg:pb-10">
              <div className="flex flex-col space-y-4 sm:space-y-5">
                {/*  */}
                <div className="flex flex-col sm:flex-row -mx-1.5 md:-mx-2.5 space-y-4 sm:space-y-0">
                  <div className="w-full sm:w-1/2 px-1.5 md:px-2.5">
                    <Label>First Name *</Label>
                    <Input placeholder="First Name" />
                  </div>
                  <div className="w-full sm:w-1/2 px-1.5 md:px-2.5">
                    <Label>Last Name *</Label>
                    <Input placeholder="Last Name" />
                  </div>
                </div>
                {/*  */}

                {/*  */}
                <div className="flex flex-col sm:flex-row -mx-1.5 md:-mx-2.5 space-y-4 sm:space-y-0">
                  <div className="w-full sm:w-1/2 px-1.5 md:px-2.5">
                    <Label>Phone/Mobile *</Label>
                    <Input placeholder="Phone/Mobile" />
                  </div>
                </div>
                {/*  */}
              </div>
            </div>
          </div>
          <h2 className="text-brand-dark text-base lg:text-lg xl:text-[20px] font-semibold xl:leading-8 pt-6 mb-5 xl:mb-8 md:pt-7 lg:pt-8">
            Account Information
          </h2>
          {/*  */}
          <div className="border-b border-border-base pb-7 md:pb-9 lg:pb-10">
            <div className="flex flex-col space-y-4 sm:space-y-5">
              <div className="flex flex-col sm:flex-row -mx-1.5 md:-mx-2.5 space-y-4 sm:space-y-0">
                <div className="w-full sm:w-1/2 px-1.5 md:px-2.5">
                  <Label>Email *</Label>
                  <Input placeholder="Email " />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row -mx-1.5 md:-mx-2.5 space-y-4 sm:space-y-0">
                <div className="w-full sm:w-1/2 px-1.5 md:px-2.5">
                  <Label>Password *</Label>
                  <div className="relative">
                    <Input placeholder="Password" />
                    <lable className="absolute -mt-2 cursor-pointer ltr:right-4 rtl:left-4 top-5 text-brand-dark text-opacity-30"></lable>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 px-1.5 md:px-2.5">
                  <Label>Confirm Password</Label>
                  <div className="relative">
                    <Input placeholder="Password" />
                    <lable className="absolute -mt-2 cursor-pointer ltr:right-4 rtl:left-4 top-5 text-brand-dark text-opacity-30"></lable>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="relative flex pb-2 mt-5 sm:ltr:ml-auto sm:rtl:mr-auto lg:pb-0">
            <div class="relative flex pb-2 mt-5 sm:ltr:ml-auto sm:rtl:mr-auto lg:pb-0">
              <Button>Save Changes</Button>
            </div>
          </div>
          {/*  */}
        </form>
      </div>
    </div>
  );
};
