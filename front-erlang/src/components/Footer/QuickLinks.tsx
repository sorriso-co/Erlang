import React, { useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Import icons

const FooterQuickLinks: React.FC = () => {
  const { t } = useTranslation("common");
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  return (
    <nav className="md:mb-0">
      <h2
        className="text-lg font-semibold mb-4 text-white cursor-pointer flex items-center justify-center md:justify-start"
        onClick={toggleCollapse}
      >
        {t("footer.quickLinks")}
        <span className="ml-2">
          {isCollapsed ? <FaChevronDown /> : <FaChevronUp />}
        </span>
      </h2>
      <ul className={`space-y-4 ${isCollapsed ? "hidden" : "block"} md:block`}>
        <li className="flex items-center justify-center md:justify-start">
          <Link
            href="/about"
            className="hover:text-teal-300 transition-colors duration-200"
          >
            {t("footer.aboutLink")}
          </Link>
        </li>
        <li className="flex items-center justify-center md:justify-start">
          <Link
            href="/contact"
            className="hover:text-teal-300 transition-colors duration-200"
          >
            {t("footer.contactLink")}
          </Link>
        </li>
        <li className="flex items-center justify-center md:justify-start">
          <Link
            href="/services"
            className="hover:text-teal-300 transition-colors duration-200"
          >
            {t("footer.servicesLink")}
          </Link>
        </li>
        <li className="flex items-center justify-center md:justify-start">
          <Link
            href="/gallery"
            className="hover:text-teal-300 transition-colors duration-200"
          >
            {t("footer.galleryLink")}
          </Link>
        </li>
        <li className="flex items-center justify-center md:justify-start">
          <Link
            href="/privacy"
            className="hover:text-teal-300 transition-colors duration-200"
          >
            {t("footer.privacyPolicyLink")}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default FooterQuickLinks;
