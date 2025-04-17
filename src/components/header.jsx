import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Live Score", path: "/live-score" },
    { name: "Schedule", path: "/schedule" },
    { name: "Teams", path: "/teams" },
    { name: "Status", path: "/status" },
    { name: "News", path: "/news" },
  ];

  // Func toggleMenu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        {/* Logo */}
        <div className="flex items-center justify-between py-4">
          <Link className="flex items-center space-x-2" to="/">
            <div className="h-[30px] w-[30px] bg-orange-300 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">IPL</span>
            </div>
            <span className="text-black font-bold text-lg"> Score Tracker</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            {links.map((link, index) => (
              <Link
                to={link.path}
                key={index}
                className="text-[13px] text-black font-medium transition-colors hover:text-orange-600"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* MobileMenu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={toggleMenu}
          >{isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        
      {/* Mobile Menu  */}
        {isOpen && (
        <div className="md:hidden  py-4 border-t">
          <div className=" flex flex-col  space-y-4 ">
            {links.map((items, index) => (
              <Link
                to={items.path}
                key={index}
                  className="text-sm font-medium transition-colors hover:text-orange-600 "

              >
                {items.name}
              </Link>
            ))}
          </div>
        </div>
      )}
      </div>
      
    </div>

  );
}
