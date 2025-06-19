import type { ProjectStats } from "@/data/projectDetails";

export const ProjectOverviewStats = ({ stats }: { stats: ProjectStats }) => {
  return (
    <div className="bg-zinc-900/30 border border-zinc-800/30 rounded-2xl p-6 space-y-6">
      <h3 className="text-xl font-light text-zinc-100">Estadísticas</h3>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-zinc-400">Performance Score</span>
          <span className="text-emerald-400 font-medium">
            {stats.performanceScore}/100
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-zinc-400">Load Time</span>
          <span className="text-blue-400 font-medium">{stats.loadTime}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-zinc-400">Accessibility</span>
          <span className="text-purple-400 font-medium">
            {stats.accessibility}/100
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-zinc-400">SEO Score</span>
          <span className="text-yellow-400 font-medium">
            {stats.seoScore}/100
          </span>
        </div>
      </div>
    </div>
  );
};
