"use client";

export default function RevisionTracker() {
  const revisionData = {
    Chemistry: [
      "Atomic Structure",
      "Mole Concept",
      "Chemical Bonding",
      "Periodic Table",
      "Thermodynamics",
    ],

    Physics: [
      "Kinematics",
      "Laws of Motion",
      "Work Power Energy",
      "Center of Mass",
      "Rotation",
    ],

    Mathematics: [
      "Functions",
      "Trigonometry",
      "Quadratic Equations",
      "Sequence & Series",
      "Straight Lines",
    ],
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <h2 className="text-2xl font-bold text-white mb-6">
        🔁 Revision Tracker
      </h2>

      {Object.entries(revisionData).map(([subject, chapters]) => (
        <div key={subject} className="mb-6">
          <h3 className="text-xl font-bold text-blue-400 mb-3">
            {subject}
          </h3>

          <div className="space-y-3">
            {chapters.map((chapter) => (
              <label
                key={chapter}
                className="flex items-center gap-3 text-white bg-slate-800 p-3 rounded-lg"
              >
                <input
                  type="checkbox"
                  className="w-5 h-5 accent-green-500"
                />
                {chapter}
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}