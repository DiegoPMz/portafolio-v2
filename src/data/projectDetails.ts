import { Clock, Code2, Globe, Layers, Smartphone } from "lucide-react";
import React from "react";

export interface MediaItem {
  type: "image" | "video";
  src: string;
  title: string;
  videoPrev?: string;
}

export interface TechStackItem {
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

export interface Challenge {
  title: string;
  problem: string;
  solution: string;
  impact: string;
  icon: React.ElementType;
}

export interface LearningCategory {
  category: string;
  insights: string[];
}

export interface ProjectStats {
  performanceScore: string;
  loadTime: string;
  accessibility: string;
  seoScore: string;
}

export interface ProjectStoryData {
  problem: string;
  solution: string;
  impact: string;
}

export interface ProjectRoleAndResp {
  category: string;
  responsibilities: string[];
  icon: React.ElementType;
  color: string;
}

export interface TimelinePhase {
  phase: string;
  duration: string;
  description: string;
  deliverables: string[];
  color: string;
}

export interface ProjectDetails {
  title: string;
  description: string;
  projectType: string;
  projectStory: ProjectStoryData;
  create_at: string;
  mediaItems: MediaItem[];
  techStack: TechStackItem[];
  projectMetrics: ProjectMetric[];
  challenges: Challenge[];
  learnings: LearningCategory[];
  projectStats: ProjectStats;
  projectRolAndResp: ProjectRoleAndResp[];
  timelinePhase: TimelinePhase[];
}

export const devLinks: ProjectDetails = {
  title: "DevLinks",
  description:
    "DevLinks es una aplicación que permite a los desarrolladores crear páginas de enlaces personalizadas de manera rápida y sencilla. ",
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
      src: "/demoTest.mp4",
      title: "Demo Interactivo",
      videoPrev: "/videoTestPrevImg.png",
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
      problem:
        "El carrito de compras necesitaba sincronización entre múltiples componentes y persistencia local.",
      solution:
        "Implementé Zustand con middleware de persistencia y optimistic updates para una UX fluida.",
      impact: "Reducción del 40% en abandonos de carrito",
      icon: Layers,
    },
    {
      title: "Performance en Mobile",
      problem:
        "Tiempos de carga lentos en dispositivos móviles afectaban la conversión.",
      solution:
        "Optimización con lazy loading, code splitting y compresión de imágenes.",
      impact: "Mejora del 60% en Core Web Vitals.",
      icon: Smartphone,
    },
    {
      title: "Gestión de Estado Complejo",
      problem:
        "El carrito de compras necesitaba sincronización entre múltiples componentes y persistencia local.",
      solution:
        "Implementé Zustand con middleware de persistencia y optimistic updates para una UX fluida.",
      impact: "Reducción del 40% en abandonos de carrito",
      icon: Layers,
    },
  ],
  learnings: [
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

  projectStats: {
    performanceScore: "100",
    accessibility: "100",
    loadTime: "1s",
    seoScore: "99",
  },

  projectStory: {
    problem:
      "Muchos desarrolladores no tenían una forma centralizada y sencilla de compartir todos sus enlaces importantes.",
    solution:
      "Creé DevLinks, una plataforma simple y personalizable para agrupar y compartir enlaces relevantes en una sola página.",
    impact:
      "DevLinks mejora la presentación de perfiles y facilita el acceso a los recursos.",
  },

  projectRolAndResp: [
    {
      category: "Diseño & UX",
      responsibilities: [
        "Diseño y aplicación de paletas de colores consistentes",
        "Sistema de diseño y componentes",
      ],
      icon: Smartphone,
      color: "from-pink-500/20 to-rose-500/20",
    },
    {
      category: "Frontend Development",
      responsibilities: [
        "Desarrollo con React y Next.js",
        "Implementación responsive",
        "Optimización de performance",
        "Integración de APIs",
      ],
      icon: Globe,
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      category: "Backend Development",
      responsibilities: [
        "Diseño de base de datos",
        "APIs RESTful con Express",
        "Autenticación y autorización",
        "Integración con Cloud storage",
      ],
      icon: Layers,
      color: "from-emerald-500/20 to-green-500/20",
    },
  ],

  timelinePhase: [
    {
      phase: "Investigación & Análisis",
      duration: "Semana 1",
      description:
        "Estudio de mercado, análisis de competencia y definición de requisitos funcionales",
      deliverables: [
        "User personas",
        "Análisis competitivo",
        "Requisitos técnicos",
        "Arquitectura inicial",
      ],
      color: "from-red-400 to-pink-400",
    },
    {
      phase: "Diseño & Prototipado",
      duration: "Semanas 2-3",
      description:
        "Creación del sistema de diseño, wireframes y prototipos interactivos",
      deliverables: [
        "Wireframes",
        "Sistema de diseño",
        "Prototipos Figma",
        "Guía de estilo",
      ],
      color: "from-orange-400 to-yellow-400",
    },
    {
      phase: "Desarrollo MVP",
      duration: "Semanas 4-7",
      description:
        "Implementación de funcionalidades core y estructura base de la aplicación",
      deliverables: [
        "Autenticación",
        "Catálogo productos",
        "Carrito compras",
        "Panel admin",
      ],
      color: "from-green-400 to-emerald-400",
    },
    {
      phase: "Integración & Testing",
      duration: "Semanas 8-9",
      description:
        "Integración de servicios externos, testing exhaustivo y optimización",
      deliverables: [
        "Integración Stripe",
        "Tests E2E",
        "Optimización SEO",
        "Performance tuning",
      ],
      color: "from-blue-400 to-cyan-400",
    },
    {
      phase: "Lanzamiento & Monitoreo",
      duration: "Semana 10",
      description:
        "Deployment en producción, configuración de monitoreo y documentación",
      deliverables: ["CI/CD setup", "Deployment", "Analytics", "Documentación"],
      color: "from-purple-400 to-violet-400",
    },
  ],
};
