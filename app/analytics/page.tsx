"use client";

import { useEffect, useState } from "react";
import AnalyticsCard from "@/components/dashboard/AnalyticsCard";
import { Task } from "@/data/tasks";

export default function AnalyticsPage() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch("/api/tasks");

        if (!res.ok) return;

        const data = await res.json();
        setTasks(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <main className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-white mb-8">
        📊 Analytics
      </h1>

      <AnalyticsCard tasks={tasks} />
    </main>
  );
}