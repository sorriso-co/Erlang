import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import commonEn from "../public/locales/en/common.json";
i18n.use(initReactI18next).init({
  resources: {
    en: {
      common: commonEn,
      //   pricing: pricingEn,
      //   services: servicesEn,
      //   homepage: homepageEn,
      //   about: aboutEn,
    },
  },
  fallbackLng: "en",
  debug: true,
  ns: ["common", "pricing", "services", "homepage", "about"],
  defaultNS: "common",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
