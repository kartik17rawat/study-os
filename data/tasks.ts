export type Task = {
  id: string;
  subject: string;
  material: string;
  chapter: string;
  taskType: string;
  questionNumbers: string;
  priority: "High" | "Medium" | "Low";
  estimatedTime: number;
  reason: string;
  completed: boolean;
};

export const initialTasks: Task[] = [
  {
    id: "1",
    subject: "Chemistry",
    material: "Race",
    chapter: "Atomic Structure",
    taskType: "Exercise",
    questionNumbers: "1-20",
    priority: "High",
    estimatedTime: 60,
    reason: "",
    completed: false,
  },
];