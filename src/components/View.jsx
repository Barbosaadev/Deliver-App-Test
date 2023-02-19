import React from "react"
import { useState } from "react"
import Header from "./Header"
import Sidebar from "./Sidebar"

const View = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const onOpenSidebar = () => {
    setIsOpen(true)
  }

  const onCloseSidebar = () => {
    setIsOpen(false)
  }

  return (
    <div>
      <Sidebar isOpen={isOpen} onClose={onCloseSidebar} />
      <Header onOpenSidebar={onOpenSidebar} />
      <main className="p-1 lg:px-0 min-h-[800px] sm:container sm:p-10 m-0 lg:mx-auto">
        {title && <h2 className="text-xl uppercase xs:text-sm font-semibold pl-4 my-6">{title}</h2>}
        {children}
      </main>
    </div>
  )
}

export default View
