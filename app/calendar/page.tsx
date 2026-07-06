import Link from "next/link";
import StudyCalendar from "../../components/calendar/StudyCalendar";

export default function CalendarPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">

      {/* Header */}
      <div className="flex items-center justify-between mb-8">

        <div>
          <h1 className="text-4xl font-bold">
            📅 Study Calendar
          </h1>

          <p className="text-slate-400 mt-2">
            Manage your study schedule and upcoming events.
          </p>
        </div>

        <Link
          href="/dashboard"
          className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl font-semibold transition"
        >
          ← Dashboard
        </Link>

      </div>

      {/* Quick Navigation */}

      <div className="flex flex-wrap gap-3 mb-8">

        <Link
          href="/tasks"
          className="bg-slate-800 hover:bg-slate-700 px-4 py-3 rounded-xl"
        >
          📋 Tasks
        </Link>

        <Link
          href="/revision"
          className="bg-slate-800 hover:bg-slate-700 px-4 py-3 rounded-xl"
        >
          🔁 Revision
        </Link>

        <Link
          href="/tests"
          className="bg-slate-800 hover:bg-slate-700 px-4 py-3 rounded-xl"
        >
          🧪 Tests
        </Link>

        <Link
          href="/analytics"
          className="bg-slate-800 hover:bg-slate-700 px-4 py-3 rounded-xl"
        >
          📊 Analytics
        </Link>

      </div>

      {/* Calendar */}

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg">
        <StudyCalendar />
      </div>

    </main>
  );
}<div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg">
  <StudyCalendar />
</div>