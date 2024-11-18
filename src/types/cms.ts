export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  text: string;
  image?: string;
}

export interface User {
  id: string;
  email: string;
  role: 'admin' | 'editor';
}