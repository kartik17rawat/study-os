export type Task = {
  id: string;
  subject: string;
  chapter: string;
  task: string;
  type: string;
  completed: boolean;
};

export const initialTasks: Task[] = [
  {
    id: "1",
    subject: "Chemistry",
    chapter: "Atomic Structure",
    task: "Exercise 1",
    type: "Exercise",
    completed: false,
  },
  {
    id: "2",
    subject: "Physics",
    chapter: "Kinematics",
    task: "Class Notes",
    type: "Notes",
    completed: true,
  },
  {
    id: "3",
    subject: "Mathematics",
    chapter: "Functions",
    task: "Practice Sheet",
    type: "Practice",
    completed: false,
  },
];