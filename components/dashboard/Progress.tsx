import { Task } from "../../data/tasks";

type Props = {
  tasks: Task[];
};

export default function Progress({ tasks }: Props) {
  const completed = tasks.filter((task) => task.completed).length;
  const total = tasks.length;

  const percentage =
    total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">

      <div className="flex justify-between items-center">

        <h2 className="text-2xl font-bold text-white">
          📈 Today's Progress
        </h2>

        <span className="text-green-400 text-xl font-bold">
          {percentage}%
        </span>

      </div>

      <div className="mt-5 w-full h-4 bg-slate-700 rounded-full overflow-hidden">

        <div
          className="bg-green-500 h-full transition-all duration-500"
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

      <p className="mt-4 text-slate-400">
        {completed} of {total} Tasks Completed
      </p>

    </div>
  );
}