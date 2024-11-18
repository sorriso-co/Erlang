import React, { useState } from "react";
import Link from "next/link";

interface NavbarItemProps {
  href: string;
  text: string;
  submenu?: { href: string; text: string }[];
  onClick?: () => void;
  className?: string;
  submenuClassName?: string;
  submenuItemClassName?: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({
  href,
  text,
  submenu,
  onClick,
  className,
  submenuClassName,
  submenuItemClassName,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      className={`relative block ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {/* Parent Link */}
      <Link
        href={href}
        className="flex items-center py-4 hover:text-gray-300 transition-colors duration-300"
      >
        {text}
        {submenu && (
          <svg
            className={`w-4 h-4 ml-2 transform transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        )}
      </Link>

      {/* Submenu */}
      {submenu && isOpen && (
        <div
          className={`absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10 transition-opacity duration-300 ease-in-out ${submenuClassName} ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          {submenu.map((item) => (
            <Link key={item.href} href={item.href}>
              <div
                className={`block px-4 py-2 text-teal-700 hover:bg-teal-100 hover:text-teal-900 transition-colors duration-300 ${submenuItemClassName}`}
              >
                {item.text}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavbarItem;
