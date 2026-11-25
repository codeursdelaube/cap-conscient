export interface Stat {
  label: string;
  value: number;
  suffix: string;
}

// Valeurs factices — À REMPLACER par les vraies données du client
export const stats: Stat[] = [
  { label: "Enfants accompagnés", value: 1500, suffix: "+" },
  { label: "Formations organisées", value: 120, suffix: "+" },
  { label: "Arbres plantés", value: 5000, suffix: "+" },
  { label: "Bénévoles actifs", value: 200, suffix: "+" },
];
