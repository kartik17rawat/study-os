"use client";

import { Task } from "../../data/tasks";
import TaskItem from "./TaskItem";

type Props = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

export default function TaskList({ tasks, setTasks }: Props) {
  const toggleTask = async (id: string) => {
    const task = tasks.find(
      (t: any) => (t as any)._id === id || t.id === id
    );

    if (!task) return;

    const res = await fetch(`/api/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed: !task.completed,
      }),
    });

    if (!res.ok) {
      alert("Failed to update task");
      return;
    }

    const updatedTask = await res.json();

    setTasks(
      tasks.map((t: any) =>
        ((t as any)._id === id || t.id === id)
          ? updatedTask
          : t
      )
    );
  };

  const deleteTask = async (id: string) => {
    const res = await fetch(`/api/tasks/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      alert("Failed to delete task");
      return;
    }

    setTasks(
      tasks.filter(
        (task: any) =>
          (task as any)._id !== id && task.id !== id
      )
    );
  };

  const editTask = async (id: string) => {
    const newQuestion = prompt("Enter new Question Numbers");

    if (!newQuestion) return;

    const res = await fetch(`/api/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        questionNumbers: newQuestion,
      }),
    });

    if (!res.ok) {
      alert("Failed to update task");
      return;
    }

    const updatedTask = await res.json();

    setTasks(
      tasks.map((t: any) =>
        ((t as any)._id === id || t.id === id)
          ? updatedTask
          : t
      )
    );
  };

  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold text-white mb-5">
        📋 Today's Tasks
      </h2>

      {tasks.length === 0 ? (
        <p className="text-gray-400">
          No tasks available.
        </p>
      ) : (
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {tasks.map((task: any) => (
            <TaskItem
              key={(task as any)._id || task.id}
              task={task}
              onToggle={() =>
                toggleTask((task as any)._id || task.id)
              }
              onDelete={() =>
                deleteTask((task as any)._id || task.id)
              }
              onEdit={() =>
                editTask((task as any)._id || task.id)
              }
            />
          ))}
        </div>
      )}
    </section>
  );
}