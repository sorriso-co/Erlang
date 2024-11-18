"use client";
import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LangSwitch";
import FooterQuickLinks from "./QuickLinks";
const Footer: React.FC = () => {
  const { t } = useTranslation("common");

  return (
    <footer className="bg-teal-800 text-white py-12 mt-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <FooterQuickLinks />

          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-lg font-semibold mb-4 text-white">
              {t("footer.followUs")}
            </h2>
            <div className="flex space-x-6 mb-6">
              <Link href="https://facebook.com" aria-label="Facebook">
                <FaFacebook className="w-6 h-6 text-white hover:text-teal-100 transition-colors duration-200" />
              </Link>
              <Link href="https://instagram.com" aria-label="Instagram">
                <FaInstagram className="w-6 h-6 text-white hover:text-teal-100 transition-colors duration-200" />
              </Link>
            </div>

            {/* Language Switcher */}
            <div className="mt-4">
              <h3 className="text-sm font-medium text-white">
                {t("footer.language")}
              </h3>
              <div className="mt-2">
                <LanguageSwitcher />
                <Link
                  href="/about"
                  className="text-white hover:text-teal-100 transition-colors duration-200 font-medium mt-10"
                >
                  {t("footer.learnMore")}
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Embedded Map */}
        <div className="mt-12 w-full h-64">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d227.18576086436767!2d19.267314216560603!3d42.437399697037364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2snl!4v1731893047546!5m2!1sen!2snl"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Erlang Location"
          ></iframe>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-white">
          <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
