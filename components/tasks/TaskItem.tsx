"use client";

import { Task } from "../../data/tasks";

type Props = {
  task: Task;
  onToggle: () => void;
  onDelete: () => void;
  onEdit: () => void;
};

export default function TaskItem({
  task,
  onToggle,
  onDelete,
  onEdit,
}: Props) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-blue-500 transition-all">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">
            {task.subject}
          </h2>

          <p className="text-cyan-400 text-sm mt-1">
            📚 {task.material}
          </p>
        </div>

        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            task.completed
              ? "bg-green-600 text-white"
              : "bg-yellow-500 text-black"
          }`}
        >
          {task.completed ? "Completed" : "Pending"}
        </span>
      </div>

      {/* Chapter */}
      <p className="text-slate-400 mt-4">
        📖 {task.chapter}
      </p>

      {/* Task Details */}
      <div className="mt-4 bg-slate-800 rounded-xl p-4 space-y-2">
        <p className="text-white">
          📝 {task.taskType}
        </p>

        <p className="text-slate-300">
          🔢 Questions: {task.questionNumbers}
        </p>

        <p className="text-orange-400">
          ⭐ Priority: {task.priority}
        </p>

        <p className="text-green-400">
          ⏱ {task.estimatedTime} min
        </p>

        {task.reason && (
          <p className="text-red-400">
            ❗ Reason: {task.reason}
          </p>
        )}
      </div>

      {/* Actions */}
      <div className="mt-5 flex items-center justify-between">

        <label className="flex items-center gap-2 text-white">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={onToggle}
            className="w-5 h-5 accent-green-500"
          />
          Complete
        </label>

        <div className="flex gap-2">

          <button
            onClick={onEdit}
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg font-semibold"
          >
            ✏ Edit
          </button>

          <button
            onClick={onDelete}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
          >
            🗑 Delete
          </button>

        </div>

      </div>

    </div>
  );
}