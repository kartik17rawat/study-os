export default function RevisionTracker() {
  const topics = [
    "Atomic Structure",
    "Kinematics",
    "Functions",
    "Periodic Table",
    "Trigonometry",
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <h2 className="text-2xl font-bold text-white mb-6">
        🔁 Revision Tracker
      </h2>

      <div className="space-y-3">
        {topics.map((topic) => (
          <label
            key={topic}
            className="flex items-center gap-3 text-white bg-slate-800 p-3 rounded-lg"
          >
            <input
              type="checkbox"
              className="w-5 h-5 accent-green-500"
            />
            {topic}
          </label>
        ))}
      </div>
    </div>
  );
}