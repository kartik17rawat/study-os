"use client";

import { useState } from "react";
import { Task } from "../../data/tasks";

type Props = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

export default function AddTask({ tasks, setTasks }: Props) {
  const [subject, setSubject] = useState("Chemistry");
  const [chapter, setChapter] = useState("");
  const [task, setTask] = useState("");
  const [type, setType] = useState("Exercise");

  const handleSave = () => {
    if (!chapter.trim() || !task.trim()) {
      alert("Please fill all fields");
      return;
    }

    const newTask: Task = {
      id: Date.now().toString(),
      subject,
      chapter,
      task,
      type,
      completed: false,
    };

    setTasks([...tasks, newTask]);

    setChapter("");
    setTask("");
    setType("Exercise");
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <h2 className="text-2xl font-bold text-white mb-5">
        ➕ Add New Task
      </h2>

      <div className="grid gap-4 md:grid-cols-2">

        <select
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="bg-slate-800 text-white rounded-lg p-3"
        >
          <option>Chemistry</option>
          <option>Physics</option>
          <option>Mathematics</option>
        </select>

        <input
          value={chapter}
          onChange={(e) => setChapter(e.target.value)}
          placeholder="Chapter"
          className="bg-slate-800 text-white rounded-lg p-3"
        />

        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Task"
          className="bg-slate-800 text-white rounded-lg p-3"
        />

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="bg-slate-800 text-white rounded-lg p-3"
        >
          <option>Exercise</option>
          <option>Notes</option>
          <option>Homework</option>
          <option>Revision</option>
          <option>Race</option>
          <option>Gyanoday</option>
        </select>

      </div>

      <button
        onClick={handleSave}
        className="mt-6 w-full bg-blue-600 hover:bg-blue-700 rounded-xl py-3 text-white font-bold"
      >
        Save Task
      </button>
    </div>
  );
}