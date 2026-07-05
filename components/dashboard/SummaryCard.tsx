type Props = {
  total: number;
  completed: number;
};

export default function SummaryCard({
  total,
  completed,
}: Props) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <h2 className="text-2xl font-bold text-white mb-6">
        📋 Today's Summary
      </h2>

      <div className="space-y-4">

        <div className="flex justify-between">
          <span className="text-slate-300">Total Tasks</span>
          <span className="text-white font-bold">{total}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-300">Completed</span>
          <span className="text-green-400 font-bold">
            {completed}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-300">Pending</span>
          <span className="text-yellow-400 font-bold">
            {total - completed}
          </span>
        </div>

      </div>
    </div>
  );
}