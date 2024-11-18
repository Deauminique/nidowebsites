export interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface ProjectItem {
  title: string;
  description: string;
  image: string;
}

export interface ProcessStep {
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}