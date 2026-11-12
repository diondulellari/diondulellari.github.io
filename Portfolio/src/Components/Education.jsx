import { GraduationCap } from "lucide-react";
import { useLanguage } from "../i18n/useLanguage";

export default function Education() {
  const { t } = useLanguage();
  const { education } = t;

  return (
    <section id="education" className="py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
          {education.title}
        </h2>
        <p className="text-center text-gray-600 dark:text-white mb-16 max-w-2xl mx-auto">
          {education.description}
        </p>

        <article className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow dark:hover:shadow-lg">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 shrink-0 rounded-full bg-gray-50 dark:bg-gray-700 flex items-center justify-center">
              <GraduationCap
                className="w-5 h-5 text-gray-600 dark:text-gray-300"
                aria-hidden="true"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-800 dark:text-white">
                {education.degree}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {education.school} · {education.location}
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
