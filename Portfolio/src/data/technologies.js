import tailwind from "../assets/tailwind.svg";

export const devicon = (name, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${name}/${name}-${variant}.svg`;

// `invertOnDark` for logos that are solid black and vanish on a dark card.
export const technologies = [
  { name: "Java", icon: devicon("java") },
  { name: "Spring Boot", icon: devicon("spring") },
  { name: "C#", icon: devicon("csharp") },
  { name: ".NET", icon: devicon("dotnetcore") },
  { name: "Blazor", icon: devicon("blazor") },
  { name: "JavaScript", icon: devicon("javascript") },
  { name: "TypeScript", icon: devicon("typescript") },
  { name: "React.js", icon: devicon("react") },
  { name: "Angular", icon: devicon("angular") },
  { name: "Redux", icon: devicon("redux") },
  { name: "HTML5", icon: devicon("html5") },
  { name: "CSS3", icon: devicon("css3") },
  { name: "TailwindCSS", icon: tailwind },
  { name: "Bootstrap", icon: devicon("bootstrap") },
  { name: "Material UI", icon: devicon("materialui") },
  { name: "Figma", icon: devicon("figma") },
  { name: "Vite", icon: devicon("vitejs") },
  { name: "Express", icon: devicon("express"), invertOnDark: true },
  { name: "SQL Server", icon: devicon("microsoftsqlserver") },
  { name: "PostgreSQL", icon: devicon("postgresql") },
  { name: "MongoDB", icon: devicon("mongodb") },
  { name: "Firebase", icon: devicon("firebase", "plain") },
  { name: "Supabase", icon: devicon("supabase") },
  { name: "Git", icon: devicon("git") },
  { name: "GitHub", icon: devicon("github"), invertOnDark: true },
  { name: "Docker", icon: devicon("docker") },
  { name: "Unity", icon: devicon("unity"), invertOnDark: true },
  { name: "Testing", icon: devicon("jest", "plain") },
];
