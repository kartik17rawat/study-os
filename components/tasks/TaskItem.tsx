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

      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-white">
          {task.subject}
        </h2>

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

      <p className="text-slate-400 mt-2">
        📖 {task.chapter}
      </p>

      <div className="mt-4 bg-slate-800 rounded-xl p-3">
        <p className="text-white">
          📝 {task.task}
        </p>

        <p className="text-blue-400 text-sm mt-2">
          {task.type}
        </p>
      </div>

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
            className="bg-yellow-500 hover:bg-yellow-600 px-3 py-2 rounded-lg text-black font-semibold"
          >
            ✏ Edit
          </button>

          <button
            onClick={onDelete}
            className="bg-red-600 hover:bg-red-700 px-3 py-2 rounded-lg text-white"
          >
            🗑 Delete
          </button>
        </div>

      </div>
    </div>
  );
}