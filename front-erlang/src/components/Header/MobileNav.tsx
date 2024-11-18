"use client";
import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

interface MobileNavProps {
  toggleMenu: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ toggleMenu }) => {
  const { t } = useTranslation("common");

  return (
    <div className="fixed inset-0 bg-teal-900 bg-opacity-90 backdrop-blur-lg z-50 transition-transform duration-500 ease-in-out transform translate-x-0 lg:hidden flex flex-col shadow-xl">
      {/* Header */}
      <div className="sticky top-0 w-full z-50 bg-teal-900 shadow-lg">
        <div className="flex justify-between items-center w-full px-6 py-4 border-b border-teal-800">
          <span className="text-3xl font-bold text-white tracking-wide">
            {t("header.mobile_nav.menu")}
          </span>
          <button
            className="text-white"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Links */}
      <div className="px-4 py-6 space-y-4 flex-grow">
        {/* Home Link */}
        <Link
          href="/"
          className="block text-xl text-white hover:text-teal-400 transition-all duration-300"
          onClick={toggleMenu}
        >
          {t("header.mobile_nav.home")}
        </Link>

        {/* About Link */}
        <Link
          href="/about"
          className="block text-xl text-white hover:text-white transition-all duration-300"
          onClick={toggleMenu}
        >
          {t("header.mobile_nav.about")}
        </Link>

        {/* Services Link */}
        <Link
          href="/services"
          className="block text-xl text-white hover:text-white transition-all duration-300"
          onClick={toggleMenu}
        >
          {t("header.mobile_nav.services")}
        </Link>

        {/* Pricing Link */}
        <Link
          href="/projects"
          className="block text-xl text-white hover:text-teal-400 transition-all duration-300"
          onClick={toggleMenu}
        >
          {t("header.mobile_nav.projects")}
        </Link>

        {/* Services Link */}
        <Link
          href="/gallery"
          className="block text-xl text-white hover:text-white transition-all duration-300"
          onClick={toggleMenu}
        >
          {t("header.mobile_nav.contact")}
        </Link>
      </div>
    </div>
  );
};

export default MobileNav;
