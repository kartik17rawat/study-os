export default function StreakCard() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

      <h2 className="text-2xl font-bold text-white">
        🔥 Study Streak
      </h2>

      <div className="mt-6 text-center">

        <h1 className="text-6xl font-bold text-orange-500">
          18
        </h1>

        <p className="text-slate-400 mt-2">
          Days in a row
        </p>

      </div>

      <div className="mt-6 bg-slate-800 rounded-xl p-4">

        <p className="text-green-400">
          ✅ Keep studying today to continue your streak.
        </p>

      </div>

    </div>
  );
}