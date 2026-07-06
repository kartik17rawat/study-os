"use client";
import PomodoroTimer from "../timer/PomodoroTimer";
import { useEffect, useState } from "react";
import TimerModes from "../timer/TimerModes";
import Header from "./Header";
import Progress from "./Progress";
import SubjectCard from "./SubjectCard";
import TestCard from "./TestCard";
import TomorrowPlan from "./TomorrowPlan";
import StreakCard from "./StreakCard";
import AnalyticsCard from "./AnalyticsCard";
import SummaryCard from "./SummaryCard";
import RevisionTracker from "./RevisionTracker";
import MainLayout from "../layout/MainLayout";
import DailyPlanner from "../planner/DailyPlanner";
import StudyCalendar from "../calendar/StudyCalendar";

import TaskList from "../tasks/TaskList";
import AddTask from "../tasks/AddTask";
import SearchBar from "./SearchBar";

import { Task, initialTasks } from "../../data/tasks";
{/*AnalyticsCard tasks={tasks} />*/}
export default function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [search, setSearch] = useState("");

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


  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const filteredTasks = tasks.filter((task) => {
    const query = search.toLowerCase();

    return (
      task.subject.toLowerCase().includes(query) ||
      task.chapter.toLowerCase().includes(query) ||
      task.material.toLowerCase().includes(query) ||
      task.taskType.toLowerCase().includes(query) ||
      task.questionNumbers.toLowerCase().includes(query)
    );
  });

 return (
  <MainLayout>
    <div className="space-y-8">
      <Header />

      <Progress tasks={tasks} />

      <div className="grid grid-cols-1md:grid-cols-3 gap-6">
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

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <TaskList
        tasks={filteredTasks}
        setTasks={setTasks}
      />

      <AddTask
        tasks={tasks}
        setTasks={setTasks}
      />

      <DailyPlanner />

      <StudyCalendar />

      <AnalyticsCard tasks={tasks} />

      <SummaryCard
        total={tasks.length}
        completed={completedTasks}
      />


      <PomodoroTimer />

      <div className="grid grid-cols-1md:grid-cols-3 gap-6">
        <TestCard />
        <TomorrowPlan />
        <StreakCard tasks={tasks} />
      </div>
    </div>
  </MainLayout>
);
}
