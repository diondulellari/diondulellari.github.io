import postal from "../assets/Postal.png";
import habit from "../assets/habit.png";
import chicken from "../assets/chicks.png";

// `id` maps to the description in i18n/translations.js (projects.items).
// `live` is optional: cards without it have no link. (grandpost.al and the
// Chick's Run server were offline in Nov 2026, so their links were removed.)
// `imagePosition` optionally changes how the image is cropped (e.g. "object-top").
export const projects = [
  {
    id: "postalService",
    title: "Postal Service System",
    image: postal,
  },
  {
    id: "chicksRun",
    title: "Chick's Run",
    image: chicken,
  },
  {
    id: "hobbit",
    title: "Hobbit",
    image: habit,
  },
];
