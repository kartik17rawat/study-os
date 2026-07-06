"use client";

import { useEffect, useState } from "react";

export default function StudyCalendar() {
  const [tasks, setTasks] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch(console.error);
  }, []);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <h2 className="text-2xl font-bold text-white mb-4">
        📅 Study Calendar
      </h2>

      <div className="space-y-3">
        {tasks.length === 0 ? (
          <p className="text-slate-400">No tasks available.</p>
        ) : (
          tasks.map((task: any) => (
            <div
              key={task._id}
              className="bg-slate-800 rounded-lg p-3"
            >
              <p className="text-blue-400 font-semibold">
                {task.date || "No Date"}
              </p>

              <p className="text-white">
                {task.subject} - {task.questionNumbers}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}