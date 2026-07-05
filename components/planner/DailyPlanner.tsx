export default function DailyPlanner() {
  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6">

      <h2 className="text-2xl font-bold text-white mb-6">
        📅 Daily Planner
      </h2>

      <div className="space-y-5">

        <div className="bg-slate-800 rounded-xl p-4">

          <h3 className="text-lg font-bold text-cyan-400">
            📘 Chemistry
          </h3>

          <div className="space-y-2 mt-3">

            <label className="flex gap-3 text-white">
              <input type="checkbox" />
              Class Notes
            </label>

            <label className="flex gap-3 text-white">
              <input type="checkbox" />
              Homework
            </label>

            <label className="flex gap-3 text-white">
              <input type="checkbox" />
              Race 13
            </label>

          </div>

        </div>

        <div className="bg-slate-800 rounded-xl p-4">

          <h3 className="text-lg font-bold text-green-400">
            📗 Physics
          </h3>

          <div className="space-y-2 mt-3">

            <label className="flex gap-3 text-white">
              <input type="checkbox" />
              Notes
            </label>

            <label className="flex gap-3 text-white">
              <input type="checkbox" />
              Module Exercise
            </label>

          </div>

        </div>

        <div className="bg-slate-800 rounded-xl p-4">

          <h3 className="text-lg font-bold text-orange-400">
            📙 Mathematics
          </h3>

          <div className="space-y-2 mt-3">

            <label className="flex gap-3 text-white">
              <input type="checkbox" />
              Gyanoday
            </label>

            <label className="flex gap-3 text-white">
              <input type="checkbox" />
              Exercise
            </label>

          </div>

        </div>

      </div>

    </div>
  );
}