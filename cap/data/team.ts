export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

// Données factices — à remplacer par les vrais membres
export const team: TeamMember[] = [
  {
    name: "Membre à définir",
    role: "Président(e)",
    image: "/images/team/membre-1.jpg",
  },
  {
    name: "Membre à définir",
    role: "Secrétaire Général(e)",
    image: "/images/team/membre-2.jpg",
  },
  {
    name: "Membre à définir",
    role: "Trésorier(ère)",
    image: "/images/team/membre-3.jpg",
  },
  {
    name: "Membre à définir",
    role: "Chargé(e) de l'organisation",
    image: "/images/team/membre-4.jpg",
  },
  {
    name: "Membre à définir",
    role: "Chargé(e) de communication",
    image: "/images/team/membre-5.jpg",
  },
];
