import { useEffect, useState } from "react";
import { Phone, Mail, Github, Copy, Check } from "lucide-react";
import { useLanguage } from "../i18n/useLanguage";

const CONTACTS = [
  {
    icon: Phone,
    title: "WhatsApp",
    value: "+355 69 216 8069",
    link: "https://wa.me/355692168069",
  },
  {
    icon: Mail,
    title: "E-mail",
    value: "dulellari.dion@gmail.com",
    copyable: true,
  },
  {
    icon: Github,
    title: "GitHub",
    value: "github.com/diondulellari",
    link: "https://github.com/diondulellari",
  },
];

function CopyButton({ value }) {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return undefined;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
    } catch {
      // clipboard blocked (insecure context or denied permission)
    }
  };

  const label = copied ? t.contact.copied : t.contact.copy;
  const Icon = copied ? Check : Copy;

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
      title={label}
      aria-label={label}
    >
      <Icon className="w-4 h-4 text-gray-500 dark:text-white" aria-hidden="true" />
      <span className="sr-only" aria-live="polite">
        {copied ? t.contact.copied : ""}
      </span>
    </button>
  );
}

function ContactCard({ icon: Icon, title, value, link, copyable }) {
  const { t } = useLanguage();

  const content = (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow dark:hover:shadow-lg">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center">
          <Icon className="w-5 h-5 text-gray-600" aria-hidden="true" />
        </div>
        <h3 className="ml-3 font-bold text-gray-600 dark:text-white">{title}</h3>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-gray-800 dark:text-white break-all">{value}</p>
        {copyable && <CopyButton value={value} />}
      </div>
    </div>
  );

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block">
      {content}
      <span className="sr-only">{t.contact.opensNewTab}</span>
    </a>
  ) : (
    content
  );
}

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 dark:bg-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
          {t.contact.title}
        </h2>
        <p className="text-center text-gray-600 dark:text-white mb-16 max-w-2xl mx-auto">
          {t.contact.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CONTACTS.map((contact) => (
            <ContactCard key={contact.title} {...contact} />
          ))}
        </div>
      </div>
    </section>
  );
}
