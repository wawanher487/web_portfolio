export interface Siteconfig {
  name: string;
  title: string;
  email: string;
  github: string;
  linkedin: string;
  tagline: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  github: string;
  live?: string;
  featured: boolean;
  accentColor: "orange" | "green" | "cyan";
  number: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface SkillItem {
  name: string;
  level: number; // 0-100
}

export interface SkillCategory {
  category: string;
  icon: string;
  color: "cyan" | "indigo" | "violet";
  items: SkillItem[];
}

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingPackage {
  id: string;
  name: string;
  subtitle: string;
  priceRange: string;
  description: string;
  color: "cyan" | "indigo" | "violet";
  popular: boolean;
  features: PricingFeature[];
  cta: string;
}
