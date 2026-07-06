"use client";

import AddTask from "@/components/tasks/AddTask";
import TaskList from "@/components/tasks/TaskList";
import { useEffect, useState } from "react";
import { Task } from "@/data/tasks";
export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetch("/api/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold text-white mb-6">
        📋 Tasks
      </h1>

      <AddTask 
      tasks={tasks}
      setTasks={setTasks}
      />

      <TaskList
        tasks={tasks}
        setTasks={setTasks}
      />
    </main>
  );
}