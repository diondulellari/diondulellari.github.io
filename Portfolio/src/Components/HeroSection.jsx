import gIcon from "../assets/gIcon.png";
import { useLanguage } from "../i18n/useLanguage";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section
      id="main"
      className="flex flex-col items-center justify-center gap-4 px-4 py-24 md:py-32 bg-white dark:bg-black dark:text-white"
    >
      <a
        href="https://github.com/diondulellari"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black relative flex items-center px-4 py-2 text-white rounded-md group transition dark:bg-gray-800 dark:hover:bg-gray-900"
      >
        {t.hero.githubButton}
        <img
          src={gIcon}
          alt=""
          aria-hidden="true"
          className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
        />
      </a>

      <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
        {t.hero.titleLine1}
        <span className="block">{t.hero.titleLine2}</span>
      </h1>

      <p className="max-w-[750px] text-center text-lg sm:text-xl">
        {t.hero.intro}
      </p>
    </section>
  );
}
