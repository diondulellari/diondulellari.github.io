import React from "react";
import { Send, Phone, Mail, Linkedin, Github, Copy } from "lucide-react";

const ContactCard = ({ icon: Icon, title, value, link, copyable }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(value);
  };

  const content = (
    <div
      className="bg-white dark:bg-gray-800  rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow dark:hover:shadow-lg
    dark:transition-shadow "
    >
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full  bg-gray-50 dark:bg-gray-800 flex items-center justify-center">
          <Icon className="w-5 h-5 text-gray-600" />
        </div>
        <h3 className="ml-3 font-bold text-gray-600 dark:text-white">
          {title}
        </h3>
      </div>
      <div className="flex items-center justify-between ">
        <p className="text-gray-800 dark:text-white">{value}</p>
        {copyable && (
          <button
            onClick={handleCopy}
            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors "
            title="Copy to clipboard"
          >
            <Copy className="w-4 h-4 text-gray-500 dark:text-white" />
          </button>
        )}
      </div>
    </div>
  );

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block">
      {content}
    </a>
  ) : (
    content
  );
};

export default function Contact() {
  return (
    <section id="contact" className="py-24 dark:bg-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Get in touch
        </h2>
        <p className="text-center text-gray-600 dark:text-white mb-16 max-w-2xl mx-auto">
          Do you have any questions or would like to work together? Contact me
          through one of the channels below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactCard
            icon={Phone}
            title="Whatsapp"
            value="+355 69 824 8319"
            link="https://wa.me/3558248319"
          />
          <ContactCard
            icon={Mail}
            title="E-mail"
            value="dulellari.dion@gmail.com"
            copyable
          />
          <ContactCard
            icon={Linkedin}
            title="Linkedin"
            value="in/diondulellari/"
            link="https://www.linkedin.com/in/diondulellari/"
          />
          <ContactCard
            icon={Github}
            title="Github"
            value="github.com/diondulellari"
            link="https://github.com/diondulellari"
          />
        </div>
      </div>
    </section>
  );
}
