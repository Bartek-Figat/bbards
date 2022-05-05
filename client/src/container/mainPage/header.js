import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Transition from '../../utils/transition';
import Dropdown from '../../utils/dropdown';
import { SiMetrodelaciudaddemexico } from 'react-icons/si';
import { ROUTES } from '../../router/router';

function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [top, setTop] = useState(true);

  const trigger = useRef(null);
  const mobileNav = useRef(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target))
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <header className={`sticky top-0 z-30   ${!top && ' bg-white '}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-12 md:h-20">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link to={`${ROUTES.HOME}`} className="block" aria-label="Cruip">
              <SiMetrodelaciudaddemexico className="w-8 h-8" />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:flex-grow">
            {/* Desktop menu links */}
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <Link
                  to="/pricing"
                  className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Page_1
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Page_2
                </Link>
              </li>
              <li>
                <Link
                  to="/tutorials"
                  className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Page_3
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Page_4
                </Link>
              </li>
              {/* 1st level: hover */}
              <Dropdown title="Dropdown list">
                {/* 2nd level: hover */}
                <li>
                  <Link
                    to="/documentation"
                    className="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight"
                  >
                    Dropdown_1
                  </Link>
                </li>
                <li>
                  <Link
                    to="/support"
                    className="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight"
                  >
                    Dropdown_2
                  </Link>
                </li>
                <li>
                  <Link
                    to="/404"
                    className="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight"
                  >
                    Dropdown_3
                  </Link>
                </li>
              </Dropdown>
            </ul>

            {/* Desktop sign in links */}

            {localStorage.getItem('token') ? (
              <ul className="flex flex-grow justify-end flex-wrap items-center">
                <li>
                  <Link
                    to={`${ROUTES.ADMIN}`}
                    className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/logout"
                    className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3"
                  >
                    <span>Logout</span>
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="flex flex-grow justify-end flex-wrap items-center">
                <li>
                  <Link
                    to="/login"
                    className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                  >
                    Sign in
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3"
                  >
                    <span>Sign up</span>
                  </Link>
                </li>
              </ul>
            )}
          </nav>

          {/* Mobile menu */}
          <div className="flex md:hidden">
            {/* Hamburger button */}
            <button
              ref={trigger}
              className={`hamburger ${mobileNavOpen && 'active'}`}
              aria-controls="mobile-nav"
              aria-expanded={mobileNavOpen}
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
              <span className="sr-only">Menu</span>
              <svg
                className="w-6 h-6 fill-current text-gray-900"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="4" width="24" height="2" />
                <rect y="11" width="24" height="2" />
                <rect y="18" width="24" height="2" />
              </svg>
            </button>

            {/*Mobile navigation */}
            <div ref={mobileNav}>
              <Transition
                show={mobileNavOpen}
                tag="nav"
                id="mobile-nav"
                className="absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white"
                enter="transition ease-out duration-200 transform"
                enterStart="opacity-0 -translate-y-2"
                enterEnd="opacity-100 translate-y-0"
                leave="transition ease-out duration-200"
                leaveStart="opacity-100"
                leaveEnd="opacity-0"
              >
                <ul className="px-5 py-2">
                  <li>
                    <Link to="/pricing" className="flex text-gray-600 hover:text-gray-900 py-2">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="flex text-gray-600 hover:text-gray-900 py-2">
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link to="/tutorials" className="flex text-gray-600 hover:text-gray-900 py-2">
                      Tutorials
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog" className="flex text-gray-600 hover:text-gray-900 py-2">
                      Blog
                    </Link>
                  </li>
                  <li className="py-2 my-2 border-t border-b border-gray-200">
                    <span className="flex text-gray-600 hover:text-gray-900 py-2">Resources</span>
                    <ul className="pl-4">
                      <li>
                        <Link
                          to="/documentation"
                          className="text-sm flex font-medium text-gray-600 hover:text-gray-900 py-2"
                        >
                          Documentation
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/support"
                          className="text-sm flex font-medium text-gray-600 hover:text-gray-900 py-2"
                        >
                          Support center
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/404"
                          className="text-sm flex font-medium text-gray-600 hover:text-gray-900 py-2"
                        >
                          404
                        </Link>
                      </li>
                    </ul>
                  </li>

                  {localStorage.getItem('token') ? (
                    <>
                      <Link to={`${ROUTES.ADMIN}`}>
                        <li className="flex font-medium text-gray-600 hover:text-gray-900 py-2 justify-center w-full">
                          <span>Dashboard</span>
                        </li>
                      </Link>
                      <Link to={`${ROUTES.LOGOUT}`}>
                        <li className="btn-sm text-gray-200 text-center bg-gray-900 hover:bg-gray-800 w-full my-2">
                          <span>Logout</span>
                        </li>
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link to="/login">
                        <li className="flex font-medium text-gray-600 hover:text-gray-900 py-2 justify-center w-full">
                          <span>Sign in</span>
                        </li>
                      </Link>
                      <Link to="/register">
                        <li className="btn-sm text-gray-200 text-center bg-gray-900 hover:bg-gray-800 w-full my-2">
                          <span>Sign up</span>
                        </li>
                      </Link>
                    </>
                  )}
                </ul>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
