import WITWBrowserMockup from "@/assets/WITW/WITWBrowser.webp";
import WITWStaticPhonesMockup from "@/assets/WITW/WITWStaticPhones..webp";
import WITWAppDesktopVideo from "@/assets/WITW/WITWVBrowserVideo.webm";
import WITWVideoPhone1 from "@/assets/WITW/WITWVideoPhone1.webm";
import WITWVideoPhone2 from "@/assets/WITW/WITWVideoPhone2.webm";
import WITWVideoPhone3 from "@/assets/WITW/WITWVideoPhone3.webm";

import WITWAppDesktopVideoPreview from "@/assets/WITW/WITWAppDesktopVideoPreview.webp";
import WITWVideophone1Preview from "@/assets/WITW/WITWVideophone1Preview.webp";
import WITWVideophone2Preview from "@/assets/WITW/WITWVideophone2Preview.webp";
import WITWVideophone3Preview from "@/assets/WITW/WITWVideophone3Preview.webp";
import type { ProjectDetails } from "@/types/project-details";
import {
  Clock,
  Code2,
  Database,
  Globe,
  LayoutGrid,
  Link,
  List,
  Monitor,
  Smartphone,
} from "lucide-react";

export const whereInTheWorldProjectDetails: ProjectDetails = {
  title: "Where in the world",
  description:
    "Aplicación frontend que proporciona información detallada sobre todos los países del mundo, permitiendo búsqueda por nombre o región, con datos como población, capital y características geográficas.",
  create_at: "2023",
  projectType: "Frontend",
  projectLinks: {
    github: "https://github.com/DiegoPMz/where-in-the-world",
    live: "https://where-in-the-world-ashy.vercel.app/",
  },

  mediaItems: [
    {
      type: "image",
      src: WITWBrowserMockup.src,
      title: "Versión escritorio",
    },
    {
      type: "video",
      src: WITWAppDesktopVideo,
      title: "Interacción escritorio",
      videoPrev: WITWAppDesktopVideoPreview.src,
    },
    {
      type: "image",
      src: WITWStaticPhonesMockup.src,
      title: "Vista móvil - Temas",
    },
    {
      type: "video",
      src: WITWVideoPhone1,
      title: "Interacción móvil 1",
      videoPrev: WITWVideophone1Preview.src,
    },
    {
      type: "video",
      src: WITWVideoPhone2,
      title: "Interacción móvil 2",
      videoPrev: WITWVideophone2Preview.src,
    },
    {
      type: "video",
      src: WITWVideoPhone3,
      title: "Interacción móvil 3",
      videoPrev: WITWVideophone3Preview.src,
    },
  ],

  techStack: [
    {
      name: "React",
      category: "Frontend",
      usage: "Construcción de interfaz de usuario",
      color: "from-blue-400 to-cyan-400",
    },
    {
      name: "Vite",
      category: "Tooling",
      usage: "Bundler y entorno de desarrollo",
      color: "from-purple-400 to-pink-400",
    },
    {
      name: "React Router",
      category: "Navigation",
      usage: "Gestión de rutas y navegación",
      color: "from-red-400 to-orange-400",
    },
    {
      name: "JavaScript",
      category: "Language",
      usage: "Lógica de aplicación",
      color: "from-yellow-400 to-yellow-500",
    },
    {
      name: "HTML5",
      category: "Markup",
      usage: "Estructura base",
      color: "from-orange-400 to-red-400",
    },
    {
      name: "CSS3",
      category: "Styling",
      usage: "Estilos y diseño responsive",
      color: "from-blue-500 to-indigo-500",
    },
  ],

  projectStory: {
    problem:
      "Falta de una interfaz accesible y organizada para consultar información detallada sobre países del mundo",
    solution:
      "Aplicación con búsqueda avanzada, filtros por región y visualización de datos clave",
    impact:
      "Acceso rápido a información geopolítica relevante para estudiantes, viajeros y curiosos",
  },

  projectRolAndResp: [
    {
      category: "Frontend Development",
      responsibilities: [
        "Implementación completa de la interfaz",
        "Integración con API de países",
        "Desarrollo de componentes reutilizables",
        "Optimización de performance",
      ],
      icon: Monitor,
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      category: "UX/UI",
      responsibilities: [
        "Maquetación basada en diseño Figma",
        "Implementación responsive",
        "Mejora de interacciones de usuario",
      ],
      icon: Smartphone,
      color: "from-purple-500/20 to-pink-500/20",
    },
  ],

  timelinePhase: [
    {
      phase: "Planificación",
      duration: "Semana 1",
      description: "Definición de arquitectura y flujos de usuario",
      deliverables: [
        "Diagramas de rutas en Excalidraw",
        "Estrategia de gestión de estado",
        "Selección tecnológica",
      ],
      color: "from-orange-400 to-yellow-400",
    },
    {
      phase: "Implementación Core",
      duration: "Semanas 2-3",
      description: "Desarrollo de funcionalidades principales",
      deliverables: [
        "Sistema de búsqueda y filtrado",
        "Integración con API",
        "Vista detalle de países",
      ],
      color: "from-green-400 to-emerald-400",
    },
    {
      phase: "Optimización",
      duration: "Semana 4",
      description: "Mejoras de UX y componentes complejos",
      deliverables: [
        "Sistema de paginación personalizado",
        "Sincronización estado-URL",
        "Validación de datos",
      ],
      color: "from-blue-400 to-cyan-400",
    },
  ],

  challenges: [
    {
      title: "Sincronización Estado-URL",
      problem:
        "Necesidad de mantener consistencia entre parámetros de URL y estado de la aplicación",
      solution:
        "Desarrollo de hook personalizado que gestiona ambos aspectos de forma unificada",
      impact: "Navegación consistente al compartir enlaces o refrescar página",
      icon: Link,
    },
    {
      title: "Paginación Compleja",
      problem:
        "API sin soporte nativo para paginación, devolviendo todos los países en cada request",
      solution: "Hook personalizado que maneja lógica de paginación en cliente",
      impact: "Reducción del 70% en carga inicial de datos",
      icon: List,
    },
    {
      title: "Gestión de Datos API",
      problem: "Estructura irregular de datos en la API externa",
      solution:
        "Normalización y validación de datos con helpers especializados",
      impact: "Consistencia en la visualización de información",
      icon: Database,
    },
  ],

  learnings: [
    {
      category: "Gestión de Estado",
      insights: [
        "Importancia de sincronizar estado con navegación",
        "Ventajas de hooks personalizados para lógica compleja",
        "Estrategias para normalizar datos de APIs externas",
      ],
    },
    {
      category: "UX Avanzado",
      insights: [
        "Patrones efectivos para sistemas de filtrado",
        "Diseño de componentes de paginación accesibles",
        "Optimización de carga progresiva de datos",
      ],
    },
  ],

  projectStats: {
    performanceScore: "96",
    accessibility: "98",
    loadTime: "1.4s",
    seoScore: "89",
  },

  projectMetrics: [
    { label: "Países indexados", value: "250+", icon: Globe },
    { label: "Componentes UI", value: "20+", icon: LayoutGrid },
    { label: "Hooks personalizados", value: "4", icon: Code2 },
    { label: "Tiempo desarrollo", value: "4 semanas", icon: Clock },
  ],
  metaData: {
    title: "Where in the world -- Diego Pm",
    description:
      "Aplicación frontend que ofrece información detallada sobre países, con búsqueda avanzada y filtros por región. Desarrollada con React y Vite, brinda una experiencia responsive y accesible.",
    keywords:
      "Where in the world, aplicación frontend, información países, búsqueda por región, datos geográficos, React, Vite, React Router, JavaScript, HTML5, CSS3, interfaz responsiva, API de países, filtros avanzados, paginación, UX, desarrollo frontend, geopolítica, datos demográficos, desarrollo web",
  },
};
