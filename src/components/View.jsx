import React from 'react';
import { useState } from 'react';
import  Header from "./Header"
import Sidebar from './Sidebar';


const View = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenSidebar = () => {
    setIsOpen(true);
  };

  const onCloseSidebar = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Sidebar isOpen={isOpen} onClose={onCloseSidebar} />
      <Header onOpenSidebar={onOpenSidebar} />
      <main className="p-8 lg:px-0 min-h-[800px] lg:container lg:mx-auto">
        {title && (<h2 className="text-xl uppercase font-semibold mb-8">{title}</h2>)}{children}
      </main>
    </div>
  );
};

export default View