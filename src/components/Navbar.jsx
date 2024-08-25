import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const location = useLocation();
  return (
    <>
      {/*<!-- Component: Navbar with CTA --> */}
      <header className="border-b-1 relative z-20 w-full border-b border-slate-200 bg-white/90 shadow-lg shadow-slate-700/5 after:absolute after:left-0 after:top-full after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
        <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav
            aria-label="main navigation"
            className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
            role="navigation"
          >
            {/*      <!-- Brand logo --> */}
            <Link
              to="/"
              id="WindUI"
              aria-label="WindUI logo"
              aria-current="page"
              className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1"
              href="javascript:void(0)"
            >
              <img src="/Logo.svg" className="max-w-20 max-h-20" />
              <h2>
                <span>/</span>Excellence Consultancy Services
              </h2>
            </Link>
            {/*      <!-- Mobile trigger --> */}
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
              ${
                isToggleOpen
                  ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 "
                  : ""
              }
            `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
              </div>
            </button>
            {/*      <!-- Navigation links --> */}
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute left-0 top-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm"
                  : "invisible opacity-0"
              }`}
            >
              <li role="none" className="flex items-stretch">
                <Link
                  to="/services"
                  role="menuitem"
                  aria-haspopup="false"
                  className={`flex items-center gap-2 py-2 lg:py-4 transition-colors duration-300 hover:text-accenthover focus:text-accent focus:outline-none focus-visible:outline-none lg:px-8 ${
                    location.pathname === "/services" ? "active" : ""
                  }`}
                  href="javascript:void(0)"
                  onClick={() => setIsToggleOpen(!isToggleOpen)}
                >
                  <span>Services</span>
                </Link>
              </li>
              <li role="none" className="flex items-stretch">
                <Link
                  to="/about"
                  role="menuitem"
                  aria-current="page"
                  aria-haspopup="false"
                  className={`flex items-center gap-2 py-4 transition-colors duration-300 hover:text-accenthover focus:text-accent  focus:outline-none focus-visible:outline-none lg:px-8 ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                  href="javascript:void(0)"
                  onClick={() => setIsToggleOpen(!isToggleOpen)}
                >
                  <span>About Us</span>
                </Link>
              </li>
            </ul>
            <div className="ml-auto flex items-center px-6 lg:ml-0 lg:p-0">
              <Link
                to="/contact"
                className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-accent px-5 text-sm font-medium tracking-wide text-white shadow-md shadow-blue-200 transition duration-300 hover:bg-accenthover hover:shadow-sm hover:shadow-teal-200 focus:text-accent focus:shadow-sm focus:shadow-blue-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300 disabled:shadow-none"
              >
                <span>Contact Us</span>
              </Link>
              {/* toggle */}
              <label className="relative flex flex-wrap items-center gap-2 cursor-pointer text-slate-500 ml-6">
                <input
                  className="relative w-12 h-6 transition-colors appearance-none cursor-pointer peer rounded-xl ring-2 ring-inset ring-slate-300 after:absolute after:left-0 after:top-0 after:h-6 after:w-6 after:rounded-full after:bg-white after:ring-2 after:ring-inset after:ring-slate-500 after:transition-all checked:bg-blue-200 checked:ring-blue-500 checked:after:left-6 checked:after:bg-white checked:after:ring-blue-500 hover:ring-slate-400 after:hover:ring-slate-600 checked:hover:bg-blue-300 checked:hover:ring-blue-600 checked:after:hover:ring-blue-600 checked:focus:bg-blue-400 checked:focus:ring-blue-700 checked:after:focus:ring-blue-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-200 disabled:after:ring-slate-300"
                  type="checkbox"
                  value=""
                />
                <div className="absolute left-0.5 top-0.5 flex h-5 w-5 items-center justify-center text-slate-500 opacity-100 transition-opacity peer-checked:opacity-0 peer-hover:text-slate-600 peer-focus:text-slate-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M8 1a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 8 1ZM10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM12.95 4.11a.75.75 0 1 0-1.06-1.06l-1.062 1.06a.75.75 0 0 0 1.061 1.062l1.06-1.061ZM15 8a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 15 8ZM11.89 12.95a.75.75 0 0 0 1.06-1.06l-1.06-1.062a.75.75 0 0 0-1.062 1.061l1.061 1.06ZM8 12a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 8 12ZM5.172 11.89a.75.75 0 0 0-1.061-1.062L3.05 11.89a.75.75 0 1 0 1.06 1.06l1.06-1.06ZM4 8a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 4 8ZM4.11 5.172A.75.75 0 0 0 5.173 4.11L4.11 3.05a.75.75 0 1 0-1.06 1.06l1.06 1.06Z" />
                  </svg>
                </div>
                <div className="absolute left-[1.625rem] top-0.5 flex h-5 w-5 items-center justify-center text-blue-500 opacity-0 transition-opacity peer-checked:opacity-100 peer-hover:text-blue-600 peer-focus:text-blue-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M14.438 10.148c.19-.425-.321-.787-.748-.601A5.5 5.5 0 0 1 6.453 2.31c.186-.427-.176-.938-.6-.748a6.501 6.501 0 1 0 8.585 8.586Z" />
                  </svg>
                </div>
              </label>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
