import { useEffect, useMemo, useState } from "react";
import { LanguageContext } from "./LanguageContext";
import { translations } from "./translations";

const STORAGE_KEY = "portfolio-language";
const LANGUAGES = Object.keys(translations);
const DEFAULT_LANGUAGE = "en";

function getInitialLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (LANGUAGES.includes(saved)) return saved;
  } catch {
    // localStorage unavailable (private mode, blocked storage)
  }
  const browserLanguage = navigator.language?.slice(0, 2).toLowerCase();
  return browserLanguage === "it" ? "it" : DEFAULT_LANGUAGE;
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = translations[language].meta.title;
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // ignore storage errors
    }
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      languages: LANGUAGES,
      t: translations[language],
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
