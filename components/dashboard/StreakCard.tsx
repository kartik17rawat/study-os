"use client";

type Task = {
  completed: boolean;
};

type Props = {
  tasks: Task[];
};

export default function StreakCard({ tasks }: Props) {
  const completed = tasks.filter((t) => t.completed).length;

  const streak = completed;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <h2 className="text-2xl font-bold text-white">
        🔥 Study Streak
      </h2>

      <div className="mt-6 text-center">
        <h1 className="text-6xl font-bold text-orange-500">
          {streak}
        </h1>

        <p className="text-slate-400 mt-2">
          Completed Tasks
        </p>
      </div>

      <div className="mt-6 bg-slate-800 rounded-xl p-4">
        {streak > 0 ? (
          <p className="text-green-400">
            ✅ Great job! Keep studying to grow your streak.
          </p>
        ) : (
          <p className="text-yellow-400">
            📚 Complete your first task today to start your streak.
          </p>
        )}
      </div>
    </div>
  );
}