import React from 'react';
import { IoMdSearch } from 'react-icons/io';
import { MdKeyboardArrowDown } from 'react-icons/md';

const Navbar = () => {
  const navbarItems = [
    {
      name: 'Features',
      link: '#',
      isArrow: true,
    },
    {
      name: 'Solutions',
      link: '#',
      isArrow: true,
    },
    {
      name: 'Enterprise',
      link: '#',
      isArrow: true,
    },
    {
      name: 'Resources',
      link: '#',
      isArrow: true,
    },
    {
      name: 'Pricing',
      link: '#',
      isArrow: false,
    },
  ];

  return (
    <nav className="flex items-center xl:px-5 justify-between" aria-label="Main Navigation">
      <div className="flex items-center gap-5">
        <div>
          <img
            className="h-14 min-w-24"
            src="assets/Slack-logo.png"
            alt="Slack Logo"
          />
        </div>
        <ul className="hidden lg:flex space-x-4">
          {navbarItems.map((item, index) => (
            <li key={index}>
              <a
                className="flex font-medium text-[#1d1d1d] items-center gap-1"
                href={item.link}
              >
                {item.name}
                {item.isArrow && <MdKeyboardArrowDown />}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <button
          type="button"
          className="text-2xl"
          aria-label="Search"
        >
          <IoMdSearch />
        </button>
        <div className="flex items-center gap-4">
          <a href="#" className="text-sm font-medium">
            Sign in
          </a>
          <a
            className="hidden lg:flex border border-[#532755] text-[#532755] text-sm p-3 px-4 rounded-sm font-semibold"
            href="#"
          >
            TALK TO SALES
          </a>
          <a
            className="bg-[#532755] text-white font-semibold p-3 px-4 rounded-sm"
            href="#"
          >
            GET STARTED
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;