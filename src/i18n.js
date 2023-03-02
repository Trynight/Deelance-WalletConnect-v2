import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-locize-backend";
import { locizePlugin } from "locize";
import LastUsed from "locize-lastused";

// const apiKey = "LQyWQlXFALWsD2KTScTa1Q";
// const loadPath = `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${apiKey}`;

const condition =
  process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test";

i18next
  .use(locizePlugin)
  .use(LastUsed)
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(Backend)
  .init({
    debug: condition ? true : false,
    fallbackLng: "en",
    lng: "en",
    defaultNS: "en",
    saveMissing: condition ? true : false,

    backend: {
      projectId: "a6ad41b6-ac0f-4312-9b7a-7dbcd306fa2e",
      apiKey: "0ea79762-ac74-48b0-9a09-5fb530cf5d5c",
    },

    locizeLastUsed: {
      projectId: "a6ad41b6-ac0f-4312-9b7a-7dbcd306fa2e",
      apiKey: "0ea79762-ac74-48b0-9a09-5fb530cf5d5c",
    },
  });

// i18next
//   .use(HttpBackend)
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     fallbackLng: "en",

//     ns: ["default"],
//     defaultNS: "default",

//     supportedLngs: ["en", "ar", "ru", "ja"],

//     backend: {
//       loadPath: loadPath,
//     },
//   });

// i18next
//   .use(Backend)
//   .use(initReactI18next) // passes i18n down to react-i18next
//   .init({
//     // the translations
//     // (tip move them in a JSON file and import them,
//     // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
//     // resources: {
//     //   en: {
//     //     common: common_en,
//     //   },
//     // },
//     backend: locizeOptions,
//     lng: "en", // if you're using a language detector, do not define the lng option
//     fallbackLng: "en",
//     ns: ["default"],
//     defaultNS: "default",

//     supportedLngs: ["en", "ar", "ru", "ja"],

//     interpolation: {
//       escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
//     },
//   });
