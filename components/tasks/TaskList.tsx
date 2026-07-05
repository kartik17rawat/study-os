"use client";

import { Task } from "../../data/tasks";
import TaskItem from "./TaskItem";

type Props = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

export default function TaskList({ tasks, setTasks }: Props) {
  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id: string) => {
    const newName = prompt("Enter new task name");

    if (!newName) return;

    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, task: newName }
          : task
      )
    );
  };

  return (
    <section className="mt-8">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-bold text-white">
          📋 Today's Tasks
        </h2>

        <span className="text-slate-400">
          {tasks.length} Tasks
        </span>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={() => toggleTask(task.id)}
            onDelete={() => deleteTask(task.id)}
            onEdit={() => editTask(task.id)}
          />
        ))}
      </div>
    </section>
  );
}