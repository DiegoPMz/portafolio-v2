import type { LayoutMetaData } from "@/layouts/Layout.astro";
import type React from "react";

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
  description: string;
  deliverables: string[];
  color: string;
}

export interface ProjectLinks {
  github: string;
  live?: string;
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
  metaData: Omit<LayoutMetaData, "pathname"> & {
    pathname: string;
  };
}
