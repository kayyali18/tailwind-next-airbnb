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
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white p-5 shadow-md shadow-rose-200 md:px-10">
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
          <div className="flex rounded-full py-2 text-sm transition duration-300 ease-in-out focus-within:border-rose-200 focus-within:shadow-sm focus-within:shadow-rose-200 hover:shadow-md hover:shadow-gray-200 hover:focus-within:shadow-rose-200 md:border-2">
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

      <div className="flex items-center justify-end  space-x-2 text-gray-500 sm:space-x-4 [&>*]:cursor-pointer">
        <p className="hidden md:inline-block">Become a Host</p>
        <GlobeAltIcon className="h-6 text-rose-400" />

        <div className=" flex items-center space-x-2 rounded-full border-2 p-2">
          <HamburgerIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
};

export default Header;
