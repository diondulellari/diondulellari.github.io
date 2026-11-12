import tailwind from "../assets/tailwind.svg";

export const devicon = (name, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${name}/${name}-${variant}.svg`;

// `invertOnDark` for logos that are solid black and vanish on a dark card.
export const technologies = [
  { name: "C#", icon: devicon("csharp") },
  { name: ".NET", icon: devicon("dotnetcore") },
  { name: "Blazor", icon: devicon("blazor") },
  { name: "Angular", icon: devicon("angular") },
  { name: "React", icon: devicon("react") },
  { name: "Redux", icon: devicon("redux") },
  { name: "JavaScript", icon: devicon("javascript") },
  { name: "Java", icon: devicon("java") },
  { name: "Spring Boot", icon: devicon("spring") },
  { name: "SQL Server", icon: devicon("microsoftsqlserver") },
  { name: "PostgreSQL", icon: devicon("postgresql") },
  { name: "HTML5", icon: devicon("html5") },
  { name: "CSS3", icon: devicon("css3") },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Vite", icon: devicon("vitejs") },
  { name: "Unity", icon: devicon("unity"), invertOnDark: true },
  { name: "Git", icon: devicon("git") },
  { name: "GitHub", icon: devicon("github"), invertOnDark: true },
];
