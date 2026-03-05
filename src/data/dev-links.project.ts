import desktopAppPreview from "@/assets/devlinks/desktopAppPreview.webp";
import devlinksBrowser from "@/assets/devlinks/devlinksBrowser.webp";
import devlinksDVideo from "@/assets/devlinks/devlinksDVideo.webm";
import devlinksStaticPhones from "@/assets/devlinks/devlinksStaticPhones.webp";
import mobileVideo1Preview from "@/assets/devlinks/mobileVideo1Preview.webp";
import mobileVideo2Preview from "@/assets/devlinks/mobileVideo2Preview.webp";
import mobileVideo3Preview from "@/assets/devlinks/mobileVideo3Preview.webp";
import videoPhone from "@/assets/devlinks/videoPhone.webm";
import videoPhone2 from "@/assets/devlinks/videoPhone2.webm";
import videoPhone3 from "@/assets/devlinks/videoPhone3.webm";
import type { ProjectDetails } from "@/types/project-details";
import {
  Clock,
  Code2,
  Database,
  LayoutGrid,
  Monitor,
  Server,
  Shield,
} from "lucide-react";

export const devLinksProjectDetails: ProjectDetails = {
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
      videoPrev: desktopAppPreview.src,
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
      videoPrev: mobileVideo1Preview.src,
    },
    {
      type: "video",
      src: videoPhone2,
      title: "Interacción móvil 2",
      videoPrev: mobileVideo2Preview.src,
    },
    {
      type: "video",
      src: videoPhone3,
      title: "Interacción móvil 3",
      videoPrev: mobileVideo3Preview.src,
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
      name: "Zustand",
      category: "State Management",
      usage: "Gestión global de estado",
      color: "from-teal-400 to-green-400",
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
      "Facilitó la centralización de enlaces profesionales en una sola página, con interfaces atractivas y personalizables.",
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
      duration: "Semanas 2-8",
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
      duration: "Semana 9",
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
    performanceScore: "100",
    accessibility: "100",
    loadTime: "0.5s",
    seoScore: "91",
  },

  projectMetrics: [
    { label: "Tiempo Desarrollo", value: "10 semanas", icon: Clock },
    { label: "Endpoints API", value: "12+", icon: Code2 },
    { label: "Componentes UI", value: "30+", icon: LayoutGrid },
    { label: "Seguridad", value: "JWT", icon: Shield },
  ],
  metaData: {
    title: "DevLinks -- Diego Pm",
    description:
      "DevLinks es una aplicación que permite a los desarrolladores crear páginas de enlaces personalizadas de manera rápida y sencilla. Estas páginas facilitan la presentación de perfiles, proyectos y otras plataformas en un solo lugar, optimizando la presencia en línea de los profesionales. La aplicación ofrece plantillas personalizables y una interfaz intuitiva, lo que permite a los usuarios diseñar páginas atractivas sin necesidad de conocimientos avanzados en desarrollo web.",
    keywords:
      "DevLinks, aplicación full-stack, páginas de enlaces, enlaces personalizados, desarrolladores, React, TypeScript, Vite, Zustand, Tailwind CSS, Node.js, Express, MongoDB, Zod, interfaz intuitiva, plantillas personalizables, gestión de enlaces, autenticación JWT, API REST, desarrollo frontend, desarrollo backend, plataforma para desarrolladores, presencia en línea, proyecto web, diseño responsive, validación de datos, seguridad web",
  },
};
