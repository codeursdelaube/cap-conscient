import {
  BookOpen,
  Briefcase,
  Baby,
  HeartPulse,
  Sparkles,
  TreePine,
  Rocket,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Pillar {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  actions: string[];
}

export const pillars: Pillar[] = [
  {
    id: "education",
    title: "Éducation & Alphabétisation",
    description:
      "Accès à l'école, programmes d'alphabétisation pour jeunes et adultes, et soutien scolaire de proximité.",
    icon: BookOpen,
    image: "/education.jpg",
    actions: [
      "Programmes d'alphabétisation pour adultes et jeunes",
      "Bourses et kits scolaires pour les élèves",
      "Soutien scolaire et mentorat éducatif",
      "Sensibilisation à la scolarisation pour tous",
    ],
  },
  {
    id: "formation",
    title: "Formation Professionnelle",
    description:
      "Formations pratiques adaptées au marché de l'emploi et apprentissage qualifiant auprès d'artisans locaux.",
    icon: Briefcase,
    image: "/formationp.jpg",
    actions: [
      "Formations techniques adaptées aux besoins locaux",
      "Apprentissage et compagnonnage auprès d'artisans",
      "Accompagnement vers l'insertion professionnelle",
      "Ateliers de perfectionnement des métiers",
    ],
  },
  {
    id: "enfance",
    title: "Promotion de l'Enfance",
    description:
      "Protection des droits de l'enfant, épanouissement éducatif, ludique et accompagnement des familles.",
    icon: Baby,
    image: "/enfance.jpg",
    actions: [
      "Promotion et défense des droits de l'enfant",
      "Activités éducatives, culturelles et ludiques",
      "Accompagnement des enfants vulnérables",
      "Camps et ateliers d'épanouissement",
    ],
  },
  {
    id: "sante",
    title: "Santé Primaire",
    description:
      "Accès aux soins de santé primaires, prévention, hygiène communautaire et sensibilisation nutritionnelle.",
    icon: HeartPulse,
    image: "/santeprimaire.jpg",
    actions: [
      "Campagnes de sensibilisation et prévention sanitaire",
      "Facilitation de l'accès aux soins primaires",
      "Éducation à l'hygiène et à la santé communautaire",
      "Programmes de nutrition et suivi de proximité",
    ],
  },
  {
    id: "leadership",
    title: "Leadership & Développement Personnel",
    description:
      "Connaissance de soi, éveil du potentiel individuel, prise de responsabilité et engagement citoyen.",
    icon: Sparkles,
    image: "/leadership.jpg",
    actions: [
      "Ateliers de connaissance de soi et développement personnel",
      "Formations au leadership communautaire et citoyen",
      "Programmes de mentorat pour les jeunes",
      "Conférences et cercles d'éveil du potentiel",
    ],
  },
  {
    id: "environnement",
    title: "Environnement",
    description:
      "Reboisement communautaire, protection des espaces verts et gestion durable des ressources naturelles.",
    icon: TreePine,
    image: "/images/actions/environnement.jpg",
    actions: [
      "Campagnes de reboisement communautaire",
      "Sensibilisation à la protection de l'environnement",
      "Gestion durable des ressources naturelles",
      "Assainissement et création d'espaces verts",
    ],
  },
  {
    id: "autonomisation",
    title: "Autonomisation",
    description:
      "Entrepreneuriat communautaire, activités génératrices de revenus, coopératives et groupements solidaires.",
    icon: Rocket,
    image: "/autonomisation.jpg",
    actions: [
      "Formation à l'entrepreneuriat et gestion de projet",
      "Appui aux activités génératrices de revenus",
      "Création et accompagnement de coopératives",
      "Groupements d'épargne et solidarité locale",
    ],
  },
];
