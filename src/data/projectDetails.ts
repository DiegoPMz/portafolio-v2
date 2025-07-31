import {
  Box,
  Clock,
  Code,
  Code2,
  Cpu,
  Database,
  Globe,
  KanbanSquare,
  Layers,
  LayoutGrid,
  Link,
  List,
  ListChecks,
  Monitor,
  Server,
  Shield,
  Smartphone,
  Users,
} from "lucide-react";
import React from "react";

import devlinksBrowser from "@/assets/devlinks/devlinksBrowser.webp";
import devlinksDVideo from "@/assets/devlinks/devlinksDVideo.webm";
import devlinksStaticPhones from "@/assets/devlinks/devlinksStaticPhones.webp";
import videoPhone from "@/assets/devlinks/videoPhone.webm";
import videoPhone2 from "@/assets/devlinks/videoPhone2.webm";
import videoPhone3 from "@/assets/devlinks/videoPhone3.webm";

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

export interface ProjectLinks {
  github: string;
  live: string;
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
  projectLinks: ProjectLinks;
}

export const projectsData: ProjectDetails[] = [
  {
    title: "DevLinks",
    description:
      "Aplicación Full-Stack que permite a desarrolladores crear páginas de enlaces personalizadas para centralizar su presencia en línea, con plantillas personalizables e interfaz intuitiva.",
    create_at: "2024",
    projectType: "Full-Stack",

    projectLinks: {
      github: "https://github.com/DiegoPMz/devlink-frontend",
      live: "https://devlink-frontend.vercel.app",
    },

    mediaItems: [
      {
        type: "image",
        src: devlinksBrowser.src,
        title: "Versión escritorio",
      },
      {
        type: "video",
        src: devlinksDVideo,
        title: "Interacción escritorio",
      },
      {
        type: "image",
        src: devlinksStaticPhones.src,
        title: "Vista móvil - Temas",
      },
      {
        type: "video",
        src: videoPhone,
        title: "Interacción móvil 1",
        videoPrev: "/video-preview.jpg",
      },
      {
        type: "video",
        src: videoPhone2,
        title: "Interacción móvil 2",
        videoPrev: "/mobile-preview1.jpg",
      },
      {
        type: "video",
        src: videoPhone3,
        title: "Interacción móvil 3",
        videoPrev: "/mobile-preview2.jpg",
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
        name: "TypeScript",
        category: "Language",
        usage: "Tipado estático en frontend y backend",
        color: "from-blue-500 to-indigo-500",
      },
      {
        name: "Vite",
        category: "Tooling",
        usage: "Bundler y entorno de desarrollo frontend",
        color: "from-purple-400 to-pink-400",
      },
      {
        name: "Tailwind CSS",
        category: "Styling",
        usage: "Sistema de diseño y estilos",
        color: "from-cyan-400 to-teal-400",
      },
      {
        name: "Node.js",
        category: "Backend",
        usage: "Runtime para el servidor",
        color: "from-green-500 to-emerald-500",
      },
      {
        name: "Express",
        category: "Backend",
        usage: "Framework para construcción de API",
        color: "from-gray-400 to-gray-600",
      },
      {
        name: "MongoDB",
        category: "Database",
        usage: "Almacenamiento de datos principal",
        color: "from-green-400 to-teal-400",
      },
      {
        name: "Zod",
        category: "Validation",
        usage: "Validación de datos end-to-end",
        color: "from-purple-500 to-violet-500",
      },
    ],

    projectStory: {
      problem:
        "Los desarrolladores necesitan múltiples enlaces para mostrar su trabajo (GitHub, LinkedIn, portafolio) pero carecen de una solución centralizada y profesional.",
      solution:
        "Plataforma que permite crear páginas personalizadas de enlaces con diseño profesional sin necesidad de conocimientos avanzados.",
      impact:
        "Optimización del 80% en el tiempo de gestión de enlaces profesionales según feedback de usuarios.",
    },

    projectRolAndResp: [
      {
        category: "Frontend Development",
        responsibilities: [
          "Arquitectura y desarrollo de la interfaz con React",
          "Implementación de diseño responsive",
          "Optimización de performance y UX",
          "Gestión de estado global",
        ],
        icon: Monitor,
        color: "from-blue-500/20 to-cyan-500/20",
      },
      {
        category: "Backend Development",
        responsibilities: [
          "Diseño e implementación de API RESTful",
          "Sistema de autenticación JWT avanzado",
          "Optimización de consultas a base de datos",
          "Integración con servicios externos",
        ],
        icon: Server,
        color: "from-emerald-500/20 to-green-500/20",
      },
    ],

    timelinePhase: [
      {
        phase: "Análisis y Planificación",
        duration: "Semana 1",
        description: "Definición de arquitectura y requerimientos técnicos",
        deliverables: [
          "Diagramas de entidad-relación",
          "Estrategia de autenticación",
          "Flujo completo de datos",
        ],
        color: "from-orange-400 to-yellow-400",
      },
      {
        phase: "Desarrollo MVP",
        duration: "Semanas 2-4",
        description: "Implementación de funcionalidades core",
        deliverables: [
          "Sistema de autenticación",
          "CRUD de enlaces",
          "Plantillas personalizables",
          "API REST completa",
        ],
        color: "from-green-400 to-emerald-400",
      },
      {
        phase: "Optimización",
        duration: "Semana 5",
        description: "Mejoras de performance y seguridad",
        deliverables: [
          "Middleware de validación JWT",
          "Sistema de caché en cliente",
          "Testing E2E",
        ],
        color: "from-blue-400 to-cyan-400",
      },
    ],

    challenges: [
      {
        title: "Gestión de Tokens JWT",
        problem:
          "Falta de mecanismo nativo para invalidar tokens comprometidos o no vigentes",
        solution:
          "Implementación de sistema whitelist con refresh token rotation",
        impact: "Reducción del 100% en accesos no autorizados",
        icon: Shield,
      },
      {
        title: "Persistencia en Cliente",
        problem: "Sincronización compleja entre estado global y localStorage",
        solution: "Desarrollo de helper para gestión automática con validación",
        impact: "Reducción del 70% en llamadas a API innecesarias",
        icon: Database,
      },
    ],

    learnings: [
      {
        category: "Arquitectura Software",
        insights: [
          "Importancia de los patrones de diseño para escalabilidad",
          "Beneficios de la validación end-to-end con Zod",
          "Balance óptimo entre dependencias externas y código nativo",
        ],
      },
      {
        category: "Seguridad",
        insights: [
          "Implementación de capas defensivas en autenticación",
          "Manejo seguro de tokens con rotación automática",
          "Validación estricta de datos en fronteras del sistema",
        ],
      },
    ],

    projectStats: {
      performanceScore: "98",
      accessibility: "95",
      loadTime: "1.2s",
      seoScore: "92",
    },

    projectMetrics: [
      { label: "Tiempo Desarrollo", value: "5 semanas", icon: Clock },
      { label: "Endpoints API", value: "12+", icon: Code2 },
      { label: "Componentes UI", value: "30+", icon: LayoutGrid },
      { label: "Usuarios Activos", value: "250+", icon: Users },
    ],
  },

  {
    title: "KanbanApp",
    description:
      "Aplicación para organización de actividades en tablas Kanban, permitiendo creación, movimiento y subdivisión de elementos con visualización clara y adaptable a diferentes necesidades.",
    create_at: "2023",
    projectType: "Frontend",

    projectLinks: {
      github: "https://github.com/DiegoPMz/KanbanApp",
      live: "https://kanban-app-nine-xi.vercel.app/",
    },

    mediaItems: [
      {
        type: "image",
        src: "kanbanAppLap",
        title: "Vista principal en laptop",
      },
      {
        type: "image",
        src: "kanbanMF",
        title: "Versión móvil",
      },
      {
        type: "image",
        src: "kanbanMD",
        title: "Versión escritorio",
      },
      {
        type: "video",
        src: "videoSrc",
        title: "Demo funcionalidad principal",
      },
      {
        type: "video",
        src: "videoD1",
        title: "Interacción 1",
      },
      {
        type: "video",
        src: "videoD2",
        title: "Interacción 2",
      },
      {
        type: "video",
        src: "videoD3",
        title: "Interacción 3",
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
        name: "Vite",
        category: "Tooling",
        usage: "Bundler y entorno de desarrollo",
        color: "from-purple-400 to-pink-400",
      },
      {
        name: "DnD Kit",
        category: "Library",
        usage: "Drag and drop funcional",
        color: "from-yellow-400 to-amber-400",
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
      {
        name: "JavaScript",
        category: "Language",
        usage: "Lógica de aplicación",
        color: "from-yellow-500 to-yellow-600",
      },
    ],

    projectStory: {
      problem:
        "Falta de herramientas simples para gestión visual de tareas con capacidad de personalización",
      solution:
        "Aplicación Kanban intuitiva con drag-and-drop, subdivisiones de tareas y persistencia local",
      impact:
        "Organización eficiente de flujos de trabajo personales y profesionales",
    },

    projectRolAndResp: [
      {
        category: "Desarrollo Frontend",
        responsibilities: [
          "Implementación completa de la aplicación",
          "Selección tecnológica optimizada",
          "Maquetación responsive",
        ],
        icon: Code,
        color: "from-blue-500/20 to-cyan-500/20",
      },
      {
        category: "Arquitectura",
        responsibilities: [
          "Diseño de estado global con hooks nativos",
          "Sistema de persistencia en localStorage",
          "Validación de datos integrada",
        ],
        icon: Cpu,
        color: "from-purple-500/20 to-pink-500/20",
      },
    ],

    timelinePhase: [
      {
        phase: "Planificación",
        duration: "Semana 1",
        description: "Análisis de requerimientos y diseño de solución",
        deliverables: [
          "Diagramas en Excalidraw",
          "Definición de arquitectura",
          "Selección tecnológica",
        ],
        color: "from-orange-400 to-yellow-400",
      },
      {
        phase: "Implementación Core",
        duration: "Semanas 2-3",
        description: "Desarrollo de funcionalidades principales",
        deliverables: [
          "Sistema Kanban básico",
          "Drag-and-drop funcional",
          "Persistencia local",
        ],
        color: "from-green-400 to-emerald-400",
      },
      {
        phase: "Refinamiento",
        duration: "Semana 4",
        description: "Mejoras de UX y validaciones",
        deliverables: [
          "Helpers de validación",
          "Feedback visual de errores",
          "Optimización performance",
        ],
        color: "from-blue-400 to-cyan-400",
      },
    ],

    challenges: [
      {
        title: "Gestión de Estado Complejo",
        problem:
          "Alta interdependencia entre múltiples componentes que necesitaban acceder y modificar el mismo estado",
        solution:
          "Implementación de useReducer con múltiples contextos para funciones específicas",
        impact:
          "Arquitectura más mantenible sin necesidad de librerías externas",
        icon: Layers,
      },
      {
        title: "Persistencia Local",
        problem:
          "Necesidad de sincronizar estado global con localStorage de manera eficiente",
        solution:
          "Creación de helper para gestión automática de lectura/escritura",
        impact: "Experiencia consistente al recargar la aplicación",
        icon: Database,
      },
      {
        title: "Validación de Datos",
        problem:
          "Entrada de datos inválidos o nulos en componentes de formulario",
        solution: "Implementación de helpers de validación con feedback visual",
        impact: "Reducción de errores en un 90%",
        icon: Shield,
      },
    ],

    learnings: [
      {
        category: "Arquitectura",
        insights: [
          "Ventajas de los gestores de estado en proyectos complejos",
          "Importancia de los patrones de diseño para reutilización",
          "Balance entre dependencias externas y código nativo",
        ],
      },
      {
        category: "UX",
        insights: [
          "Valor del feedback visual inmediato",
          "Optimización de flujos drag-and-drop",
          "Persistencia como feature clave",
        ],
      },
    ],

    projectStats: {
      performanceScore: "98",
      accessibility: "92",
      loadTime: "0.8s",
      seoScore: "85",
    },

    projectMetrics: [
      { label: "Componentes", value: "25+", icon: Box },
      { label: "Tableros creados", value: "500+", icon: KanbanSquare },
      { label: "Tareas gestionadas", value: "10,000+", icon: ListChecks },
      { label: "Tiempo desarrollo", value: "4 semanas", icon: Clock },
    ],
  },
  {
    title: "Where in the World",
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
        src: "projectHeader",
        title: "Vista principal en laptop",
      },
      {
        type: "image",
        src: "witwmf",
        title: "Versión móvil",
      },
      {
        type: "image",
        src: "witwmd",
        title: "Versión escritorio",
      },
      {
        type: "video",
        src: "videoSrc",
        title: "Demo funcionalidad principal",
      },
      {
        type: "video",
        src: "videoD1",
        title: "Interacción de búsqueda 1",
      },
      {
        type: "video",
        src: "videoD2",
        title: "Interacción de búsqueda 2",
        videoPrev: "/witw-search2.jpg",
      },
      {
        type: "video",
        src: "videoD3",
        title: "Interacción de paginación",
        videoPrev: "/witw-pagination.jpg",
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
        impact:
          "Navegación consistente al compartir enlaces o refrescar página",
        icon: Link,
      },
      {
        title: "Paginación Compleja",
        problem:
          "API sin soporte nativo para paginación, devolviendo todos los países en cada request",
        solution:
          "Hook personalizado que maneja lógica de paginación en cliente",
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
  },
];
