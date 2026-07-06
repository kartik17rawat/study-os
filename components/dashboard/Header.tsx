export default function Header() {
  return (
    <header className="bg-slate-900 rounded-xl p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            📚 Study OS
          </h1>

          <p className="text-slate-400 mt-2">
            Welcome back, Kartik 👋
          </p>
        </div>

        <div className="md:text-right">
          <p className="text-orange-400 text-lg md:text-xl font-bold">
            🔥 0 Day Streak
          </p>

          <p className="text-slate-400">
            Keep Studying!
          </p>
        </div>
      </div>
    </header>
  );
}