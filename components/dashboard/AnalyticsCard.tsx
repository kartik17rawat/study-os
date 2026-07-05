"use client";

type Task = {
  completed: boolean;
  subject: string;
};

type Props = {
  tasks: Task[];
};

export default function AnalyticsCard({ tasks }: Props) {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const pending = total - completed;

  const completion =
    total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <h2 className="text-2xl font-bold text-white mb-6">
        📊 Study Analytics
      </h2>

      <div className="space-y-4">

        <div className="flex justify-between text-white">
          <span>Total Tasks</span>
          <span>{total}</span>
        </div>

        <div className="flex justify-between text-green-400">
          <span>Completed</span>
          <span>{completed}</span>
        </div>

        <div className="flex justify-between text-yellow-400">
          <span>Pending</span>
          <span>{pending}</span>
        </div>

        <div className="flex justify-between text-blue-400">
          <span>Completion</span>
          <span>{completion}%</span>
        </div>

        <div className="w-full bg-slate-700 rounded-full h-4">
          <div
            className="bg-blue-500 h-4 rounded-full transition-all duration-500"
            style={{ width: `${completion}%` }}
          />
        </div>

      </div>
    </div>
  );
}