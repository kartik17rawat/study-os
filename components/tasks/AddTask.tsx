"use client";

import { useState } from "react";
import { Task } from "../../data/tasks";

type Props = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

export default function AddTask({ tasks, setTasks }: Props) {
  const [subject, setSubject] = useState<Task["subject"]>("Chemistry");
  const [material, setMaterial] =
    useState<Task["material"]>("Allen Module");
  const [chapter, setChapter] = useState("");
  const [taskType, setTaskType] =
    useState<Task["taskType"]>("Exercise");
  const [questionNumbers, setQuestionNumbers] = useState("");
  const [priority, setPriority] =
    useState<Task["priority"]>("Medium");
  const [estimatedTime, setEstimatedTime] = useState(60);
  const [reason, setReason] = useState("");

  const handleSave = () => {
    if (!chapter.trim() || !questionNumbers.trim()) {
      alert("Please fill all required fields.");
      return;
    }

    const newTask: Task = {
      id: Date.now().toString(),
      subject,
      material,
      chapter,
      taskType,
      questionNumbers,
      priority,
      estimatedTime,
      reason,
      completed: false,
    };

    setTasks([...tasks, newTask]);

    setSubject("Chemistry");
    setMaterial("Allen Module");
    setChapter("");
    setTaskType("Exercise");
    setQuestionNumbers("");
    setPriority("Medium");
    setEstimatedTime(60);
    setReason("");
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mt-8">

      <h2 className="text-2xl font-bold text-white mb-6">
        ➕ Add JEE Study Task
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        <select
          value={subject}
          onChange={(e) =>
            setSubject(e.target.value as Task["subject"])
          }
          className="bg-slate-800 text-white p-3 rounded-lg"
        >
          <option>Physics</option>
          <option>Chemistry</option>
          <option>Mathematics</option>
        </select>

        <select
          value={material}
          onChange={(e) =>
            setMaterial(e.target.value as Task["material"])
          }
          className="bg-slate-800 text-white p-3 rounded-lg"
        >
          <option>Allen Module</option>
          <option>Race</option>
          <option>Gyanoday</option>
          <option>NCERT</option>
          <option>DPP</option>
          <option>PYQ</option>
          <option>Notes</option>
          <option>Revision</option>
        </select>

        <input
          value={chapter}
          onChange={(e) => setChapter(e.target.value)}
          placeholder="Chapter"
          className="bg-slate-800 text-white p-3 rounded-lg"
        />

        <select
          value={taskType}
          onChange={(e) =>
            setTaskType(e.target.value as Task["taskType"])
          }
          className="bg-slate-800 text-white p-3 rounded-lg"
        >
          <option>Homework</option>
          <option>Exercise</option>
          <option>Revision</option>
          <option>Lecture</option>
          <option>Test</option>
        </select><input
          value={questionNumbers}
          onChange={(e) => setQuestionNumbers(e.target.value)}
          placeholder="Question Numbers (e.g. 1-25)"
          className="bg-slate-800 text-white p-3 rounded-lg"
        />

        <select
          value={priority}
          onChange={(e) =>
            setPriority(e.target.value as Task["priority"])
          }
          className="bg-slate-800 text-white p-3 rounded-lg"
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <input
          type="number"
          value={estimatedTime}
          onChange={(e) =>
            setEstimatedTime(Number(e.target.value))
          }
          placeholder="Estimated Time (minutes)"
          className="bg-slate-800 text-white p-3 rounded-lg"
        />

        <input
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Reason (Optional)"
          className="bg-slate-800 text-white p-3 rounded-lg"
        />

      </div>

      <button
        onClick={handleSave}
        className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold transition"
      >
        💾 Save Task
      </button>

    </div>
  );
}