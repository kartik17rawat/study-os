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
    const newQuestion = prompt("Enter new Question Numbers");

    if (!newQuestion) return;

    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, questionNumbers: newQuestion }
          : task
      )
    );
  };

  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold text-white mb-5">
        📋 Today's Tasks
      </h2>

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