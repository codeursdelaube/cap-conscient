export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: "education" | "sante" | "environnement" | "evenements";
}

export const galleryImages: GalleryImage[] = [
  {
    id: "g-01",
    src: "/education.jpg",
    alt: "Éducation et alphabétisation au sein de la communauté",
    category: "education",
  },
  {
    id: "g-02",
    src: "/enfance.jpg",
    alt: "Promotion de l'enfance et épanouissement",
    category: "education",
  },
  {
    id: "g-03",
    src: "/formationp.jpg",
    alt: "Formation professionnelle et apprentissage",
    category: "evenements",
  },
  {
    id: "g-04",
    src: "/santeprimaire.jpg",
    alt: "Actions de santé primaire et prévention",
    category: "sante",
  },
  {
    id: "g-05",
    src: "/leadership.jpg",
    alt: "Atelier de leadership et développement personnel",
    category: "evenements",
  },
  {
    id: "g-06",
    src: "/autonomisation.jpg",
    alt: "Autonomisation et entrepreneuriat communautaire",
    category: "evenements",
  },
  {
    id: "g-07",
    src: "/images/actions/environnement.jpg",
    alt: "Reboisement et protection de l'environnement",
    category: "environnement",
  },
  {
    id: "g-08",
    src: "/im5.jpg",
    alt: "Moments de partage communautaire à Lomé",
    category: "evenements",
  },
];

export const galleryCategories = [
  { value: "all", label: "Tout" },
  { value: "education", label: "Éducation" },
  { value: "sante", label: "Santé" },
  { value: "environnement", label: "Environnement" },
  { value: "evenements", label: "Événements" },
] as const;
