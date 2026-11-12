import { ExternalLink, Briefcase } from "lucide-react";
import { projects } from "../data/projects";
import { useLanguage } from "../i18n/useLanguage";

function ProjectCard({ project }) {
  const { t } = useLanguage();

  const image = (
    <div className="relative">
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className={`w-full h-64 object-cover ${project.imagePosition ?? ""}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
    </div>
  );

  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 dark:bg-gray-800 dark:shadow-md dark:hover:shadow-lg">
      {project.live ? (
        // Mouse shortcut to the site; keyboard and screen-reader users get the
        // labelled "Live" button below, so this copy is skipped for them.
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={-1}
          aria-hidden="true"
          className="block"
        >
          {image}
        </a>
      ) : (
        image
      )}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
          {project.title}
        </h3>
        {project.work && (
          <p className="inline-flex items-center gap-1.5 mb-3 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-200">
            <Briefcase className="h-3.5 w-3.5" aria-hidden="true" />
            {t.projects.workBadge}
          </p>
        )}
        <p className="text-gray-600 dark:text-white mb-4">
          {t.projects.items[project.id]}
        </p>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.projects.liveLabel.replace("{title}", project.title)}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            <ExternalLink size={18} className="mr-2" aria-hidden="true" />
            {t.projects.live}
          </a>
        )}
      </div>
    </article>
  );
}

function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-20 dark:bg-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">
          {t.projects.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
