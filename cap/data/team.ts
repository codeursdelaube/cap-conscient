export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export const team: TeamMember[] = [
  {
    name: "YOVO Komivi Mawudem",
    role: "Président",
    image: "/membres/president.png",
  },
  {
    name: "KUAOVI Ohini",
    role: "Chargé d'organisation",
    image: "/membres/charged'organisation.png",
  },
  {
    name: "LOGOSSOU Kossiwa Claire",
    role: "Trésorière",
    image: "/membres/tresoriere.png",
  },
  {
    name: "TOURE-PEGNOUGO Patricia",
    role: "Secrétaire Générale",
    image: "/membres/secretaire_generale.png",
  },
  {
    name: "TAKPA Komitse",
    role: "Chargé de communication",
    image: "/membres/chargedecom.png",
  },
];
