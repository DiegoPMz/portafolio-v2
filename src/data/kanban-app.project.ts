import kanbanBrowserMockup from "@/assets/kanbanApp/browserMockup.webp";
import kanbanAppDesktopVideo from "@/assets/kanbanApp/kanbanAppDesktopVideo.webm";
import kanbanAppDesktopVideoPreview from "@/assets/kanbanApp/kanbanAppDesktopVideoPreview.webp";
import kanbanStaticPhonesMockup from "@/assets/kanbanApp/staticPhonesMockup.webp";

import kanbanVideoPhone1 from "@/assets/kanbanApp/kanbanVideoPhone1.webm";
import kanbanVideophone1Preview from "@/assets/kanbanApp/kanbanVideophone1Preview.webp";

import kanbanVideoPhone2 from "@/assets/kanbanApp/kanbanVideoPhone2.webm";
import kanbanVideophone2Preview from "@/assets/kanbanApp/kanbanVideophone2Preview.webp";

import kanbanVideoPhone3 from "@/assets/kanbanApp/kanbanVideoPhone3.webm";
import kanbanVideophone3Preview from "@/assets/kanbanApp/kanbanVideoPhone3Preview.webp";
import type { ProjectDetails } from "@/types/project-details";
import {
  Box,
  Clock,
  Code,
  Cpu,
  Database,
  KanbanSquare,
  Layers,
  ListChecks,
  Shield,
} from "lucide-react";

export const kanbanProjectDetails: ProjectDetails = {
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
      src: kanbanBrowserMockup.src,
      title: "Versión escritorio",
    },
    {
      type: "video",
      src: kanbanAppDesktopVideo,
      title: "Interacción escritorio",
      videoPrev: kanbanAppDesktopVideoPreview.src,
    },
    {
      type: "image",
      src: kanbanStaticPhonesMockup.src,
      title: "Vista móvil - Temas",
    },
    {
      type: "video",
      src: kanbanVideoPhone1,
      title: "Interacción móvil 1",
      videoPrev: kanbanVideophone1Preview.src,
    },
    {
      type: "video",
      src: kanbanVideoPhone2,
      title: "Interacción móvil 2",
      videoPrev: kanbanVideophone2Preview.src,
    },
    {
      type: "video",
      src: kanbanVideoPhone3,
      title: "Interacción móvil 3",
      videoPrev: kanbanVideophone3Preview.src,
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
      impact: "Arquitectura más mantenible sin necesidad de librerías externas",
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
  metaData: {
    title: "KanbanApp -- Diego Pm",
    description:
      "Aplicación para organización visual de tareas en tableros Kanban, con drag and drop y persistencia local. Desarrollada con React, Vite y DnD Kit, ofrece una experiencia intuitiva y responsive.",
    keywords:
      "KanbanApp, aplicación frontend, gestión de tareas, tableros Kanban, organización de actividades, React, Vite, DnD Kit, HTML5, CSS3, JavaScript, drag and drop, persistencia local, diseño responsive, validación de datos, UX, desarrollo frontend, productividad, organización personal, gestión de proyectos, desarrollo web",
  },
};
