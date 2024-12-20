import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-white text-black border-t py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="mb-4 md:mb-0">
            <p>© Made by Dion Dulellari, 2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
