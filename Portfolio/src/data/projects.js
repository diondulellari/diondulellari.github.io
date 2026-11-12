import postal from "../assets/Postal.png";
import habit from "../assets/habit.png";
import chicken from "../assets/chicks.png";
import jsuite360 from "../assets/jsuite360.jpg";
import truckmove from "../assets/truckmove.jpg";

// `id` maps to the description in i18n/translations.js (projects.items).
// `work: true` marks products built at Metasoft360 (shows a badge).
// `live` is optional: cards without it have no link. (grandpost.al and the
// Chick's Run server were offline in Nov 2026, so their links were removed.)
// `imagePosition` crops website screenshots from the top so the logo shows.
export const projects = [
  {
    id: "jsuite360",
    title: "JSuite360",
    work: true,
    image: jsuite360,
    imagePosition: "object-top",
    live: "https://jsuite360.it/",
  },
  {
    id: "truckmove",
    title: "TruckMove",
    work: true,
    image: truckmove,
    imagePosition: "object-top",
    live: "https://truckmove.it/",
  },
  {
    id: "postalService",
    title: "Postal Service",
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
