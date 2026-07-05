export default function StudyCalendar() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <h2 className="text-2xl font-bold text-white mb-4">
        📅 Study Calendar
      </h2>

      <div className="space-y-3">
        <div className="bg-slate-800 rounded-lg p-3">
          <p className="text-blue-400 font-semibold">6 July</p>
          <p className="text-white">
            Chemistry - Race 13 & Exercise 1
          </p>
        </div>

        <div className="bg-slate-800 rounded-lg p-3">
          <p className="text-blue-400 font-semibold">7 July</p>
          <p className="text-white">
            Physics - Module Exercise
          </p>
        </div>

        <div className="bg-slate-800 rounded-lg p-3">
          <p className="text-blue-400 font-semibold">8 July</p>
          <p className="text-white">
            Mathematics - Gyanoday 12
          </p>
        </div>
      </div>
    </div>
  );
}