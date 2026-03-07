import type { ProjectDetails } from "@/types/project-details";
import type { ProjectIntroduction } from "@/types/project-introduction";
import {
  Code2,
  Cpu,
  Layers,
  Lock,
  Scale,
  Server,
  ShieldCheck,
  Zap,
} from "lucide-react";
import kandoPresentationImage from "@/assets/kando/kando_presentation-image.webp";
import kandoPhonesMock from "@/assets/kando/kando_phones_mock.webp";

export const kandoProjectDetails: ProjectDetails = {
  title: "Kando",
  description:
    "Sistema de gestión de productividad de alto rendimiento diseñado bajo el paradigma de Vertical Slice Architecture y Arquitectura Hexagonal. Kando separa estrictamente la lógica de dominio de la infraestructura, garantizando escalabilidad y seguridad de grado empresarial.",
  projectType: "Full-Stack Enterprise",
  create_at: "2026",

  projectLinks: {
    github: "https://github.com/DiegoPMz/KanbanApp",
    live: undefined,
  },

  mediaItems: [
    {
      type: "image",
      src: kandoPresentationImage.src,
      title: "Dashboard Principal - Visualización Kanban",
    },
    {
      type: "image",
      src: kandoPhonesMock.src,
      title: "Interfaz en dispositivos móviles",
    },
  ],

  techStack: [
    {
      name: ".NET 8 & EF Core",
      category: "Backend",
      usage: "API bajo Vertical Slice Architecture y PostgreSQL",
      color: "from-purple-600 to-indigo-600",
    },
    {
      name: "React & TS",
      category: "Frontend",
      usage: "Arquitectura Hexagonal con bases de DDD",
      color: "from-blue-400 to-sky-500",
    },
    {
      name: "TanStack Suite",
      category: "Data & Routing",
      usage: "Manejo de estado asíncrono y Type-safe routing",
      color: "from-red-500 to-pink-500",
    },
    {
      name: "Tailwind CSS v4",
      category: "Styling",
      usage: "Diseño atómico con ShadCn",
      color: "from-cyan-400 to-blue-500",
    },
    {
      name: "MSW & Vitest",
      category: "Testing",
      usage: "Simulación de contratos de API y Unit Testing",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "OAuth / BFF",
      category: "Security",
      usage: "Autenticación Google con Cookies HttpOnly",
      color: "from-orange-500 to-yellow-500",
    },
  ],

  projectStory: {
    problem:
      "Las aplicaciones de gestión suelen fallar al escalar debido al alto acoplamiento entre la UI y las reglas de negocio, además de presentar vulnerabilidades en el manejo de tokens en el cliente.",
    solution:
      "Implementé una arquitectura desacoplada donde el núcleo de negocio no depende de frameworks externos. En el backend, utilicé Vertical Slices para encapsular funcionalidades y el patrón BFF para asegurar la autenticación.",
    impact:
      "Un sistema testeable al 100% en su lógica core, capaz de evolucionar tecnológicamente sin afectar las reglas de negocio y con una superficie de ataque XSS minimizada.",
  },

  projectRolAndResp: [
    {
      category: "Backend Architecture",
      responsibilities: [
        "Diseño de API RESTful con .NET 8 siguiendo Vertical Slice Architecture",
        "Implementación del Result Pattern para un flujo de control semántico",
        "Persistencia relacional optimizada con EF Core y PostgreSQL",
      ],
      icon: Server,
      color: "from-purple-500/20 to-indigo-500/20",
    },
    {
      category: "Frontend Engineering",
      responsibilities: [
        "Estructuración Hexagonal para aislar componentes de React de la infraestructura",
        "Integración de TanStack Query para una gestión de caché eficiente",
        "Desarrollo de UI accesible con Radix UI y animaciones con DnD Kit",
      ],
      icon: Code2,
      color: "from-blue-500/20 to-cyan-500/20",
    },
  ],

  timelinePhase: [
    {
      phase: "Modelado de Dominio",
      description: "Definición de entidades y reglas de negocio puras",
      deliverables: [
        "Diagramas de Entidad-Relación",
        "Definición de Agregados DDD",
        "Contratos de API",
      ],
      color: "from-orange-400 to-yellow-400",
    },
    {
      phase: "Desarrollo de Infraestructura",
      description: "Implementación de persistencia y servicios externos",
      deliverables: [
        "PostgreSQL Schema",
        "Configuración de OAuth/Google",
        "BFF Middleware",
      ],
      color: "from-blue-400 to-indigo-400",
    },
    {
      phase: "QA y Refinamiento",
      description: "Aseguramiento de calidad y optimización de UX",
      deliverables: [
        "Tests unitarios con Vitest",
        "Mocks de API con MSW",
        "Lighthouse Audit",
      ],
      color: "from-green-400 to-emerald-400",
    },
  ],

  challenges: [
    {
      title: "Pragmatismo Arquitectónico",
      problem:
        "Evitar la sobre-ingeniería en módulos simples mientras se mantiene DDD en áreas críticas.",
      solution:
        "Aplicación de lógica de dominio compleja solo en agregados que lo requerían, usando modelos anémicos para CRUDs básicos.",
      impact: "Código equilibrado entre mantenibilidad y velocidad de entrega.",
      icon: Scale,
    },
    {
      title: "Seguridad de Tokens (BFF)",
      problem: "El riesgo de exponer JWT en LocalStorage ante ataques XSS.",
      solution:
        "Uso de cookies HttpOnly/SameSite gestionadas por el backend de .NET para actuar como proxy de seguridad.",
      impact: "Seguridad robusta de nivel bancario en el manejo de sesiones.",
      icon: Lock,
    },
  ],

  learnings: [
    {
      category: "Ingeniería de Software",
      insights: [
        "El desacoplamiento real permite cambiar librerías de UI sin tocar la lógica de negocio",
        "El Result Pattern elimina la ambigüedad en las respuestas del servidor",
        "Importancia de la validación de contratos end-to-end con Zod",
      ],
    },
    {
      category: "Clean Code",
      insights: [
        "Vertical Slices reducen drásticamente la carga cognitiva al desarrollar nuevas features",
        "Beneficios de la Inversión de Dependencias para el testing",
        "Manejo de estados complejos de UI mediante enrutamiento basado en tipos",
      ],
    },
  ],
  projectMetrics: [
    { label: "Arquitectura", value: "Hexagonal / VSA", icon: Layers },
    { label: "Seguridad", value: "BFF / HttpOnly", icon: ShieldCheck },
    { label: "Backend Core", value: ".NET 8 / EF", icon: Cpu },
    { label: "Frontend State", value: "TanStack v5", icon: Zap },
  ],

  metaData: {
    title: "Kando -- Diego Pm",
    description:
      "Kando es una aplicación de gestión Kanban de nivel empresarial construida con .NET 8 y React, enfocada en arquitectura limpia, seguridad BFF y alto rendimiento.",
    keywords:
      "Kando, .NET 8, React, TypeScript, Vertical Slice Architecture, Arquitectura Hexagonal, DDD, PostgreSQL, TanStack Query, BFF Pattern, Seguridad Web, Kanban, Ingeniería de Software",
    pathname: "Kando",
  },
};

export const kandoIntroduction: ProjectIntroduction = {
  title: "Kando",
  subtitle: "Productividad bajo principios de Clean Architecture",
  description:
    "Sistema de gestión empresarial que implementa Vertical Slices y Arquitectura Hexagonal. Diseñado con un enfoque en la integridad de datos mediante Result Pattern y seguridad robusta con el patrón BFF en .NET 8.",
  technologies: [
    ".NET 8",
    "PostgreSQL",
    "React",
    "TanStack Query",
    "TS",
    "DDD Principles",
    "BFF Pattern",
  ],
  image: kandoPresentationImage.src,
  category: "Full-Stack / Architecture Pilot",
  year: "2026",
  status: "En Desarrollo",
  pathname: kandoProjectDetails.metaData.pathname,
};
