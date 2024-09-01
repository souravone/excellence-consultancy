import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="container">
      <nav className="mx-auto px-5 md:px-8 lg:px-10 flex justify-between items-center py-1 md:py-2 border-b-2 w-full">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <img
              src="./Logo.svg"
              className="max-w-14 mah-h-14 md:max-w-20 md:max-h-20"
            />
            <h2 className="flex items-center text-accent leading-4 font-bold text-sm md:text-xl">
              <span className="text-4xl mr-2">/</span>Excellence Consultancy
              Services
            </h2>
          </Link>
        </div>
        <div className="">
          <button onClick={toggleMenu} className="md:hidden pl-2 mt-2">
            {!menuOpen ? (
              <RxHamburgerMenu className="h-6 w-6" />
            ) : (
              <RxCross2 className="h-6 w-6" />
            )}
          </button>
          <ul
            className={` absolute flex flex-col whitespace-nowrap right-0 top-0 mt-16 md:mt-0 bg-white  h-full w-auto pl-16 pr-8 pt-16 gap-4 border-l-2 overflow-hidden overflow-y-auto overscroll-contain font-medium transition-[opacity,visibility] duration-300 md:visible md:bg-white md:relative md:top-0 md:z-0 md:flex-row md:opacity-100 md:w-auto md:border-l-0 md:items-stretch md:overflow-visible md:px-0 md:py-0  md:pt-0 lg:gap-8
              ${menuOpen ? "visible opacity-100" : "invisible opacity-0"}`}
          >
            <li onClick={toggleMenu}>
              <Link
                to="/services"
                className={`hover:text-accent transition-all duration-200 pb-3 ${
                  location.pathname === "/services" ? "active" : ""
                }`}
              >
                Services
              </Link>
            </li>
            <li onClick={toggleMenu}>
              <Link
                to="/about"
                className={`hover:text-accent transition-all duration-200 pb-3 ${
                  location.pathname === "/about" ? "active" : ""
                }`}
              >
                About Us
              </Link>
            </li>
            <li onClick={toggleMenu}>
              <Link
                to="/contact"
                className={`hover:text-accent transition-all duration-200 pb-3 ${
                  location.pathname === "/contact" ? "active" : ""
                }`}
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
