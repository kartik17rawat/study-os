export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-8">
        📚 Study OS
      </h1>

      <nav className="space-y-4">
        <button className="w-full text-left p-3 rounded-lg bg-slate-800 hover:bg-slate-700">
          🏠 Dashboard
        </button>

        <button className="w-full text-left p-3 rounded-lg hover:bg-slate-800">
          📖 Subjects
        </button>

        <button className="w-full text-left p-3 rounded-lg hover:bg-slate-800">
          📝 Homework
        </button>

        <button className="w-full text-left p-3 rounded-lg hover:bg-slate-800">
          📅 Timetable
        </button>

        <button className="w-full text-left p-3 rounded-lg hover:bg-slate-800">
          ⏱️ Pomodoro
        </button>

        <button className="w-full text-left p-3 rounded-lg hover:bg-slate-800">
          ⚙️ Settings
        </button>
      </nav>
    </aside>
  );
}