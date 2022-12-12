import React from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import Bars3Icon from "@heroicons/react/24/outline/Bars3Icon"


const Header = ({ onOpenSidebar }) => {
  return (
    <header className=" bg-yellow-400">
      <div className="px-8 h-24 flex items-center lg:container lg:px-0 lg:mx-auto">
        <h1 className="text-black text-lg font-semibold">
          <Link to="/">Delivery Manager</Link>
        </h1>
        <button
          className="ml-auto p-2 rounded-md text-indigo-200 bg-indigo-800 sm:hidden"
          onClick={onOpenSidebar}>
          <Bars3Icon className="h-6 w-6" />
        </button>
        <Nav />
      </div>
    </header>
  );
};

export default Header