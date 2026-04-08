export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  featured: boolean;
}

export interface Skill {
  category: string;
  items: string[];
}
