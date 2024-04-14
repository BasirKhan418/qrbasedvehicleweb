import React, { useState } from "react";
import { IoQrCode } from "react-icons/io5";
import Link from "next/link";
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div className="sticky top-4 z-20 ">
      {/* ========== HEADER ========== */}
      <header className=" inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm ">
        <nav
          className="relative max-w-[85rem] w-full bg-white border border-gray-200 rounded-[36px] mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto dark:bg-gray-800 dark:border-gray-700 "
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <Link
              className="flex items-center justify-center dark:text-white text-2xl font-bold bg-clip-text bg-gradient-to-tr from-blue-600 to-purple-400 text-transparent "
              href="/"
              aria-label="Brand"
            >
              Quvehl
              <IoQrCode  className="text-blue-600 mx-1 text-xl "/>
            </Link>
            <div className="md:hidden">
              <button
                type="button"
                className="hs-collapse-toggle size-8 flex justify-center items-center text-sm font-semibold rounded-full border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700"
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <svg
                  className="hs-collapse-open:hidden flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1={3} x2={21} y1={6} y2={6} />
                  <line x1={3} x2={21} y1={12} y2={12} />
                  <line x1={3} x2={21} y1={18} y2={18} />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div
            id="navbar-collapse-with-animation"
            className={`overflow-hidden transition-all duration-300 basis-full grow md:block ${
              navbarOpen ? "hs-collapse-open block" : "hs-collapse-close hidden"
            } `}
          >
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7 " style={{fontSize:"15px"}}>
              <Link
                className="font-medium text-blue-600 md:py-6 dark:text-blue-500"
                href="/components/Plans"
                aria-current="page"
                onClick={() => setNavbarOpen(false)}
              >
                Plans
              </Link>

              {/* <a
                className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                href="#"
              >
                Account
              </a> */}
              {/* <a
                className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                href="#"
              >
                Work
              </a> */}
              <Link
                className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                href="/components/QrGen"
                onClick={() => setNavbarOpen(false)}
              >
                Generate Qr
                
              </Link>

              <Link
                className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 md:border-s md:border-gray-300 md:my-6 md:ps-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500"
                href="/components/Scan"
                onClick={() => setNavbarOpen(false)}
              >
               
                <IoQrCode  className="flex-shrink-0 size-4"/>
                Scan Qr
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
