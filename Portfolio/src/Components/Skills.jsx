import { technologies } from "../data/technologies";
import { useLanguage } from "../i18n/useLanguage";

const TechCard = ({ name, icon, invertOnDark }) => (
  <div className="flex flex-col items-center gap-3">
    <div className="w-20 h-20 rounded-2xl bg-white shadow-md flex items-center justify-center p-4 hover:shadow-lg transition-all duration-300 dark:bg-gray-800 dark:shadow-lg dark:hover:shadow-xl hover:-translate-y-1">
      <img
        src={icon}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className={`w-12 h-12 object-contain ${invertOnDark ? "dark:invert" : ""}`}
      />
    </div>
    <span className="text-gray-600 dark:text-white text-sm font-medium text-center">
      {name}
    </span>
  </div>
);

export const Skills = () => {
  const { t } = useLanguage();

  return (
    <section id="technologies" className="py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4 dark:text-white">
          {t.skills.title}
        </h2>
        <p className="text-center text-gray-600 dark:text-white mb-16 max-w-2xl mx-auto">
          {t.skills.description}
        </p>
        <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
          {technologies.map((tech) => (
            <li key={tech.name}>
              <TechCard {...tech} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
