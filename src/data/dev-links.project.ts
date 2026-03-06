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
import previewDevLinks from "@/assets/home/previewDevLinks.webp";
import type { ProjectDetails } from "@/types/project-details";
import type { ProjectIntroduction } from "@/types/project-introduction";
import {
  Database,
  Lock,
  Monitor,
  RefreshCw,
  Shield,
  ShieldCheck,
  Zap,
} from "lucide-react";

export const devLinksProjectDetails: ProjectDetails = {
  title: "DevLinks",
  description:
    "Ecosistema Full-Stack diseñado para desarrolladores que buscan centralizar su identidad digital. Ofrece una experiencia de edición en tiempo real con persistencia de datos robusta y un sistema de seguridad avanzado.",
  create_at: "2024",
  projectType: "Full-Stack",

  projectLinks: {
    github: "https://github.com/DiegoPMz/devlink-frontend",
    live: "https://devlink-frontend.vercel.app",
  },

  projectMetrics: [
    {
      label: "Arquitectura",
      value: "E2E Type-Safe",
      icon: ShieldCheck,
    },
    {
      label: "Seguridad Auth",
      value: "Token Rotation",
      icon: Lock,
    },
    {
      label: "Sincronización",
      value: "Optimistic UI",
      icon: RefreshCw,
    },
    {
      label: "Rendimiento",
      value: "100/100 Lighthouse",
      icon: Zap,
    },
  ],

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
      name: "React & TypeScript",
      category: "Frontend",
      usage: "Interfaz reactiva con tipado estricto end-to-end",
      color: "from-blue-400 to-indigo-500",
    },
    {
      name: "Zustand",
      category: "State Management",
      usage:
        "Gestión de estado global y persistencia con middleware personalizado",
      color: "from-teal-400 to-green-400",
    },
    {
      name: "Node.js & Express",
      category: "Backend",
      usage: "Arquitectura MCV y API RESTful",
      color: "from-green-500 to-emerald-600",
    },
    {
      name: "MongoDB",
      category: "Database",
      usage: "Modelado de datos no relacionales",
      color: "from-green-400 to-teal-400",
    },
    {
      name: "Zod",
      category: "Security",
      usage: "Validación de esquemas y contratos de API",
      color: "from-purple-500 to-violet-500",
    },
  ],

  projectStory: {
    problem:
      "Las soluciones actuales imponen muros de pago para la personalización básica y carecen de una integración fluida para el flujo de trabajo de un desarrollador.",
    solution:
      "Una alternativa Open-Source y auto-hospedable que permite control total sobre la estética y los datos, con un enfoque en la velocidad de carga y seguridad.",
    impact:
      "Logré un sistema de gestión de enlaces con un Performance Score de 100 y una arquitectura de seguridad que previene el secuestro de sesiones mediante rotación de tokens.",
  },

  projectRolAndResp: [
    {
      category: "Full-Stack Architecture",
      responsibilities: [
        "Diseño del modelo de datos en MongoDB enfocado en escalabilidad",
        "Implementación del flujo de autenticación seguro (Access/Refresh Tokens)",
        "Desarrollo de una UI dinámica con previsualización en tiempo real",
        "Despliegue automatizado y configuración de variables de entorno seguras",
      ],
      icon: Monitor,
      color: "from-blue-500/20 to-cyan-500/20",
    },
  ],

  challenges: [
    {
      title: "Hardening de Autenticación JWT",
      problem:
        "Necesidad de invalidar sesiones de forma remota en un sistema teóricamente stateless.",
      solution:
        "Estrategia de Whitelisting y Refresh Token Rotation, asegurando que cada token sea de un solo uso.",
      impact:
        "Seguridad de nivel bancario en el manejo de sesiones de usuario.",
      icon: Shield,
    },
    {
      title: "Sincronización de Estado Compleja",
      problem:
        "Mantener la UI sincronizada con la DB evitando race conditions y peticiones redundantes.",
      solution:
        "Implementación de actualizaciones optimistas en Zustand y lógica de 'dirty checking' antes de disparar peticiones HTTP.",
      impact: "Reducción del 70% en el tráfico innecesario hacia la API.",
      icon: Database,
    },
  ],

  projectStats: {
    performanceScore: "100",
    accessibility: "100",
    loadTime: "0.5s",
    seoScore: "91",
  },

  metaData: {
    title: "DevLinks -- Diego Pm",
    description:
      "DevLinks es una aplicación que permite a los desarrolladores crear páginas de enlaces personalizadas de manera rápida y sencilla. Estas páginas facilitan la presentación de perfiles, proyectos y otras plataformas en un solo lugar, optimizando la presencia en línea de los profesionales. La aplicación ofrece plantillas personalizables y una interfaz intuitiva, lo que permite a los usuarios diseñar páginas atractivas sin necesidad de conocimientos avanzados en desarrollo web.",
    keywords:
      "DevLinks, aplicación full-stack, páginas de enlaces, enlaces personalizados, desarrolladores, React, TypeScript, Vite, Zustand, Tailwind CSS, Node.js, Express, MongoDB, Zod, interfaz intuitiva, plantillas personalizables, gestión de enlaces, autenticación JWT, API REST, desarrollo frontend, desarrollo backend, plataforma para desarrolladores, presencia en línea, proyecto web, diseño responsive, validación de datos, seguridad web",
    pathname: "DevLink",
  },

  timelinePhase: [
    {
      phase: "Análisis y Planificación",
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
      description: "Mejoras de performance y seguridad",
      deliverables: [
        "Middleware de validación JWT",
        "Sistema de caché en cliente",
        "Testing E2E",
      ],
      color: "from-blue-400 to-cyan-400",
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
};

export const devLinksIntroduction: ProjectIntroduction = {
  title: "DevLinks",
  subtitle: "Plataforma Full-Stack de Identidad Digital",
  description:
    "Solución de alto rendimiento para centralizar presencia online. Destaca por su sistema de seguridad avanzado con Refresh Token Rotation y una experiencia de usuario fluida mediante sincronización optimista de estado.",
  technologies: [
    "React",
    "Zustand",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "JWT Security",
  ],
  image: previewDevLinks.src,
  live: "https://devlink-frontend.vercel.app/",
  category: "Full-Stack Application",
  year: "2024",
  status: "Produccion",
  pathname: devLinksProjectDetails.metaData.pathname,
};
