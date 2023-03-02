import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "CSS/LanguageSelector.module.css";
import { FaGlobe } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";

const allLanguages = [
  { text: "English", value: "en" },
  { text: "German", value: "de" },
  { text: "Spanish", value: "es-419" },
  { text: "Chinese", value: "zh" },
  { text: "Arabic", value: "ar" },
  { text: "Russian", value: "ru" },
  { text: "French", value: "fr" },
  { text: "Japanese", value: "ja" },
];

function LanguageSelector() {
  const { i18n } = useTranslation("common");
  const [langCode, setLangCode] = useState("en");

  function changeLanguage(value) {
    i18n.changeLanguage(value);

    // if (value == "0") return;

    // console.log(value);

    // let loc = "/";
    // window.location.replace(value == "en" ? loc : loc + "?lng=" + value);
  }

  useEffect(() => {
    setLangCode(i18n?.language);
  }, [i18n?.language]);

  console.log(i18n?.language);

  return (
    <div className={styles.languageDetectorWrapper}>
      <button className={styles.btn}>
        <FaGlobe />
        <span className={styles.languageCode}>{langCode}</span>
        <AiFillCaretDown />
      </button>

      <div className={styles.dropdown}>
        <div className={styles.dropdownMain}>
          {allLanguages.map((item, i) => (
            <button
              type="button"
              key={i}
              onClick={() => changeLanguage(item.value)}
              className={`${styles.dropdownItem} ${
                langCode == item.value && styles.active
              }`}
            >
              {item.text}
            </button>
          ))}
        </div>
      </div>

      {/* <select
ref={selectRef}
value={lang}
onChange={handleChange}
className="explore-btn"
>
{allLanguages.map((item, i) => {
  return (
    <option key={i} value={item.value}>
      {item.text}
    </option>
  );
})}
</select> */}
    </div>
  );
}

export default LanguageSelector;
