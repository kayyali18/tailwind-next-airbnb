import {
  Bars3Icon as HamburgerIcon,
  GlobeAltIcon,
  MagnifyingGlassIcon as SearchIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import { BaseSyntheticEvent, useState } from 'react';
import Calendar from '../Templates/Calendar';

const Header: React.FC = () => {
  const [searchInput, setSearchInput] = useState('');

  return (
    <header className="sticky top-0 z-50 grid grid-cols-[minmax(70px,_0.5fr)_minmax(120px,_1.2fr)_0.3fr] items-center gap-2 bg-white p-5 shadow-md shadow-rose-200 md:grid-cols-3 md:gap-0 md:px-10">
      {/* Header Logo */}
      <div className="center relative my-auto flex h-10 cursor-pointer">
        <Image
          alt="Airbnb Logo"
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* Search */}

      <div>
        <form>
          <div className="flex rounded-full border-2 py-2 text-sm transition duration-300 ease-in-out focus-within:border-rose-200 focus-within:shadow-sm focus-within:shadow-rose-200 hover:shadow-md hover:shadow-gray-200 hover:focus-within:shadow-rose-200">
            <input
              className="flex-grow bg-transparent pl-5 text-sm text-gray-500 outline-none placeholder:italic"
              type="text"
              placeholder="Search"
              value={searchInput}
              onChange={(e: BaseSyntheticEvent) =>
                setSearchInput(e.target.value)
              }
            />
            <SearchIcon className="hidden h-8 cursor-pointer rounded-full bg-rose-400 p-2 text-white md:mx-2 md:inline-flex" />
          </div>

          {searchInput && <Calendar />}
        </form>
      </div>

      {/* User Actions */}

      <div className="flex items-center justify-end text-center  text-gray-500 sm:space-x-4 md:space-x-2 [&>*]:cursor-pointer">
        <p className="hidden md:inline-block">Become a Host</p>
        <GlobeAltIcon className="hidden h-6 text-rose-400 md:inline-block" />

        <div className=" flex items-center space-x-2 rounded-full border-2 p-2">
          <HamburgerIcon className="h-6" />
          <UserCircleIcon className="hidden h-6 sm:inline-block" />
        </div>
      </div>
    </header>
  );
};

export default Header;
