export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  demoUrl: string;
  githubUrl?: string;
  featured: boolean;
  createdAt?: Date;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  color: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface NavItem {
  href: string;
  label: string;
  icon?: string;
}
