"use client";

import { useEffect, useState } from "react";

import Header from "./Header";
import Progress from "./Progress";
import SubjectCard from "./SubjectCard";
import TestCard from "./TestCard";
import TomorrowPlan from "./TomorrowPlan";

import TaskList from "../tasks/TaskList";
import AddTask from "../tasks/AddTask";

import { Task, initialTasks } from "../../data/tasks";

export default function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const savedTasks = localStorage.getItem("study-os-tasks");

    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    } else {
      setTasks(initialTasks);
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem(
        "study-os-tasks",
        JSON.stringify(tasks)
      );
    }
  }, [tasks]);

  return (
    <main className="max-w-7xl mx-auto p-6 space-y-8">
      <Header />

      <Progress tasks={tasks} />

      <div className="grid md:grid-cols-3 gap-6">
        <SubjectCard
          subject="Chemistry"
          chapter="Atomic Structure"
          progress={80}
        />

        <SubjectCard
          subject="Physics"
          chapter="Kinematics"
          progress={60}
        />

        <SubjectCard
          subject="Mathematics"
          chapter="Functions"
          progress={45}
        />
      </div>

      <TaskList
        tasks={tasks}
        setTasks={setTasks}
      />

      <AddTask
        tasks={tasks}
        setTasks={setTasks}
      />

      <div className="grid md:grid-cols-2 gap-6">
        <TestCard />
        <TomorrowPlan />
      </div>
    </main>
  );
}