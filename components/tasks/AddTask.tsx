"use client";

import { useState } from "react";
import { Task } from "../../data/tasks";
import { toast } from "sonner";

type Props = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

export default function AddTask({ tasks, setTasks }: Props) {
  const [subject, setSubject] = useState<Task["subject"]>("Chemistry");
  const [material, setMaterial] = useState<Task["material"]>("Allen Module");
  const [chapter, setChapter] = useState("");
  const [taskType, setTaskType] = useState<Task["taskType"]>("Exercise");
  const [questionNumbers, setQuestionNumbers] = useState("");
  const [priority, setPriority] = useState<Task["priority"]>("Medium");
  const [estimatedTime, setEstimatedTime] = useState(60);
  const [reason, setReason] = useState("");

  const handleSave = async () => {
    if (!chapter.trim() || !questionNumbers.trim()) {
    toast.error("Please fill all required fields.");
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

    const res = await fetch("/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });

    if (!res.ok) {
      const error = await res.text();
      toast.error("Failed to save task.");
      return;
    }

    const savedTask = await res.json();
    setTasks([...tasks, savedTask]);
    toast.success("Task saved successfully!");

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
      <div className="flex flex-col gap-4 bg-slate-900 p-4 rounded-xl border border-slate-800ss">

  <select
    value={subject}
    onChange={(e) => setSubject(e.target.value as Task["subject"])}
    className="bg-slate-800 text-white p-3 rounded-lg"
  >
    <option>Physics</option>
    <option>Chemistry</option>
    <option>Mathematics</option>
  </select>

  <select
    value={material}
    onChange={(e) => setMaterial(e.target.value as Task["material"])}
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
    onChange={(e) => setTaskType(e.target.value as Task["taskType"])}
    className="bg-slate-800 text-white p-3 rounded-lg"
  >
    <option>Homework</option>
    <option>Exercise</option>
    <option>Revision</option>
    <option>Lecture</option>
    <option>Test</option>
  </select>

  <input
    value={questionNumbers}
    onChange={(e) => setQuestionNumbers(e.target.value)}
    placeholder="Question Numbers (e.g. 1-25)"
    className="bg-slate-800 text-white p-3 rounded-lg"
  />

  <select
    value={priority}
    onChange={(e) => setPriority(e.target.value as Task["priority"])}
    className="bg-slate-800 text-white p-3 rounded-lg"
  >
    <option>High</option>
    <option>Medium</option>
    <option>Low</option>
  </select>

  <input
    type="number"
    value={estimatedTime}
    onChange={(e) => setEstimatedTime(Number(e.target.value))}
    placeholder="Estimated Time (minutes)"
    className="bg-slate-800 text-white p-3 rounded-lg"
  />

  <input
    value={reason}
    onChange={(e) => setReason(e.target.value)}
    placeholder="Reason (Optional)"
    className="bg-slate-800 text-white p-3 rounded-lg"
  />




<button
  onClick={handleSave}
  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold"
>
  💾 Save Task
</button>

</div>



  );
}