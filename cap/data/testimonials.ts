export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  image?: string;
}

// Données factices — à remplacer par de vrais témoignages
export const testimonials: Testimonial[] = [
  {
    id: "t-1",
    quote:
      "Grâce à CAP CONSCIENT, j'ai découvert mon potentiel et aujourd'hui je suis un acteur de changement dans ma communauté.",
    author: "Kofi A.",
    role: "Bénéficiaire du programme Éveil",
  },
  {
    id: "t-2",
    quote:
      "L'association a transformé notre quartier. Les enfants vont à l'école, les jeunes se forment et notre environnement reverdit.",
    author: "Ama D.",
    role: "Habitante d'Adidogomé",
  },
  {
    id: "t-3",
    quote:
      "Être bénévole chez CAP CONSCIENT m'a appris que chaque petit geste compte. Ensemble, on fait une vraie différence.",
    author: "Yao K.",
    role: "Bénévole",
  },
];
