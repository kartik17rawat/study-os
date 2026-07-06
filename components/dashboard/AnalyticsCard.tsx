"use client";

import { useMemo } from "react";

type Task = {
  completed: boolean;
  subject: string;
};

type Props = {
  tasks: Task[];
};

export default function AnalyticsCard({ tasks }: Props) {
  const analytics = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter((t) => t.completed).length;
    const pending = total - completed;

    const completion =
      total === 0 ? 0 : Math.round((completed / total) * 100);

    const chemistry = tasks.filter(
      (t) => t.subject === "Chemistry"
    ).length;

    const physics = tasks.filter(
      (t) => t.subject === "Physics"
    ).length;

    const mathematics = tasks.filter(
      (t) => t.subject === "Mathematics"
    ).length;

    return {
      total,
      completed,
      pending,
      completion,
      chemistry,
      physics,
      mathematics,
    };
  }, [tasks]);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <h2 className="text-2xl font-bold text-white mb-6">
        📊 Study Analytics
      </h2>

      <div className="space-y-4">
        <div className="flex justify-between text-white">
          <span>Total Tasks</span>
          <span>{analytics.total}</span>
        </div>

        <div className="flex justify-between text-green-400">
          <span>Completed</span>
          <span>{analytics.completed}</span>
        </div>

        <div className="flex justify-between text-yellow-400">
          <span>Pending</span>
          <span>{analytics.pending}</span>
        </div>

        <div className="flex justify-between text-blue-400">
          <span>Completion</span>
          <span>{analytics.completion}%</span>
        </div>

        <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 transition-all duration-500"
            style={{ width: `${analytics.completion}%` }}
          />
        </div>

        <hr className="border-slate-700 my-4" />

        <div className="space-y-2 text-slate-300">
          <div className="flex justify-between">
            <span>🧪 Chemistry</span>
            <span>{analytics.chemistry}</span>
          </div>

          <div className="flex justify-between">
            <span>⚡ Physics</span>
            <span>{analytics.physics}</span>
          </div>

          <div className="flex justify-between">
            <span>📐 Mathematics</span>
            <span>{analytics.mathematics}</span>
          </div>
        </div>
      </div>
    </div>
  );
}