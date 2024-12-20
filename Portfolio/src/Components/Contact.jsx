import React from "react";
import { Send, Phone, Mail, Linkedin, Github, Copy } from "lucide-react";

const ContactCard = ({ icon: Icon, title, value, link, copyable }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(value);
  };

  const content = (
    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
          <Icon className="w-5 h-5 text-gray-600" />
        </div>
        <h3 className="ml-3 font-bold text-gray-600">{title}</h3>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-gray-800">{value}</p>
        {copyable && (
          <button
            onClick={handleCopy}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            title="Copy to clipboard"
          >
            <Copy className="w-4 h-4 text-gray-500" />
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
    <section id="contact" className="py-24 ">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Get in touch
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Do you have any questions or would like to work together? Contact me
          through one of the channels below. Or if you prefer, fill out the
          contact form and I will get back to you as soon as possible.
        </p>

        <div className="grid md:grid-cols-1 gap-8">
          {/* Contact Cards */}
          <div className="space-y-4">
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
      </div>
    </section>
  );
}
