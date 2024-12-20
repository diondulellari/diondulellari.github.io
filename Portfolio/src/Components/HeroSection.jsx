import React from "react";
import githubIcon from "../assets/githubIcon.svg";
import gIcon from "../assets/gIcon.png";
export function HeroSection() {
  return (
    <section
      id="main"
      className="flex flex-col items-center justify-center gap-4 px-4 py-24 md:py-32"
    >
      <button
        className="bg-black relative flex items-center px-4 py-2 bg-secondary text-white rounded-md group hover:bg-secondary-dark transition"
        onClick={() =>
          window.open(
            "https://github.com/diondulellari",
            "_blank",
            "noopener noreferrer"
          )
        }
      >
        Check my GitHub
        <img
          src={gIcon}
          alt="GitHub Icon"
          className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
        />
      </button>

      <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
        Combining logic and creativity
        <span className="block">to build exceptional applications.</span>
      </h1>

      <p className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl">
        Hi, I'm Dion Dulellari, a full-stack developer with expertise in both
        frontend and backend development. Passionate about creating seamless,
        user-centric applications that make a difference.
      </p>
    </section>
  );
}
