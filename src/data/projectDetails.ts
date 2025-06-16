import { Clock, Code2, Globe, Layers, Shield, Smartphone } from "lucide-react";
import React from "react";

interface MediaItem {
  type: "image" | "video";
  src: string;
  title: string;
}

interface TechStackItem {
  name: string;
  category: string;
  usage: string;
  color: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
  icon: React.ElementType;
}

interface Challenge {
  title: string;
  problem: string;
  solution: string;
  impact: string;
  icon: React.ComponentType;
}

interface LearningCategory {
  category: string;
  insights: string[];
}

interface ProjectDetails {
  title: string;
  description: string;
  projectType: string;
  create_at: string;
  mediaItems: MediaItem[];
  techStack: TechStackItem[];
  projectMetrics: ProjectMetric[];
  challenges: Challenge[];
  learnings: LearningCategory[];
}

export const devLinks: ProjectDetails = {
  title: "DevLinks",
  description:
    "DevLinks es una aplicación que permite a los desarrolladores crear páginas de enlaces personalizadas de manera rápida y sencilla. La aplicación ofrece plantillas personalizables y una interfaz intuitiva, lo que permite a los usuarios diseñar páginas atractivas sin necesidad de conocimientos avanzados en desarrollo web",
  create_at: "2024",
  projectType: "",

  mediaItems: [
    {
      type: "image",
      src: "/placeholder.svg?height=600&width=1000&text=Homepage",
      title: "Página Principal",
    },
    {
      type: "video",
      src: "/placeholder.svg?height=600&width=1000&text=Demo Video",
      title: "Demo Interactivo",
    },
    {
      type: "image",
      src: "/placeholder.svg?height=600&width=1000&text=Product Page",
      title: "Página de Producto",
    },
    {
      type: "image",
      src: "/placeholder.svg?height=600&width=1000&text=Checkout",
      title: "Proceso de Compra",
    },
    {
      type: "image",
      src: "/placeholder.svg?height=600&width=1000&text=Admin Panel",
      title: "Panel de Admin",
    },
  ],
  techStack: [
    {
      name: "React",
      category: "Frontend",
      usage: "Librería principal",
      color: "from-blue-400 to-cyan-400",
    },
    {
      name: "TypeScript",
      category: "Language",
      usage: "Tipado",
      color: "from-blue-500 to-indigo-500",
    },
    {
      name: "Tailwind CSS",
      category: "Styling",
      usage: "Diseño",
      color: "from-cyan-400 to-teal-400",
    },
    {
      name: "Express",
      category: "Backend",
      usage: "Api de la App",
      color: "from-purple-400 to-pink-400",
    },
    {
      name: "MongoDb",
      category: "Database",
      usage: "Base de datos principal",
      color: "from-indigo-400 to-purple-400",
    },
    {
      name: "Mongoose",
      category: "Database",
      usage: "Gestión de datos",
      color: "from-emerald-400 to-green-400",
    },
  ],
  projectMetrics: [
    { label: "Tiempo de Desarrollo", value: "26 semanas", icon: Clock },
    { label: "Líneas de Código", value: "10,000+", icon: Code2 },
    { label: "Componentes Creados", value: "35", icon: Layers },
    { label: "APIs Integradas", value: "1", icon: Globe },
  ],
  challenges: [
    {
      title: "Gestión de Estado Complejo",
      problem: "",
      solution: "",
      impact: "",
      icon: Layers,
    },
    {
      title: "",
      problem: "",
      solution: "",
      impact: "",
      icon: Smartphone,
    },
    {
      title: "",
      problem: "",
      solution: "",
      impact: "",
      icon: Shield,
    },
  ],
  learnings: [
    {
      category: "",
      insights: ["", "", ""],
    },
    {
      category: "UX/UI",
      insights: [
        "El diseño mobile-first resulta en mejores experiencias generales",
        "La importancia del feedback visual inmediato en e-commerce",
        "Cómo los micro-interactions mejoran la percepción de calidad",
      ],
    },
    {
      category: "Proceso",
      insights: [
        "Documentar decisiones técnicas facilita el mantenimiento futuro",
        "El feedback temprano de usuarios reales es invaluable",
        "La iteración rápida es más efectiva que la planificación perfecta",
      ],
    },
  ],
};
