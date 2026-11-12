import { useState } from "react";
import { Menu, X, Github, Linkedin, Sun, Moon } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import { useLanguage } from "../i18n/useLanguage";

const NAV_ITEMS = ["technologies", "projects", "education", "contact"];

const SOCIAL_LINKS = [
  { key: "github", href: "https://github.com/diondulellari", icon: Github },
  {
    key: "linkedin",
    href: "https://www.linkedin.com/in/diondulellari/",
    icon: Linkedin,
  },
];

const NAV_LINK_CLASS =
  "inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:hover:bg-gray-700 dark:focus:bg-gray-800 dark:hover:text-white dark:focus:text-white";

const MOBILE_LINK_CLASS =
  "block px-4 py-2 text-sm rounded-md hover:bg-gray-100 transition-colors dark:hover:bg-gray-700";

const ICON_BUTTON_CLASS =
  "inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-gray-700";

const LANGUAGE_BUTTON_CLASS =
  "inline-flex h-9 items-center justify-center rounded-md px-2 text-xs font-semibold transition-colors hover:bg-gray-100 dark:hover:bg-gray-700";

function LanguageSwitcher() {
  const { language, setLanguage, languages, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.header.language}
      className="flex items-center"
    >
      {languages.map((code, index) => (
        <span key={code} className="flex items-center">
          {index > 0 && (
            <span aria-hidden="true" className="text-gray-300 dark:text-gray-600">
              |
            </span>
          )}
          <button
            type="button"
            lang={code}
            onClick={() => setLanguage(code)}
            aria-pressed={language === code}
            aria-label={t.header.languageNames[code]}
            className={`${LANGUAGE_BUTTON_CLASS} ${
              language === code ? "" : "text-gray-400 dark:text-gray-500"
            }`}
          >
            {code.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  );
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-black/95 dark:border-gray-700 dark:text-white dark:backdrop-blur-[5px] dark:supports-[backdrop-filter]:bg-black/90">
      <div className="container mx-auto flex h-14 items-center px-4">
        <a href="#main" className="font-bold text-lg">
          {t.header.brand}
        </a>

        <nav aria-label={t.header.mainNav} className="hidden md:flex mx-6">
          <ul className="flex space-x-1">
            {NAV_ITEMS.map((id) => (
              <li key={id}>
                <a href={`#${id}`} className={NAV_LINK_CLASS}>
                  {t.header.nav[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-1">
          {SOCIAL_LINKS.map(({ key, href, icon: Icon }) => (
            <a
              key={key}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${ICON_BUTTON_CLASS} hidden sm:inline-flex`}
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">{t.header[key]}</span>
            </a>
          ))}

          <LanguageSwitcher />

          <button
            type="button"
            className={ICON_BUTTON_CLASS}
            onClick={toggleTheme}
            aria-pressed={isDarkMode}
          >
            <Sun
              aria-hidden="true"
              className={`h-4 w-4 transition-all ${
                isDarkMode ? "rotate-0 scale-0" : "rotate-0 scale-100"
              }`}
            />
            <Moon
              aria-hidden="true"
              className={`absolute h-4 w-4 transition-all ${
                isDarkMode ? "rotate-0 scale-100" : "rotate-90 scale-0"
              }`}
            />
            <span className="sr-only">{t.header.toggleTheme}</span>
          </button>

          <button
            type="button"
            className={`${ICON_BUTTON_CLASS} md:hidden`}
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? (
              <X className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Menu className="h-4 w-4" aria-hidden="true" />
            )}
            <span className="sr-only">{t.header.toggleMenu}</span>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-menu"
          aria-label={t.header.mobileNav}
          className="md:hidden border-t border-gray-200 dark:border-gray-700"
        >
          <div className="container mx-auto py-4 px-4 space-y-1">
            {NAV_ITEMS.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className={MOBILE_LINK_CLASS}
                onClick={() => setIsMenuOpen(false)}
              >
                {t.header.nav[id]}
              </a>
            ))}
            <div className="flex gap-1 pt-2 sm:hidden">
              {SOCIAL_LINKS.map(({ key, href, icon: Icon }) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={ICON_BUTTON_CLASS}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  <span className="sr-only">{t.header[key]}</span>
                </a>
              ))}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
