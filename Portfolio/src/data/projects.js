import postal from "../assets/Postal.png";
import habit from "../assets/habit.png";
import chicken from "../assets/chicks.png";

// `id` maps to the description in i18n/translations.js (projects.items).
// `work: true` marks products built at Metasoft360. They have no public
// screenshots or links, so the card shows a title banner instead of an image.
// `live` is optional: cards without it show no button. (grandpost.al and the
// Chick's Run server were offline in Nov 2026, so their links were removed.)
export const projects = [
  {
    id: "jsuite360",
    title: "JSuite360",
    work: true,
  },
  {
    id: "truckmove",
    title: "TruckMove",
    work: true,
  },
  {
    id: "koki",
    title: "Koki",
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
