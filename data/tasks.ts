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
  date: string;
};

export const initialTasks: Task[] = [];

