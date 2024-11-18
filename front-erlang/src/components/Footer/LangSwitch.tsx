"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const LangSwitch: React.FC = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: "en", flag: "/images/lang/en.webp" },
    { code: "it", flag: "/images/lang/it.webp" },
    { code: "de", flag: "/images/lang/de.webp" },
    { code: "fr", flag: "/images/lang/fr.webp" },
  ];

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex space-x-2 p-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`p-1 rounded focus:outline-none transition-transform transform hover:scale-110 ${
            i18n.language === lang.code
              ? "ring-2 ring-teal-400"
              : "ring-1 ring-gray-500"
          }`}
        >
          <Image
            src={lang.flag}
            alt={`${lang.code} flag`}
            width={30}
            height={20}
            className="object-cover"
          />
        </button>
      ))}
    </div>
  );
};

export default LangSwitch;
