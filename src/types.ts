import { ReactNode } from "react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  details: string[];
  fullDescription?: string;
  image?: string;
}

export interface Stat {
  label: string;
  value: string;
}
