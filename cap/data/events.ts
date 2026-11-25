export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
}

// Données factices — à remplacer. Section masquée si tableau vide.
export const events: Event[] = [
  {
    id: "evt-1",
    title: "Journée de reboisement communautaire",
    date: "2027-01-15",
    location: "Adidogomé, Lomé",
    description:
      "Grande campagne de plantation d'arbres avec les jeunes du quartier. Objectif : 500 arbres plantés en une journée.",
  },
  {
    id: "evt-2",
    title: "Atelier d'éveil et de leadership",
    date: "2027-02-10",
    location: "Centre communautaire, Lomé",
    description:
      "Formation de deux jours sur la connaissance de soi et le leadership pour les jeunes de 18 à 30 ans.",
  },
  {
    id: "evt-3",
    title: "Camp de vacances éducatif",
    date: "2027-03-20",
    location: "Kpalimé, Togo",
    description:
      "Une semaine d'activités éducatives et ludiques pour les enfants des communautés rurales.",
  },
];
