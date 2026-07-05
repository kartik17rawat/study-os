export default function Header() {
  return (
    <header className="flex items-center justify-between bg-slate-900 rounded-xl p-6">
      <div>
        <h1 className="text-4xl font-bold text-white">
          📚 Study OS
        </h1>

        <p className="text-slate-400 mt-2">
          Welcome back, Kartik 👋
        </p>
      </div>

      <div className="text-right">
        <p className="text-orange-400 text-xl font-bold">
          🔥 0 Day Streak
        </p>

        <p className="text-slate-400">
          Keep Studying!
        </p>
      </div>
    </header>
  );
}