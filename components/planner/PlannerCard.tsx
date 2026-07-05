"use client";

import { useEffect, useState } from "react";

type Task = {
  _id: string;
  subject: string;
  chapter: string;
  material: string;
  taskType: string;
  priority: string;
  estimatedTime: number;
  completed: boolean;
};

export default function PlannerCard() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetch("/api/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch(console.error);
  }, []);

const priorityValue: Record<string, number> = {
  High: 3,
  Medium: 2,
  Low: 1,
};

const pendingTasks = tasks
  .filter((task) => !task.completed)
  .sort((a, b) => {
    const priorityDiff =
      priorityValue[b.priority] - priorityValue[a.priority];

    if (priorityDiff !== 0) return priorityDiff;

    return a.estimatedTime - b.estimatedTime;
  });

  return (
    <div className="max-w-5xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl p-8">

      <h1 className="text-3xl font-bold text-white mb-6">
        🤖 AI Study Planner
      </h1>

      <p className="text-slate-400 mb-8">
        Recommended order to complete today's study tasks.
      </p>

      <div className="space-y-4">
        {pendingTasks.length === 0 ? (
          <p className="text-green-400">
            🎉 No pending tasks!
          </p>
        ) : (
          pendingTasks.map((task, index) => (
            <div
              key={task._id}
              className="bg-slate-800 rounded-xl p-5"
            >
              <h2 className="text-xl font-bold text-white">
                #{index + 1} • {task.subject}
              </h2>

              <p className="text-slate-300 mt-2">
                {task.chapter}
              </p>

              <p className="text-blue-400 mt-1">
                {task.material} • {task.taskType}
              </p>

              <p className="text-orange-400 mt-1">
                Priority: {task.priority}
              </p>

              <p className="text-green-400 mt-1">
                Estimated Time: {task.estimatedTime} min
              </p>
            </div>
          ))
        )}
      </div>

    </div>
  );
}