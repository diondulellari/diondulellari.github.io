import { Briefcase, GraduationCap } from "lucide-react";
import { useLanguage } from "../i18n/useLanguage";

const CARD_CLASS =
  "bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow dark:hover:shadow-lg";

const ICON_WRAP_CLASS =
  "w-10 h-10 shrink-0 rounded-full bg-gray-50 dark:bg-gray-700 flex items-center justify-center";

export default function Experience() {
  const { t } = useLanguage();
  const { experience } = t;

  return (
    <section id="experience" className="py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
          {experience.title}
        </h2>
        <p className="text-center text-gray-600 dark:text-white mb-16 max-w-2xl mx-auto">
          {experience.description}
        </p>

        <div className="space-y-8">
          {experience.jobs.map((job) => (
            <article key={`${job.company}-${job.period}`} className={CARD_CLASS}>
              <div className="flex items-start gap-3 mb-4">
                <div className={ICON_WRAP_CLASS}>
                  <Briefcase
                    className="w-5 h-5 text-gray-600 dark:text-gray-300"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 dark:text-white">
                    {job.role} · {job.company}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {job.period} · {job.location}
                  </p>
                </div>
              </div>
              <ul className="list-disc space-y-2 pl-5 text-gray-600 dark:text-gray-200 marker:text-gray-400">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}

          <article className={CARD_CLASS}>
            <div className="flex items-start gap-3">
              <div className={ICON_WRAP_CLASS}>
                <GraduationCap
                  className="w-5 h-5 text-gray-600 dark:text-gray-300"
                  aria-hidden="true"
                />
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  {experience.educationTitle}
                </p>
                <h3 className="font-bold text-gray-800 dark:text-white">
                  {experience.education.degree}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {experience.education.school} · {experience.education.location}
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
